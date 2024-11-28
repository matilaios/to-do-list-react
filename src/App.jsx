import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AddTask from './Pages/AddTask';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import SignIn from './Pages/SignIn';

function App()  {
  return <>
  
  <BrowserRouter>
  <Routes>

<Route path="/" element={<HomePage/>}/>
<Route path="/add" element={<AddTask/>}/>

<Route path ="/user" element={<SignIn/>}/>
{/* le chemin s'appelle en fonction du chemin dans l'onglet de react */}
  </Routes>
  
  <ToastContainer
position="bottom-right"
autoClose={5000}
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
  
  </>;
}
 
export default App ;