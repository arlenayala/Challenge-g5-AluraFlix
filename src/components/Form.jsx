import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import TextInput from './CampoTexto';
import Button from './Button';
import ListaCategorias from './ListaCategorias';
import { useCategoriaContext } from './CategoriasContext';

const FormContainer = styled.div`
  background-color: #00000099;
  padding: 50px;
`;

const NuevoVideo = styled.h1`
  font-size: 60px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 30px;
`;

const ButtonNuevaCategoria = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 5px;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  right: 0;
`;

const Form = ({agregarVideoToHomePage}) => {
  const [title, setTitulo] = useState('');
  const [linkVideo, setLinkVideo] = useState('');
  const [linkImagen, setLinkImagen] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({
    title: {
      error: false,
      message: 'Deben contener al menos 10 caracteres',
    },
    linkVideo: {
      error: false,
      message: 'Link del video es obligatorio',
    },
    linkImagen: {
      error: false,
      message: 'Deben ser al menos 10 caracteres',
    },
    category: {
      error: false,
      message: 'Deben ser al menos 10 caracteres',
    },
    description: {
      error: false,
      message: 'Deben ser al menos 10 caracteres',
    },
  });

  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();
  const { categorias, agregarCategoria } = useCategoriaContext(); // Obtener categorías y agregarCategoria del contexto
  const [videoList, setVideoList] = useState([]); // Estado para almacenar la lista de videos guardados
  const [newVideos, setNewVideos] = useState([]);

 

  const validarCampo = (campo, valor) => {
    if (valor.length >= 10) {
      return { error: false, message: '' };
    } else {
      return { error: true, message: 'Deben ser al menos 3 caracteres' };
    }
  };

  const handleCampoChange = (campo, valor) => {
    const nuevosErrores = { ...errors };
    nuevosErrores[campo] = validarCampo(campo, valor);
    setErrors(nuevosErrores);

    if (campo === 'category') {
      setSelectedCategory(valor); // Establece la categoría seleccionada directamente en el estado local
    }
  };

  // Función para agregar un video a la lista
  const agregarVideo = (nuevoVideo) => {
    setVideoList([...videoList, nuevoVideo]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoVideo = {
      id: uuid(),
      title,
      linkVideo,
      linkImagen,
      description,
      category: selectedCategory, // Agrega la categoría seleccionada
    };
    // Realiza el proceso de guardar el video aquí (por ejemplo, enviarlo a una API o almacenarlo en un estado global)
    agregarVideo(nuevoVideo);

    if (agregarVideoToHomePage) {
      agregarVideoToHomePage(nuevoVideo); // Llama a la función para agregar el video a HomePage
      console.log("Video agregado a HomePage:", nuevoVideo);
    }
    
    agregarCategoria(selectedCategory); // Llama a la función para agregar la categoría en lugar de setCategorias
    setNewVideos([...newVideos, nuevoVideo]);
    
  };

  const handleReset = () => {
    setTitulo('');
    setLinkVideo('');
    setLinkImagen('');
    setDescription('');
    setSelectedCategory(''); // Limpia la categoría seleccionada
  };

  const goToCategory = () => {
    navigate('/NuevaCategoria');
  };
  

  return (
    <FormContainer>
      <NuevoVideo>Nuevo Video</NuevoVideo>
      <form onSubmit={handleSubmit}
   >
        <TextInput
          label="titulo"
          name="titulo"
          value={title}
          onChange={(e) => {
            setTitulo(e.target.value);
          }}
          error={errors.title.error}
          helperText={errors.title.error ? errors.title.message : ""}
          onBlur={(e) => {
            handleCampoChange("title", e.target.value);
            console.log(e.target.value)
          }}
        />
        <TextInput
          label="Link del Video"
          name="linkVideo"
          value={linkVideo}
          onChange={(e) => {
            setLinkVideo(e.target.value);
          }}
          error={errors.linkVideo.error}
          helperText={errors.linkVideo.error ? errors.linkVideo.message : ""}
          onBlur={(e) => {
            handleCampoChange("linkVideo", e.target.value);
          }}
        />
        <TextInput
          label="Link de la Imagen"
          name="linkImagen"
          value={linkImagen}
          onChange={(e) => {
            setLinkImagen(e.target.value);
          }}
          multiline
          error={errors.linkImagen.error}
          helperText={errors.linkImagen.error ? errors.linkImagen.message : ""}
          onBlur={(e) => {
            handleCampoChange("linkImagen", e.target.value);
          }}
        />
        <ListaCategorias
          categorias={categorias} 
          
          label="Categoria"
          name="categorys"
          value={selectedCategory}
          disabled
          defaultValue=""
          hidden
          onChange={(e) => {
            handleCampoChange("category" ,e.target.value);
          }}
          multiline
          error={errors.category.error}
          helperText={errors.category.error ? errors.category.message : ""}
          onBlur={(e) => {
            handleCampoChange("category", e.target.value);
          }}
          
        />

          
 
   
        <TextInput
          label="Descripción"
          name="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          multiline
          error={errors.description.error}
          helperText={errors.description.error ? errors.description.message : ""}
          onBlur={(e) => {
            handleCampoChange("description", e.target.value);
          }}
        />
        <Button type="submit">Guardar</Button>
        <Button type="reset" onClick={handleReset}>Limpiar</Button>
        <ButtonNuevaCategoria type="submit" onClick={goToCategory}>Nueva categoria</ButtonNuevaCategoria>
      </form>
    </FormContainer>
  );
};

export default Form;
