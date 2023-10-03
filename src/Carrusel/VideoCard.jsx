import React from 'react';
import styled from 'styled-components'; // Si deseas aplicar estilos


const CardContainer = styled.div`
  /* Estilos para el contenedor de la tarjeta */
  width: 25%; /* Establece el ancho al 25% para mostrar cuatro tarjetas por fila */
  padding: 10px; /* Agrega un poco de espacio entre las tarjetas */
  box-sizing: border-box; /* Asegura que el relleno no afecte el tamaño total */
  float: left; /* Coloca las tarjetas en línea */
  
  
`;

const Video = styled.video`
  width: 100%; /* Establece el ancho del video al 100% del contenedor */
  height: auto; /* Esto permite que la altura se ajuste automáticamente según el ancho */
`;

const PlayButton = styled.button`
  /* Estilos para el botón de reproducción del video */
`;


const VideoCard = ({ videoUrl }) => {
    return (
      <CardContainer>
        <Video controls>
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </Video>
       
        {/* Puedes agregar un enlace o un botón para abrir el video en un reproductor */}
        <PlayButton onClick={() => window.open(videoUrl, '_blank')}>Ver Video</PlayButton>
      </CardContainer>
    );
  };

  export default VideoCard
  