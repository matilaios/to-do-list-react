import React, { useContext, useState } from "react";
import LoginService from "../Services/LoginService";
import UserService from "../Services/UserService";
import { useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginService.login({
        mail_user: email,
        password_user: password,
      });
      console.log(response);
      localStorage.setItem("token", response.data.token); //pas besoin de déclarer le setItem. fonction prévue par javaSript pour le localStorage
      AuthService.setAxiosToken();
      setIsAuthenticated(true);

      alert("connexion réussie");
      navigate("/tasks");
    } catch (error) {
      console.log(error);
      alert("erreur lors de la connexion");
      
    }
  };

  AuthService.isValid();

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* ne pas oublier le handleSubmit */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="mail"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input type="submit" value ="connexion" navigatete="/tasks"/>
      </form>
    </>
  )
}

export default LoginPage;
