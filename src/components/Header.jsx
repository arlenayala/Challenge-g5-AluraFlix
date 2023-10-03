import React from "react";
import { styled } from "styled-components";
import {  useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";
import logo from "../img/logoalura.png";
import Button from "./Button";
import HomePage from "../Pages/HomePage";


const StyleHeader = styled.nav`
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  padding: 0 2vw;
  height: 10vh;
  align-items: center;
`;

export const Logo = styled.img`
  height: auto;
  width: 150px;
`;

const Header = () => {

  const navigate = useNavigate();

 
  const goToForm = () => {
    navigate("/formulario");
  };

  return (
    <StyleHeader>
    <Link to="/" element={<HomePage/>}>
      <Logo src={logo} />
    
    </Link>
      


      <Button onClick={goToForm}>Nuevo Video</Button>
     
    </StyleHeader>
  );
};

export default Header;
