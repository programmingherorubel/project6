import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsApi";


// initialState declare
const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: ''
}

// async thunk functions
export const fetchPosts = createAsyncThunk("posts/fetchPosts", getPosts)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPosts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.posts = payload;
                state.isError = false;
            })
            .addCase(fetchPosts.rejected, (state, { error }) => {
                state.isLoading = false;
                state.posts = [];
                state.isError = true;
                state.error = error?.message;
            })
    }
})

export default postsSlice.reducer;