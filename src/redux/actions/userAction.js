import axios from "axios";
import {addCurrentPageToState, addTotalPagesToState, addUsersToState, setLoading} from "../reducers/userReducer";

export const getUserFromJSON = (page, limit) => {
    return async dispatch => {
        try {
            dispatch(setLoading(true))
            const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            dispatch(addTotalPagesToState(Math.ceil(parseFloat(response.headers['x-total-count']) / limit )))
            dispatch(addUsersToState(response.data))
            dispatch(setLoading(false))
        } catch (e) {
            console.log(e)
        }
    }
}
export const getCurrentPage = (page) => {
        return async dispatch => {
            dispatch(addCurrentPageToState(page))
        }
}