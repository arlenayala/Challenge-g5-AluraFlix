import React from "react"
import { styled } from "styled-components"


const Button = styled.button`
background-color: #000;
text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  font-size: 15px;
  color: #ffff;
  border: 2px solid white;
  cursor: pointer;
  transition: transform 0.3s ease; 

  &:hover {
    transform: scale(1.1); 
  }
  

`


export default Button

