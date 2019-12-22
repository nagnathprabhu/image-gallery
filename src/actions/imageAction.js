import ImageClient from '../clients/ImageClient'

const fetchImagesStart = () => {
    return {
        type: "FETCH_IMAGES_PENDING"
    }
}

const fetchImagesSuccess = (payload) => {
    return {
        type: "FETCH_IMAGES_SUCCESS",
        payload
    }
}


const fetchImagesError = (error) => {
    return {
        type: "FETCH_IMAGES_ERROR",
        error
    }
}

const setChosenImage = (payload) => {
    return {
        type: "SET_CHOSEN_IMAGE",
        payload
    }
}

const clearChosenImage = () => {
    return {
        type: "CLEAR_CHOSEN_IMAGE"
    }
}


export const fetchImages = () => dispatch => {
    dispatch(fetchImagesStart())
    let ic = new ImageClient()
    return ic.fetchImages().then((data) => dispatch(fetchImagesSuccess(data['data']))).catch(e => dispatch(fetchImagesError(e)))
}

export const setImage = (image) => dispatch => {
    dispatch(setChosenImage(image))
}

export const clearImage = () => dispatch => {
    dispatch(clearChosenImage())
}