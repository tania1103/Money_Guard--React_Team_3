import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { toasterCustomStyles } from '../../helpers/toasterCustomStyles';

axios.defaults.baseURL = 'https://wallet.b.goit.study';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


// Add transaction
export const createTransactionThunk = createAsyncThunk(
  'transactions/create',
  async (transactionData, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/transactions', transactionData);
      toast.success('Transaction successfully added!', toasterCustomStyles);
      return data;
    } catch (error) {
      toast.error(
        'Failed to create transaction. Please try again!',
        toasterCustomStyles
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Get all transactions
export const getTransactionsThunk = createAsyncThunk(
  'transactions/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/transactions');
      return data;
    } catch (error) {
      toast.error(
        'Failed to fetch transactions. Please try again!',
        toasterCustomStyles
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update transaction
export const updateTransactionThunk = createAsyncThunk(
  'transactions/update',
  async ({ transactionId, transactionData }, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `/api/transactions/${transactionId}`,
        transactionData
      );
      toast.success('Transaction successfully updated!', toasterCustomStyles);
      return data;
    } catch (error) {
      toast.error(
        'Failed to update transaction. Please try again!',
        toasterCustomStyles
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Delete transaction
// export const deleteTransactionThunk = createAsyncThunk(
//   'transactions/delete',
//   async (transactionId, thunkAPI) => {
//     try {
//       await axios.delete(`/api/transactions/${transactionId}`);
//       toast.success('Transaction successfully deleted!', toasterCustomStyles);
//       return transactionId;
//     } catch (error) {
//       toast.error(
//         'Failed to delete transaction. Please try again!',
//         toasterCustomStyles
//       );
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteTransactionThunk = createAsyncThunk(
//   'transactions/delete',
//   async (transactionId, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const token = state.auth?.token;

//     if (!token) {
//       return thunkAPI.rejectWithValue('Token missing! Please log in.');
//     }

//     try {
//       await axios.delete(`/api/transactions/${transactionId}`);
//       setAuthHeader(token);
//       return transactionId;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || 'Failed to delete transaction.'
//       );
//     }
//   }
// );

export const deleteTransactionThunk = createAsyncThunk(
  'transactions/delete',
  async (transactionId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth?.token;

    console.log('Token:', token);

    if (!token) {
      return thunkAPI.rejectWithValue('Token missing! Please log in.');
    }

    setAuthHeader(token);

    try {
      await axios.delete(`/api/transactions/${transactionId}`);
      return transactionId;
    } catch (error) {
      console.error('Delete error:', error.response?.data || error.message); // Debugging
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to delete transaction.'
      );
    }
  }
);


// Get transaction categories
export const getTransactionCategoriesThunk = createAsyncThunk(
  'transactionCategories/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/transaction-categories');
      return data;
    } catch (error) {
      toast.error(
        'Failed to fetch transaction categories. Please try again!',
        toasterCustomStyles
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
