import React, { useState } from "react";
import {LoginService} from "../Services/LoginService";
import UserService from "../Services/UserService";
import { useEffect } from "react";





const LoginPage =()=>{

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');


const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const response= await LoginPage({email, password});
        console.log(response);
        alert('connexion réussie');
        // Navigate('/')
      
        
    } catch (error) {
        console.log(error)
        alert('erreur lors de la connexion')
    }
}

return <>

< form onSubmit={handleSubmit}> 
{/* ne pas oublier le handleSubmit */}
<input
type="email"
value={email}
onChange={(e)=> setEmail(e.target.value)}
placeholder="Email" required
/>
<input
type="password"
value={password}
onChange={(e)=> setPassword(e.target.value)}
placeholder="Password" required
/>
<button type="submit">connexion</button>


</form>

</>

};

export default LoginPage;