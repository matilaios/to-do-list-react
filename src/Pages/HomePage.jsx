import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TaskService from "../Services/TaskService";



const HomePage = () => {
    const [tasks, setTasks]=useState([])

    const fetchTasks = async ()=>{
        try {
            const response = await TaskService.getAllTask();
setTasks(response.data)

        } catch (error) {
            console.log(error)
        }


    }

useEffect(()=>{
fetchTasks();


}, []);

//POUR MODIFIER UNE TACHE



    return <Container className="d-flex flex-column align-items-center">
    
<h1> Home Page</h1>

<div>
<ul>
{tasks.map((task)=>{
    console.log(task)
    return <li>{task.libelle_task}</li>
})}
</ul>
</div>
    
    </Container>;
}
 
export default HomePage;