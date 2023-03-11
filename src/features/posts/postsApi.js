import axios from '../../utils/axios.js'


export const getPosts = async ({sort, filter}) => {
    let queryString = "";
    if(sort ==="newest") queryString += `_sort=createdAt&_order=desc`
    if(sort ==="most_liked") queryString += `_sort=likes&_order=desc`
    if(filter === 'saved') queryString += `&isSaved=true`

    const res = await axios.get(`/blogs?${queryString}`)
    return res.data
}


