import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: false,
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setTheme: (state) => {
            state.theme = !state.theme
        },

    },
})

export const { setTheme } = appSlice.actions

export default appSlice.reducer