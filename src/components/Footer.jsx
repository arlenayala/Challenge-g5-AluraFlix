import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import {Logo} from "./Header"
import logo from "../img/logoalura.png"


const StyleFooter = styled.footer`
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  padding: 0 2vw;
  height: 10vh;
  align-items: center;

`

const Footer = () => {

  const navigate = useNavigate();

 
  const goToForm = () => {
    navigate("/formulario");
  };

    return (

        <StyleFooter>
        <Logo src={logo}></Logo>
        <Button onClick={goToForm}>Nuevo Video</Button>

    </StyleFooter>
    )


}


export default Footer