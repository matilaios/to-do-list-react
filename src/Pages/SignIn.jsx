import { useState } from "react";
import UserService from "../Services/UserService";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";





const SignIn = () => {




const [user, setUser]=useState({});

        const handleChange =(e) =>{
            console.log(e.target.value);
            console.log(e.target.name)
            setUser({...user,[e.target.name]:e.target.value}); //des qu'un changement est détecter, il va chercher la target (nom champ) et la valeur du champ. va créer une clef(entre crochet)
        }

        console.log(user);

const handleSubmit= async (e)=>{
    e.preventDefault();
   

try {

    const response  = await UserService.addUser(user);
    console.log(response);
    toast.success("inscription ok")
    
    
} catch (error) {
    console.error(error);
    toast.error("il y a eu un problème lors de votre inscription")
    
}
 console.log(user)
}

    return <>
    <h1 className="d-flex flex-column align-items-center mb-3">Inscription</h1>
    
    <form onSubmit={handleSubmit}> 
    <InputGroup className="mb-3" >
        <InputGroup.Text id="basic-addon1">Nom</InputGroup.Text>
        <Form.Control
          placeholder="ex : DUPONT"
          aria-label="Libellé"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="nom_user"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Prénom</InputGroup.Text>
        <Form.Control
          placeholder="ex : Jean"
          aria-label="Description"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="prenom_user"
        />
      </InputGroup>


      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">mail</InputGroup.Text>
        <Form.Control
          placeholder="ex : nom.prenom@gmail.com"
          aria-label="ex : nom.prenom@gmail.com"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="mail_user"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">password</InputGroup.Text>
        <Form.Control
           aria-label="password"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          name="password_user"
        />
      </InputGroup>

      
    <Form.Control type="submit" value="inscription" className="btn btn-primary"/>
    <button className="btn btn-info"> <a href="/tasks">Retour à la page d'accueil</a></button>
    </form>




    </>;
}
 
export default SignIn;