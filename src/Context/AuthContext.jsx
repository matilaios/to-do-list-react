import { createContext } from "react";

export default createContext({
isAuthentificated : false,
setIsAuthenticated: (value)=>{},
user:{},
setUser:(value)=>{}

});