import { Types } from '../actions/Types'

const initialState = {
    //Considering this as a default query
    query: 'election',
    
    //Tweets array.
    data: [],

     //Have the loading state indicate if it's done getting data.
    loading: true,

    //Have state for error message for recieving an error.
    errorMessage: '',
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        
        
        case Types.FETCH_API: 
            return { ...state, loading: action.payload };
            
        case Types.FETCHING_TWEETS_FULFILLED:
            return { ...state, data: action.payload, loading: action.loading };
            
        case Types.FETCHING_TWEETS_FULFILLED:
            return { ...state, errorMessage: action.payload, loading: action.loading };
            
     
        default:
            return state;    
    }
}

export default homeReducer