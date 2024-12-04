import { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import TaskService from "../Services/TaskService";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import AuthContext from "../Context/AuthContext";
import AuthService from "../Services/AuthService";


const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const {isAuthentificated, user}=useContext(AuthContext)
  const navigate = useNavigate();
//   const [deleteTask, setDeleteTask] = useState();
// const [taskEnCours, setTaskEnCours]=useState();
// const [taskDone, setTaskDone]=useState;




  const fetchTasks = async () => {
    try {
      const response = await TaskService.getAllTask();
      console.log(response.data);
      setTasks(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(()=>{
  // fetchTasks();

  // }, []);

  const handleSupp = async (id_task) => {
    try {
      await TaskService.deleteTask(id_task);

      fetchTasks();
      toast.success("tâche supprimée");
    } catch (error) {
      console.log(error);
      toast.error("suppression compromise");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);


AuthService.isValid();


  return (



    <Container className="d-flex flex-column align-items-center gap 3">
      <h1> Home Page</h1>


{isAuthentificated ? "vous êtes connecté" : "vous n'êtes pas connecté"}
{user.email && <p>Email:{user.email}</p>}

      <button > <a href="/add">Ajouter une tâche</a></button>

      <div>
        <table>
          <thead>
            <tr>
              <th className="d-flex flex-align-items col-5 ML-5">
                Tâches à faire
              </th>
              <th>Tâches en cours</th>
              <th>Tâches finies</th>
            </tr>
          </thead>
          <th>
            <tbody>
              <ul>
                {tasks.map((task) => {
                  console.log(task);
                  return (
                    
                    <li> tâche : 
                      {task.libelle_task} 
                      <br />
                      Description:
                      {task.description_task}
                    <br />
                  
                      <button
                        onClick={() => {
                          navigate("/update/" + task.id_task);
                        }}
                      >
                        MODIFIER
                      </button>
                      
                      <button type="submit" onClick={()=> handleSupp(task.id_task)}>
                        SUPPRIMER
                      </button>
                      
                     
                    </li>
                  );
                })}
              </ul>
            </tbody>
          </th>
        </table>
      </div>
    </Container>
  );
};

export default HomePage;
