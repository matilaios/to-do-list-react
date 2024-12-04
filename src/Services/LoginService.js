import axios from "axios";



function login(id_user){
    return axios.post("http://127.0.0.1:3000/todolist/login", id_user);

}

export default{
    login
};

