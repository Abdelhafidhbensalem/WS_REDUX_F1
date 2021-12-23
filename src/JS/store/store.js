import {createStore} from "redux"
import {photoReducer} from "../reducers/photoReducer"

export const store=createStore(photoReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())