import { Outlet } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const RouteSecu =() => {
    const {isAuthentificated}=useContext(AuthContext);
    
    return <>
    {isAuthentificated ? <Outlet/>:<LoginPage/>}
    
    
    
    </>;
}
 
export default RouteSecu;