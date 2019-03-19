
import { Types } from '../actions/Types'
import {Constants} from '../constants/Constants'
import { fetchData,fetchTweetsCompleted,fetchTweetsFailed} from '../actions/Category'
import axios from "axios"

// //Define your action creators that will be responsible for asynchronouse operatiosn 
export const fetchTweets = (query) => {
    return dispatch => {
        //Dispatch the fetchData action creator before retrieving to set our loading state to true.
        dispatch(fetchData(true));
        
        //Then get the data.

        const url = Constants.BASE_URL + "?q="+query+"&result_type=popular";
        
            axios.get(url,{headers:{'Authorization':Constants.AUTH_TOKEN,'Content-Type':'application/json'}})
            .then(response => {
              
              return response
            })
            .then(json => {
              
               //Set the results to the data array.
            dispatch(fetchTweetsCompleted(json.data.statuses));
            })
            .catch((error) => {
                dispatch(fetchTweetsFailed(error));
            })
       
    }
}