import { FETCH_API } from './Types'

export const fetchApi = query => {

    return {
        type: FETCH_API,
        payload: query
    }
}