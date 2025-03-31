export const selectTransactions = state => state.transactions.items;
export const selectTransactionCategories = state =>
  state.transactions.categories;
export const selectIsLoading = state => state.transactions.isLoading;
export const selectIsError = state => state.transactions.isError;
