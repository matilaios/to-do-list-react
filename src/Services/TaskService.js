import axios from "axios";

function getAllTask(){
return axios.get("http://127.0.0.1:3000/todolist/task");


}

function getTaskByIdUser(){
    return axios.get("http://127.0.0.1:3000/todolist/task/getTaskByIdUser");
    }



function addTask(task){
    return axios.post("http://127.0.0.1:3000/todolist/task/addTask",task);
}

function modifyTask(id_task, taskById){
    return axios.patch("http://127.0.0.1:3000/todolist/task/modifyTask/"+id_task,taskById);
}

function deleteTask(id_task){
    return axios.delete("http://127.0.0.1:3000/todolist/task/deleteTask/"+id_task);
}

export default{
getAllTask,
getTaskByIdUser,
addTask,
modifyTask,
deleteTask

}