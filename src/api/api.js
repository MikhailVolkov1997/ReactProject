import * as Axios from "axios"

const instance = Axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"15119bde-1169-4ede-aea8-da15dbafcd98"
    },
    withCredentials:true
})

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}` )
    .then(response => response.data)
}

export const getProfile = (userId) => {
    return instance.get(`profile/${userId}`)
    .then(response => response.data)
}

export const getAuth = () => {
    return instance.get("auth/me")
    .then(response => response.data)
}
export const unfollowUser=(userId) => {
    return instance.delete(`follow/${userId}`)
    .then(response => response.data)
}
export const followUser=(userId) => {
    return instance.post(`follow/${userId}`)
    .then(response => response.data)
}