

import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/posts/postsSlice.js'
import postSlice from '../features/post/postSlice.js'
import relatedSlice from '../features/related/relatedSlice.js'
import filterSlice from '../features/filter/filterSlice.js';

const store = configureStore({
    reducer: {
        posts: postsSlice,
        post: postSlice,
        related: relatedSlice,
        filter: filterSlice,

    }
})
export default store;