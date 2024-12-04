import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AddTask from './Pages/AddTask';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import SignIn from './Pages/SignIn';
import ModifyPage from './Pages/ModifyPage';
import LoginPage from './Pages/LoginPage';
import AuthContext from './Context/AuthContext';
import { useState } from 'react';
import AuthService from './Services/AuthService';
import RouteSecu from './Component/RouteSecu';




function App()  {

  const [isAuthentificated, setIsAuthenticated]=useState(AuthService.isValid());
    // const [token, setToken] =useState('');
  //le token va protéger les routes

const [user,setUser]=useState(AuthService.getUser());

  return <>
  
  <AuthContext.Provider value={{isAuthentificated, setIsAuthenticated, user, setUser}}>

  
  
  <BrowserRouter>
  <Routes>

{/* <Route path="/" element={<HomePage/>}/>
<Route path="/add" element={<AddTask/>}/>
<Route path ="/user" element={<SignIn/>}/>
<Route path="/update/:id" element={<ModifyPage/>}/>
<Route path="/login" element={<LoginPage/>}/> */}


<Route element={<RouteSecu />}/>
<Route path="/tasks" element={<HomePage/>}/>

<Route path="/add" element={<AddTask/>}/>
<Route path ="/user" element={<SignIn/>}/>
<Route path="/update/:id" element={<ModifyPage/>}/>
<Route path="/" element={<LoginPage/>}/>
</Routes>

{/* <Route path="/login/" element={<LoginPage setToken={setToken}/>}/> */}

{/* le chemin s'appelle en fonction du chemin dans l'onglet de react */}
 
  
  <ToastContainer
position="bottom-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
  
  

  
  </BrowserRouter>
  
  </AuthContext.Provider>;
  </>
}
 
export default App ;

//404 : ne trouve pas la source. plusieurs solution
//vérifier que le serveur node soit allumé
//vérifier ou se situe nos routes dans le back dans l'index
//, quand on envoie des données (dans le service), + quand on va chercher (concatenation)