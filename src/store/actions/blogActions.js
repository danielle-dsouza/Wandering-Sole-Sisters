export const createBlog = (blog) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'CREATE_BLOG', blog: blog })
    }
}