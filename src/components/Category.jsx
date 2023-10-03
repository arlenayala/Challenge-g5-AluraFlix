import React, { useState} from "react";

import styled from "styled-components";
import TextInput from "./CampoTexto";
import Button from "./Button";
import CustomTable from "./Table";
import { useCategoriaContext } from './CategoriasContext';


const FormContainer = styled.div`
  background-color: #00000099;
  padding: 50px;
`;

const ColorInputContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const ColorInput = styled.input`
  width: 100%;
`;

const Categoria = styled.h1`
  font-size: 60px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 30px;
`;

const TableContainer = styled.div`
  margin-top: 20px;
`;

const Category = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [categorias, setCategorias] = useState([]);
  
  // Nuevo estado local para el color en el formulario de edición
  const [editColor, setEditColor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { agregarCategoria } = useCategoriaContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaCategoria = {
      id: categorias.length + 1,
      titulo: color,
      name,
      description 
      
    };
    agregarCategoria(nuevaCategoria);
    setSelectedCategory(color);
    setCategorias([...categorias, nuevaCategoria]);
    setName("");
    setDescription("");
    setColor("");

     // Llama a una función en el componente padre (si es necesario) para manejar la nueva categoría
  if (props.onCategoryCreated) {
    props.onCategoryCreated(nuevaCategoria);
  }
  };

  const handleReset = () => {
    setName("");
    setDescription("");
    setColor("");
  };

  const handleDelete = (id) => {
    const nuevasCategorias = categorias.filter((categoria) => categoria.id !== id);
    setCategorias(nuevasCategorias);
  };

  const handleEdit = (categoria) => {
    setName(categoria.name);
    setDescription(categoria.description);
    // Establecer el color local para el formulario de edición
    setEditColor(categoria.color);
  };

  return (
    <FormContainer>
      <Categoria>Nueva Categoría</Categoria>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Nombre"
          name="titulo"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextInput
          label="Descripción"
          name="description"
          required
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <ColorInputContainer>
          {/* Utilizar el estado local editColor para el color */}
          <ColorInput
            label="Ingresa el color en Hex."
            type="color"
            required
            name="color"
            value={editColor} // Usar editColor en lugar de color
            onChange={(e) => {
              setEditColor(e.target.value);
            }}
          
          />
        </ColorInputContainer>

        <Button type="submit">Guardar</Button>
        <Button type="reset" onClick={handleReset}>
          Limpiar
        </Button>
      </form>
      <TableContainer>
        <CustomTable categorias={categorias} onEdit={handleEdit} onDelete={handleDelete} />
      </TableContainer>
    </FormContainer>
  );
};

export default Category;
