import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedPosts } from "./relatedApi";


// initialState declare
const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: ''
}

// async thunk functions
export const fetchRelatedPosts = createAsyncThunk("related/fetchRelatedPosts", getRelatedPosts)

const relatedSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchRelatedPosts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.posts = payload;
                state.isError = false;
            })
            .addCase(fetchRelatedPosts.rejected, (state, { error }) => {
                state.isLoading = false;
                state.posts = [];
                state.isError = true;
                state.error = error?.message;
            })
    }
})

export default relatedSlice.reducer;