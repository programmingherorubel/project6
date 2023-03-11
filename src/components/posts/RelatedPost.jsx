import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedPosts } from '../../features/related/relatedSlice';
import RelatedPostItem from './RelatedPostItem'

const RelatedPost = ({ tags, currentId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedPosts({ tags, currentId }))
  }, [])
  const {posts, isLoading, isError, error} = useSelector(state => state.related)

  let content = []
  if (isLoading && !isError) content = "Loading...";
  if (!isLoading && !isError && posts.length < 1) content = "No related posts found"
  if (!isLoading && isError) content = error;
  
  if (!isLoading && !isError && posts.length) content = posts.map(post => <RelatedPostItem key={post.id} post={post} />) ;
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        {content}
      </div>
    </aside>
  )
}

export default RelatedPost