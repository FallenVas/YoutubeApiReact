import axios from 'axios'

const KEY = "AIzaSyBulPrGJyEyIFRgSYLX2dp978tfalgJK8s"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key : KEY
    }
})