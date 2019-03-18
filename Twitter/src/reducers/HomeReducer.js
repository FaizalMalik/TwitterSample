import { FETCH_API } from '../actions/Types'

const initialState = {
    //Considering this as a default query
    query : 'election'
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FETCH_API: {
            return {
                ...state,
                query: action.payload
            }
        };
        
        default:
            return state;    
    }
}

export default homeReducer