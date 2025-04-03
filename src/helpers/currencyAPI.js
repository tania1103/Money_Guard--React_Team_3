import axios from "axios";

const API_KEY = "b70a6b3522db4135949be5b7b0660667"; // Cheia API pentru Open Exchange Rates
const BASE_URL = "https://openexchangerates.org/api/latest.json";
const CURRENCY_CACHE_KEY = "currencyRates";

// Funcție pentru a obține datele valutare de la API
const fetchCurrencyData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?app_id=${API_KEY}`);
    return response.data.rates; // Returnăm doar cursurile valutare
  } catch (error) {
    throw new Error("Failed to fetch data from Open Exchange Rates: " + error.message);
  }
};

// Funcție pentru a obține datele din cache (dacă există și sunt valide)
const getCachedCurrencyData = () => {
  const cachedData = JSON.parse(localStorage.getItem(CURRENCY_CACHE_KEY));
  if (cachedData && Date.now() - cachedData.timestamp < 3600000) {
    // Datele sunt valabile timp de 1 oră
    return cachedData;
  }
  return null;
};

// Funcție pentru a salva datele în cache
const cacheCurrencyData = (data) => {
  const now = Date.now();

  // Calculăm ratele de schimb pentru USD și EUR raportate la RON
  const usdToRon = data.RON && data.USD ? (data.RON / data.USD).toFixed(2) : null;
  const eurToRon = data.RON && data.EUR ? (data.RON / data.EUR).toFixed(2) : null;

  const currencyData = {
    timestamp: now,
    usdRate: usdToRon ? { rateBuy: usdToRon, rateSell: (usdToRon * 1.02).toFixed(2) } : null,
    euroRate: eurToRon ? { rateBuy: eurToRon, rateSell: (eurToRon * 1.02).toFixed(2) } : null,
  };

  localStorage.setItem(CURRENCY_CACHE_KEY, JSON.stringify(currencyData));
  return currencyData;
};

// Funcție principală pentru a obține cursurile valutare
export const getCurrencyRates = async () => {
  let currencyData = getCachedCurrencyData();

  if (currencyData && currencyData.usdRate && currencyData.euroRate) {
    return currencyData; // Returnăm datele din cache dacă sunt valabile
  }

  try {
    const data = await fetchCurrencyData();
    currencyData = cacheCurrencyData(data);
    if (!currencyData.usdRate || !currencyData.euroRate) {
      throw new Error("Incomplete data fetched from API");
    }
  } catch (error) {
    console.error("Error fetching data from API. Retrying...", error.message);
    const data = await fetchCurrencyData();
    currencyData = cacheCurrencyData(data);
  }

  if (!currencyData.usdRate || !currencyData.euroRate) {
    throw new Error("Failed to fetch valid currency data");
  }

  return currencyData;
};
