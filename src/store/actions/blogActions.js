import * as actions from './actionTypes';

export const createBlog = (blog) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const authorId = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;

    firestore.collection("blogs").add({
        ...blog,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        postedAt: new Date()
      }).then(() => {
        dispatch({ type: actions.CREATE_BLOG, blog: blog });
      }).catch((err) => {
        dispatch({ type: actions.CREATE_BLOG_ERR, err });
      });
  };
};
