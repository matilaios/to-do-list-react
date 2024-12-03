import { useState } from "react";
import { Container, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import TaskService from "../Services/TaskService";
import { toast } from "react-toastify";



const AddTask = () => {

const [task, setTask]=useState({}); //accolade =objet, crochet= tableau

const handleChange =(e)=>{
// console.log(e.target.value);
// console.log(e.target.name)
setTask({...task,[e.target.name]:e.target.value});
}



const handleSubmit= async (e)=>{
//Bloquer le rafraichissement de la plage
e.preventDefault();

try {
    const response = await TaskService.addTask(task)
    console.log(response);
    toast.success("tâche ajoutée avec succès")

    
} catch (error) {
    console.log(error);
    toast.error("erreur lors de l'ajout de la tâche")
}   


        console.log(task);
    }



    return <Container className="d-flex flex-column align-items-center">
    
    <h1>Ajout d'une tâche</h1>

<div  className="login">
<form onSubmit={handleSubmit}>
    <InputGroup className="mb-3" >
        <InputGroup.Text id="basic-addon1">Libelle</InputGroup.Text>
        <Form.Control
          placeholder="Libelle"
          aria-label="Libellé"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="libelle_task"
          required
        /> 
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
        <Form.Control
          placeholder="Description"
          aria-label="Description"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="description_task"
          required
        />
      </InputGroup>


      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Date de création</InputGroup.Text>
        <Form.Control
          placeholder="date_de_creation"
          aria-label="date_de_creation"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="date_creation_task"
          type="date"
          required
        />
      </InputGroup>


      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Etat</InputGroup.Text>
        <Form.Control
          placeholder="A faire, fait,en cours"
          aria-label="Etat"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="id_state"
          required
        />
      </InputGroup>

      
    <Form.Control type="submit" value="Ajouter" className="btn btn-primary"/>
    <button className="btn btn-info"> <a href="/">Retour à la page d'accueil</a></button>
    </form>
    </div>
    </Container>;
}
 
export default AddTask;