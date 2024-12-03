import axios from "axios";



function login(){
    return axios.post("http://127.0.0.1:3000/todolist/login");

};

export default{
    login
}

