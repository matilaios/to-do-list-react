import axios from "axios";

function getAllTask(){
return axios.get("http://127.0.0.1:3000/todolist/task")


}

function getTaskById(id){
    return axios.get("http://127.0.0.1:3000/todolist/task",id)
    
    
    }



function addTask(task){
    return axios.post("http://127.0.0.1:3000/todolist/task/addTask",task)
}

function updateTask(){
    return axios.patch("http://127.0.0.1:3000/todolist/task/updateTask")
}

export default{
getAllTask,
getTaskById,
addTask,
updateTask

}