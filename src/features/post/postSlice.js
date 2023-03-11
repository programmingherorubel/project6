import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateSaveState } from "./postApi";
import { getPost, updateLikeCount } from "./postApi";


// initialState declare
const initialState = {
    post: {},
    isLoading: false,
    isError: false,
    error: ''
}

// async thunk functions
export const fetchPost = createAsyncThunk("post/fetchPost", getPost)
export const updateLikes = createAsyncThunk("post/updateLikes", updateLikeCount)
export const updateSave = createAsyncThunk("post/updateSave", updateSaveState)

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPost.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.post = payload;
                state.isError = false;
            })
            .addCase(fetchPost.rejected, (state, { error }) => {
                state.isLoading = false;
                state.post = {};
                state.isError = true;
                state.error = error?.message;
            })
            // update likes 
            .addCase(updateLikes.fulfilled, (state, { payload }) => {
                state.post = payload;
            })
            .addCase(updateLikes.rejected, (state, { error }) => {
                state.isError = true;
                state.error = error?.message;
            })
            // update save state 
            .addCase(updateSave.fulfilled, (state, { payload }) => {
                state.post = payload;
            })
            .addCase(updateSave.rejected, (state, { error }) => {
                state.isError = true;
                state.error = error?.message;
            })
    }
})

export default postSlice.reducer;