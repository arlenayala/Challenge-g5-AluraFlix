import React, { createContext, useContext, useState } from 'react';
import { v4 as uuid } from "uuid"; // Importa la función uuid

const CategoriasContext = createContext();

export function CategoriasProvider({ children }) {
  const [categorias, setCategorias] = useState([
    {
      id: uuid(),
      titulo: "Frontend",
    },
    {
      id: uuid(),
      titulo: "Backend",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const agregarCategoria = (nuevaCategoria) => {
    setCategorias([...categorias, nuevaCategoria]);
  };

  return (
    <CategoriasContext.Provider value={{
      categorias,
      setCategorias,
      selectedCategory,
      setSelectedCategory,
      agregarCategoria, // Asegúrate de incluirlo aquí
    }}>
      {children}
    </CategoriasContext.Provider>
  );
}

export function useCategoriaContext() {
  return useContext(CategoriasContext);
}

