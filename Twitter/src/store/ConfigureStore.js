import { createStore, combineReducers,applyMiddleware } from 'redux';
import homeReducer from '../reducers/HomeReducer'
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    
        home : homeReducer
    
})

const configureStore = () => {
    return createStore(rootReducer,applyMiddleware(thunk))
}

export default configureStore;