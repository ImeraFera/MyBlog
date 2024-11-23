import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    theme: false,
    repositories: [],
    status: 'idle',
    error: null,
};

export const getRepositories = createAsyncThunk(
    'appSlice/getRepositories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://api.github.com/users/ImeraFera/repos');
            console.log(response.data)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Bilinmeyen hata');
        }
    }
);

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setTheme: (state) => {
            state.theme = !state.theme;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRepositories.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getRepositories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.repositories = action.payload;
            })
            .addCase(getRepositories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Bir hata oluştu';
            });
    },
});

export const { setTheme } = appSlice.actions;

export default appSlice.reducer;
