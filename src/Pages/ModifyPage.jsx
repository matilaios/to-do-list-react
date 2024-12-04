import { useEffect, useState } from "react";
import TaskService from "../Services/TaskService";
import { toast } from "react-toastify";
import { Form, InputGroup } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";

{
  /* //POUR MODIFIER UNE TACHE */
}

const ModifyPage = () => {
//   const [task, setTask] = useState();

  const [taskById, setTaskById] = useState({});
  const { id } = useParams();
  // console.log(id);

  const fetchTaskById = async () => {
    //pour récupérer les tâches par leur ID
    try {
      const response = await TaskService.getTaskById(id);
      setTaskById(response.data[0]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTaskById();
  }, [id]); //mettre l'id entre crochet ?

  const handleChange = (e) => {
    setTaskById({ ...taskById, [e.target.name]: e.target.value });
    console.log({ ...taskById, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(taskById);

    try {
      const response = await TaskService.modifyTask(id, taskById);
      console.log(response);
      toast.success("tâche modifiée");
    } catch (error) {
      console.log(error);
      toast.error("erreur lors de la modification");
    }
  };

  return (
    <>
      <h1>modification</h1>

      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Libelle</InputGroup.Text>
          <Form.Control
            value={taskById.libelle_task}
            onChange={handleChange}
            aria-label="libelle task"
            aria-describedby="basic-addon1"
            name="libelle_task"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
          <Form.Control
            value={taskById.description_task}
            onChange={handleChange}
            aria-label="description_task"
            aria-describedby="basic-addon1"
            name="description_task"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Date de création</InputGroup.Text>
          <Form.Control
            value={taskById.date_creation_task}
            onChange={handleChange}
            aria-label="date_creation_task"
            aria-describedby="basic-addon1"
            name="date_creation_task"
          />
        </InputGroup>


        <button className="btn btn-info" type="submit">MODIFIER</button>
        <br />
        <br />
        <button className="btn btn-info"> <a href="/tasks">Retour à la page d'accueil</a></button>
      
      </Form>
    </>
  );
};

export default ModifyPage;
