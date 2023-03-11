import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../features/posts/postsSlice';
import PostItem from './PostItem'

const PostGrid = () => {
  const dispatch = useDispatch();
  const {sort, filter} = useSelector(state => state.filter)
  useEffect(() => {
    dispatch(fetchPosts({sort, filter}))
  }, [sort, filter])
  const { posts, isLoading, isError, error } = useSelector(state => state.posts)
  console.log(posts.length)
  // render content on the ui
  let content = []
  if (isLoading && !isError) content = "Loading...";
  if (!isError && posts.length < 1) content = "No posts found" // not working
  if (!isLoading && isError) content = error;
  if (!isLoading && !isError && posts.length > 0 ) content = posts.map(post => <PostItem key={post.id} post={post} />)
  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  )
}

export default PostGrid