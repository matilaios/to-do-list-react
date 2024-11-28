import { useEffect, useState } from "react";
import TaskService from "../Services/TaskService";
import { toast } from "react-toastify";
import { Form, InputGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";



{/* //POUR MODIFIER UNE TACHE */}

    

const UpdatePage= () => {

    const [task, setTask]=useState();

    
        const [taskById, setTaskById]=useState({})
        const {id}= useParams();
    
        const fetchTaskById = async ()=>{ //pour récupérer les tâches par leur ID
            try {
                const response = await TaskService.getTaskById(id);
                setTaskById(response)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
    
    }

    useEffect(()=>{
        fetchTaskById()
    },[]) //mettre l'id entre crochet ?

    const handleSubmit = async (e)=>{
        e.preventDefault();

    try {
        const response = await TaskService.updateTask();
        console.log(response);
        toast.success("tâche modifiée")
    } catch (error) {
        console.log(error);
        toast.error("erreur lors de la modification")        
    }

    }


    return <>
    <h1>modification</h1>

    <Form onSubmit={handleSubmit}>
    <InputGroup className="mb-3" >
        <InputGroup.Text id="basic-addon1">Libelle</InputGroup.Text>
        <Form.Control
        
          aria-label="libelle task"
          aria-describedby="basic-addon1"
          name="libelle_task"
        />
        
      </InputGroup>
      <button type={handleSubmit}>MODIFIER</button>
</Form>

    </>;
}
 
export default UpdatePage ;

    
