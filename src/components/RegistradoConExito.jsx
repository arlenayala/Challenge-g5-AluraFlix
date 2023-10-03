import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import HomePage from "../Pages/HomePage"

const   Registrado= styled.div`

border: 2px solid #f7f5;

`



const RegistradoConExito =() => {

    return (
        <Registrado>
            <h1>REGISTRADO CON ÉXITO</h1>
            <Link to="/" element={<HomePage/>}/>
        </Registrado>

        
    )

}


export default RegistradoConExito