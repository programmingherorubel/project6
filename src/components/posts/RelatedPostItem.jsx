import React from 'react'
import { Link } from 'react-router-dom'

const RelatedPostItem = ({ post }) => {
  const { title, id, image, tags , createdAt} = post || {}
  return (
    <div className="card">
      <Link to={`/posts/${id}`}>
        <img src={image} className="card-image" alt={title} />
      </Link>
      <div className="p-4">
        <Link to={`/posts/${id}`} className="text-lg post-title lws-RelatedPostTitle">
          {title}
        </Link>
        <div className="mb-0 tags">
          {tags?.map(tag => <span key={tag}>#{tag},</span>)}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  )
}

export default RelatedPostItem