export const saveToLocalStorage = data => {
  localStorage.setItem('transactions', JSON.stringify(data));
};

export const getFromLocalStorage = () => {
  const storedData = localStorage.getItem('transactions');
  return storedData ? JSON.parse(storedData) : [];
};