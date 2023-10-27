import axios from "axios"

// const default_api = axios.create({
const default_api = axios.create({
    baseURL: "https://ask.puem.tech/api/sub/find_subject/",
    headers: {
        "Content-type": "application/json"
    }
})

export default default_api