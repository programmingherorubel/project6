import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BackToHome from '../components/posts/BackToHome'
import PostDetail from '../components/posts/PostDetail'
import RelatedPost from '../components/posts/RelatedPost'
import { fetchPost } from '../features/post/postSlice'

const PostView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id))
  }, [id])

  const { post, isLoading, isError, error } = useSelector(state => state.post)

  // render content on the ui
  let content = []
  if (isLoading && !isError) content = "Loading...";
  if (!isLoading && !isError) content = "Loading...";
  if (!isLoading && isError) content = error;
  if (!isLoading && !isError && post?.id) content = <>
    <PostDetail post={post} />
    <RelatedPost tags={post.tags} currentId={post.id} />
  </>;


  return (
    <>
      <BackToHome />
      <section className="post-page-container">
        {content}
      </section>
    </>
  )
}

export default PostView