import { createSlice } from '@reduxjs/toolkit';
import { logoutThunk } from '../auth/operations';

const initialState = {
  isLogOutModalOpen: false,
  isEditModalOpen: false,
  isAddModalOpen: false,
  isCollaboratorsModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openLogOutModal(state) {
      state.isLogOutModalOpen = true;
      state.isAddModalOpen = false;
      state.isEditModalOpen = false;
      state.isCollaboratorsModalOpen = false;
    },
    openEditModal(state) {
      state.isEditModalOpen = true;
      state.isLogOutModalOpen = false;
      state.isAddModalOpen = false;
      state.isCollaboratorsModalOpen = false;
    },
    openAddModal(state) {
      state.isAddModalOpen = true;
      state.isLogOutModalOpen = false;
      state.isEditModalOpen = false;
      state.isCollaboratorsModalOpen = false;
    },
    openCollaboratorsModal: state => {
      state.isCollaboratorsModalOpen = true;
      state.isLogOutModalOpen = false;
      state.isEditModalOpen = false;
      state.isAddModalOpen = false;
    },
    closeModal() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(logoutThunk.fulfilled, () => {
      return initialState;
    });
  },
});

export const {
  openLogOutModal,
  openEditModal,
  openAddModal,
  closeModal,
  openCollaboratorsModal,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
