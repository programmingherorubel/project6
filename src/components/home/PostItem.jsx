import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({ post }) => {
  const { id, title, image, tags, likes, createdAt, isSaved } = post || {}
  return (
    <div className="lws-card">
      <Link to={`/posts/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
        </div>
        <Link to={`/posts/${id}`} className="lws-postTitle"> {title}</Link>

        <div className="lws-tags">
          {tags.map(tag => <Link to="" key={tag}>#{tag}, </Link>)}
        </div>

        {isSaved && <div className="flex gap-2 mt-4">
          <span className="lws-badge"> Saved </span>
        </div>}
      </div>
    </div>
  )
}

export default PostItem