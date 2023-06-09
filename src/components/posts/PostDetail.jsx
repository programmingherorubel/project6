import React from 'react';
import { useDispatch } from 'react-redux';
import { updateLikes, updateSave } from '../../features/post/postSlice';

const PostDetail = ({ post }) => {
    const dispatch = useDispatch();
    const {id, title, image, likes, tags, isSaved, description } = post || {}

    return (<main className="post">
        <img src={image} alt={title} className="w-full rounded-md" id="lws-megaThumb" />
        <div>
            <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                {title}
            </h1>
            <div className="tags" id="lws-singleTags">
                {tags?.map(tag => <span key={tag}>#{tag}, </span>)}
                {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
            </div>
            <div className="btn-group">
                {/* <!-- handle like on button click --> */}
                <button onClick={() => dispatch(updateLikes({ id, likeCount: likes }))} className="like-btn" id="lws-singleLinks">
                    <i className="fa-regular fa-thumbs-up"></i> {likes}
                </button>
                {/* <!-- handle save on button click --> */}
                {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
                <button onClick={() => dispatch(updateSave({ id, saveState: isSaved }))} className={`${isSaved && "active"} save-btn`} id="lws-singleSavedBtn">
                    <i className="fa-regular fa-bookmark"></i> {isSaved ? "Saved" : "Save"}
                </button>
            </div>
            <div className="mt-6">
                <p>{description}</p>
            </div>
        </div>
    </main>)
}

export default PostDetail