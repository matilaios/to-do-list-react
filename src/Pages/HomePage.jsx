import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import TaskService from "../Services/TaskService";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useNavigate } from "react-router-dom";






const HomePage = () => {
    const [tasks, setTasks]=useState([])
    const navigate=useNavigate();

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



    return <Container className="d-flex flex-column align-items-center gap 3">
    
<h1> Home Page</h1>

<div>
    <table>
        <thead>
            <tr>
<th className="d-flex flex-align-items col-5 ML-5">Tâches à faire</th>
<th>Tâches en cours</th>
<th>Tâches finies</th>

            </tr>
            </thead>
            <th>
                <tbody>
<ul>
{tasks.map((task)=>{
    console.log(task)
    return <li>{task.libelle_task}
    <button onClick={()=>{navigate("/update/"+task.id_task)}} >MODIFIER</button>
    <button>SUPPRIMER</button>
    </li>;
})}
</ul>
</tbody>
</th>
</table>
</div>
    
    </Container>;
}
 
export default HomePage;