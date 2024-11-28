import axios from "axios";

function getAllTask(){
return axios.get("http://127.0.0.1:3000/todolist/task")


}


function addTask(task){
    return axios.post("http://127.0.0.1:3000/todolist/task/addTask",task)
}

function modifyTask(task){
    return axios.post("http://127.0.0.1:3000/todolist/task/modifyTask",task)
}

export default{
getAllTask,
addTask,
modifyTask

}