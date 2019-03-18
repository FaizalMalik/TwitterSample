import { createStore, combineReducers } from 'redux';
import homeReducer from '../reducers/HomeReducer'


const rootReducer = combineReducers({
    
        home : homeReducer
    
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore;