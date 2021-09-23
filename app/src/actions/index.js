import axios from 'axios'

export const FETCHING_CRYPTO_LOADING = 'FETCHING_CRYPTO_LOADING';
export const FETCHING_CRYPTO_SUCCESS = 'FETCHING_CRYPTO_SUCCESS';
export const FETCHING_CRYPTO_FAIL = 'FETCHING_CRYPTO_FAIL';

export const getCrypto = () => {

    return dispatch => {
        dispatch({type: FETCHING_CRYPTO_LOADING})
        axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10&currency=USD/')
            .then(res => {
                console.log('res.datA', res.data)
                dispatch({type: FETCHING_CRYPTO_SUCCESS, payload: res.data.coins})
            })
            .catch(err => {
                console.log('error: console', err)
                dispatch({type: FETCHING_CRYPTO_FAIL, payload: 'ERROR'})
            })
    }
} 