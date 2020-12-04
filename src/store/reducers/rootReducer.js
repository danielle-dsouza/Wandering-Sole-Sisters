import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'

import authReducer from './authReducer';
import blogReducer from './blogReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;