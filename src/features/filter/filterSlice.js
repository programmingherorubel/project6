import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: "all",
        sort: "",
    },
    reducers: {
        filter: (state, { payload }) => {
            state.filter = payload
        },
        sort: (state, { payload }) => {
            state.sort = payload;
        }
    }

})

// actions 
export const { filter, sort } = filterSlice.actions;

export default filterSlice.reducer;