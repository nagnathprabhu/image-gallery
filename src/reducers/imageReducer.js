// import {FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_ERROR} from './actions/imageAction';
import ActionTypes from '../actions/ActionTypes'
const initialState = {
    pending: false,
    images: [],
    error: null,
    chosenImage: null
}

export default function imageReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.IMAGES.FETCH_IMAGES_PENDING.name:
            return {
                ...state,
                pending: true
            }
        case ActionTypes.IMAGES.FETCH_IMAGES_SUCCESS.name:
            return {
                ...state,
                pending: false,
                images: action.payload
            }
        case ActionTypes.IMAGES.FETCH_IMAGES_ERROR.name:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case ActionTypes.IMAGES.SET_CHOSEN_IMAGE.name:
            return {
                ...state,
                chosenImage: action.payload
            }
        case ActionTypes.IMAGES.CLEAR_CHOSEN_IMAGE.name:
            return {
                ...state,
                chosenImage: null
            }
        default:
            return state;
    }
}
