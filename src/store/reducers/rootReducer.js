import authReducer from "./authReducers"
import projectReducer from "./projectReducers"
import { firestoreReducer } from 'redux-firestore'
import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer