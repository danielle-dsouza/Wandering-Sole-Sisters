import * as actions from './actionTypes';

export const createBlog = (blog) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore.collection("blogs").add({
        ...blog,
        authorFirstName: "Danielle",
        authorLastName: "DSouza",
        authorId: 124,
        postedAt: new Date()
      }).then(() => {
        dispatch({ type: actions.CREATE_BLOG, blog: blog });
      }).catch((err) => {
        dispatch({ type: actions.CREATE_BLOG_ERR, err });
      });
  };
};
