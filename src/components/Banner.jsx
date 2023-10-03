import React from 'react';
import styled from 'styled-components';
import videoEmbedUrl from './VideoData';

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  @media (max-width: 768px) {
   height:100%
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
`;

const BannerContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Alinea el contenido a la izquierda */
  background: rgba(0, 0, 0, 0.5); /* Fondo semitransparente para el contenido */
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    /* Estilos para dispositivos móviles */
    align-items: center; /* Alinea el contenido al centro en dispositivos móviles */
    text-align: center; /* Alinea el texto al centro en dispositivos móviles */
    display: flex;
    flex-direction:column;
  }
`;


const Title = styled.h1`
  font-size: 2.875rem;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    /* Estilos para dispositivos móviles */
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
`;

const Titulo = styled.h1`
  font-size: 3.75rem;
  margin-bottom: 50px;
  border: 2px solid #F5F5F5;
  background-color: #6BD1FF;
  padding: 10px;
  
  @media (max-width: 768px) {
    /* Estilos para dispositivos móviles */
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  max-width: 400px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    /* Estilos para dispositivos móviles */
    font-size: 0.9rem;
    max-width: 100%;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Alinea el video a la derecha */
  width:100%;
  height: 50%;
  
  @media (max-width: 768px) {
    /* Estilos para dispositivos móviles */
    justify-content: center; /* Alinea el video al centro en dispositivos móviles */
    
  }
`;

const Video = styled.iframe`
  max-width: 100%; /* Asegura que el video no sea más ancho que su contenedor */
  max-height: 100%; /* Ajusta la altura máxima del video según tus necesidades */
`;

const BannerComponent = ({ image, title, description }) => {
  
  return (
    <Banner>
      <BannerContent>
        <div>
        <Titulo>FrontEnd</Titulo>
        <Title>{title}</Title>
        <Description>{description}</Description>

        </div>
        
        <VideoContainer>
          <Video
            title="Embedded Video"
            src={videoEmbedUrl}
            
            allowFullScreen
          ></Video>
        </VideoContainer>
      </BannerContent>
      <BannerImage src={image} alt="Banner Image" />
    </Banner>
  );
};

export default BannerComponent;
