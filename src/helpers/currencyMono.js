import axios from 'axios';

const API_KEY = 'b70a6b3522db4135949be5b7b0660667';
const BASE_URL = 'https://openexchangerates.org/api/latest.json';
const CURRENCY_CACHE_KEY = 'currencyRatesCache';

export const getCurrencyRates = async () => {
  const cachedData = getCachedData();
  if (cachedData) return cachedData;

  try {
    const response = await axios.get(`${BASE_URL}?app_id=${API_KEY}`);

    const rates = response.data.rates;
    const ronPerUsd = rates.RON;

    // Ensure proper number formatting
    const formatRate = value => {
      return parseFloat(value).toFixed(2);
    };

    const currencyData = {
      usdRate: {
        rateBuy: formatRate(ronPerUsd),
        rateSell: formatRate(ronPerUsd * 1.02),
      },
      euroRate: {
        rateBuy: formatRate(ronPerUsd / rates.EUR),
        rateSell: formatRate((ronPerUsd / rates.EUR) * 1.02),
      },
      lastUpdated: new Date().toLocaleTimeString(),
    };

    cacheData(currencyData);
    return currencyData;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch currency rates');
  }
};

// Helper functions
function getCachedData() {
  const cached = localStorage.getItem(CURRENCY_CACHE_KEY);
  if (!cached) return null;

  const { timestamp, data } = JSON.parse(cached);
  const isFresh = Date.now() - timestamp < 3600000; // 1 hour cache

  return isFresh ? data : null;
}

function cacheData(data) {
  const cache = {
    timestamp: Date.now(),
    data,
  };
  localStorage.setItem(CURRENCY_CACHE_KEY, JSON.stringify(cache));
}
