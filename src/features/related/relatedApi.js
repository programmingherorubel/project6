import axios from '../../utils/axios.js'


export const getRelatedPosts = async ({ tags, currentId }) => {
    //  tags_like=javascript&tags_like=vscode&id_ne=1
    let queryString = ""
    const limit = 5;
    if (tags && currentId) {
        queryString += tags?.map(tag => `tags_like=${tag}`).join("&") + `&id_ne=${currentId}`
    }
    const res = await axios.get(`/blogs?${queryString}&_limit=${limit}`)
    return await res.data
}


