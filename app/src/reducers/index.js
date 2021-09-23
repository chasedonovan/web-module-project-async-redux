import { FETCHING_CRYPTO_LOADING, FETCHING_CRYPTO_SUCCESS, FETCHING_CRYPTO_FAIL} from '../actions'

const initialState = {
    crypto: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCHING_CRYPTO_LOADING):
            return ({
                ...state,
                isFetching: true
            })
        case (FETCHING_CRYPTO_SUCCESS):
            return ({
                ...state,
                crypto:  action.payload,
                error: '',
                isFetching: false
                })
        case (FETCHING_CRYPTO_FAIL):
            return ({
                ...state,
                error: action.payload,
                isFetching: false
            })   
        default: 
            return state;
    }
} 