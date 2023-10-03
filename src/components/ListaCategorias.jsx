import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useCategoriaContext } from './CategoriasContext'; // Importa el contexto

const ListaCategorias = () => {
  const { categorias, selectedCategory, setSelectedCategory} = useCategoriaContext();

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div style={{ marginBottom: '50px' }}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="categoria-select">Escoge Categoria</InputLabel>
        <Select
          value={selectedCategory}
          onChange={handleChange}
          label="Escoge Categoria"
          inputProps={{
            name: 'categoria',
            id: 'categoria-select',
          }}
        >
          <MenuItem value="">
            <em>Seleccionar categoría</em>
          </MenuItem>
          {categorias.map((categoria) => (
            <MenuItem key={categoria.id} value={categoria.titulo}>
              {categoria.titulo}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ListaCategorias;
