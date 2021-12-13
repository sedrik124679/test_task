export const GET_USERS = 'GET_USERS'
export const GET_TOTAL_PAGE = 'GET_TOTAL_PAGE'
export const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE'
export const IS_LOADING = 'IS_LOADING'

const defaultState = {
    users: [],
    currentPage: 1,
    totalPages: 0,
    isLoading: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state, users: action.payload
            }
        case GET_TOTAL_PAGE:
            return {
                ...state, totalPages: action.payload
            }
        case GET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.payload
            }
        case IS_LOADING:
            return {
                ...state, isLoading: action.payload
            }
        default:
            return state
    }
}

export const addUsersToState = (users) => ({
    type: GET_USERS,
    payload: users
})
export const addTotalPagesToState = (pages) => ({
    type: GET_TOTAL_PAGE,
    payload: pages
})
export const addCurrentPageToState = (page) => ({
    type: GET_CURRENT_PAGE,
    payload: page
})
export const setLoading = (action) => ({
    type: IS_LOADING,
    payload: action
})