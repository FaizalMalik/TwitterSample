import { Types } from './Types'


//Define your action create that set your loading state.
export const fetchData = (bool) => {
    //return a action type and a loading state indicating it is getting data. 
    return {
        type: Types.FETCH_API,
        payload: bool
    }
}

export const fetchTweetsCompleted = (data) => {
//Return a action type and a loading to false, and the tweets data.
console.log("fetchTweetsCompleted called--",data)

    return {
        type: Types.FETCHING_TWEETS_FULFILLED,
        payload: data,
        loading:false
    }
}

export const fetchTweetsFailed = (error) => {
    //Return a action type and a payload with a error

    return {
        type: Types.FETCHING_TWEETS_FULFILLED_FAILED,
        loading: false,
        payload : error
    }
}

