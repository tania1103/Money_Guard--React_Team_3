import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import Notiflix from 'notiflix';
import { toasterCustomStyles } from "../../helpers/toasterCustomStyles";

axios.defaults.baseURL = "https://wallet.b.goit.study";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/auth/sign-up", credentials);
      setAuthHeader(data.token);
      Notiflix.Notify.success(`Welcome, ${data.user.username}!`);
      return data;
    } catch (error) {
      toast.error(
        "This email is already registered. Please use a different email or log in!",
        toasterCustomStyles
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/auth/sign-in", credentials);
      setAuthHeader(data.token);
      console.log(data)
      Notiflix.Notify.success(`Welcome back, ${data.user.username}!`);
      return data;
    } catch (error) {
      toast.error(
        "Incorrect username or password. Please check your credentials and try again!",
        toasterCustomStyles
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.delete("/api/auth/sign-out");
      clearAuthHeader();
      Notiflix.Notify.success('Logout was successful!');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get("/api/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBalanceThunk = createAsyncThunk(
  "auth/getBalance",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/api/users/current");
      return data.balance;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
