import axios from "axios";

const API_KEY = "b70a6b3522db4135949be5b7b0660667";
const BASE_URL = "https://openexchangerates.org/api/latest.json";
const CURRENCY_CACHE_KEY = "currencyRates";

const fetchCurrencyData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?app_id=${API_KEY}`);
    return response.data.rates; // Obținem doar cursurile valutare
  } catch (error) {
    throw new Error("Failed to fetch data from Open Exchange Rates: " + error.message);
  }
};

const getCachedCurrencyData = () => {
  const cachedData = JSON.parse(localStorage.getItem(CURRENCY_CACHE_KEY));
  if (cachedData && Date.now() - cachedData.timestamp < 3600000) {
    return cachedData;
  }
  return null;
};

const cacheCurrencyData = (data) => {
  const now = Date.now();
  const usdRate = data.USD ? { rateBuy: data.USD.toFixed(2), rateSell: (data.USD * 1.02).toFixed(2) } : null;
  const euroRate = data.EUR ? { rateBuy: data.EUR.toFixed(2), rateSell: (data.EUR * 1.02).toFixed(2) } : null;

  const currencyData = { timestamp: now, usdRate, euroRate };
  localStorage.setItem(CURRENCY_CACHE_KEY, JSON.stringify(currencyData));
  return currencyData;
};

export const getCurrencyRates = async () => {
  let currencyData = getCachedCurrencyData();

  if (currencyData && currencyData.usdRate && currencyData.euroRate) {
    return currencyData;
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
