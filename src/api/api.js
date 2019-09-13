import * as Axios from "axios"

const instance = Axios.create({
    baseURL:"",
    headers:{

    },
    withCredentials:true
})

export const getUsers = (currentPage, pageSize) => {
    return Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {withCredentials:true} )
    .then(response => response.data)
}