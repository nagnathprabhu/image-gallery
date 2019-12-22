import axios from 'axios'

export default class ImageClient {
    constructor() {
    }

    async fetchImages() {
        let images = await axios.get('https://picsum.photos/v2/list?page=1&limit=30')
        return images
    }
    
}