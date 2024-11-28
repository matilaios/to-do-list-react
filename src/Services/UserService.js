import axios from "axios";


function getAllUser(){
    return getAllUser.axios("http://127.0.0.1:3000/todolist/user")
}

function addUser(user){
    return axios.post("http://127.0.0.1:3000/todolist/addUser",user)
}


export default {
    getAllUser,
    addUser
}