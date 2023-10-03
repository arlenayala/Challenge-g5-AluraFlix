
 import React,{useEffect,useState} from "react";
 import styled from "styled-components";
 import BannerComponent from "../components/Banner";
 import banner from "../img/banner.png";
 import Carousel from "../Carrusel/Carousel";
 
 const CarrouselContainer=styled.div`
background-color: #00000099;

`



 const HomePage = ({agregarVideo,videoListHomePage}) => {
  // const videoData = [
  //   // Videos de Frontend
  //   {
      
  //     videoUrl: 'https://youtube.com/embed/PztCEdIJITY?si=kehu8GUV9RSnIkM6',
      
  //     category: 'Frontend',
  //   },
  //   {
      
  //     videoUrl: 'https://youtube.com/embed/GJfOSoaXk4s?si=6vCSHNq0W-g-npfG',
      
  //     category: 'Frontend',
  //   },
  //   {
      
  //     videoUrl: 'https://youtube.com/embed//rpvrLaBQwgg?si=AHTCiAAGt1nMU4Lr',
      
  //     category: 'Frontend',
  //   },
  //   {
      
  //     videoUrl: 'https://youtube.com/embed/MXPhyN5t0uQ?si=6r8AfhGn23LTuXIa',
      
  //     category: 'Frontend',
  //   },
  
  
  //   // Videos de Backend
  //   {
      
  //     videoUrl: 'https://youtube.com/embed/FqztWwPIrKo?si=-UFBI8g3aXPperZY',
      
  //     category: 'Backend',
  //   },
  //   {
      
  //     videoUrl:'https://youtube.com/embed/cLLKVd5CNLc?si=EF7YP35SKOYSKCJa',
      
  //     category: 'Backend',
  //   },
  //   {
      
  //     videoUrl:  'https://youtube.com/embed/EoPvlE85XAQ?si=1da4oo3hp7puubpv',
     
  //     category: 'Backend',
  //   },
  //   {
      
  //     videoUrl: 'https://youtube.com/embed/GrEO8nZzyZM?si=DNJxFyp5jldyQBjX',
     
  //     category: 'Backend',
  //   },
  
  //   // Videos de Innovación y Gestión
  //   {
     
  //     videoUrl: "https://www.youtube.com/embed/YhR7Zp8NUzE?si=lEJJGZWQcNS_aEWg",
      
  //     category: 'Innovación y Gestión',
  //   },
  //   {
     
  //     videoUrl: 'https:youtube.com/embed/YhR7Zp8NUzE?si=3obXGrpr3qHxsEXX',
      
  //     category: 'Innovación y Gestión',
  //   },
  //   {
      
  //     videoUrl: 'https:youtube.com/embed/6N3OkLCfK-0?si=APAP5NGyO9jNvqKm',
      
  //     category: 'Innovación y Gestión',
  //   },
  //   {
      
  //     videoUrl: 'https:youtube.com/embed/TttMvhj4uu4?si=DG2nvqxKiyv_7PnL',
      
  //     category: 'Innovación y Gestión',
  //   },
  // ];

  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    // Realiza la petición HTTP para obtener los datos del archivo JSON
    fetch("http://localhost:3001/videos")
      .then((response) => response.json())
      .then((data) => {
        setVideoData(data); // Actualiza el estado con los datos obtenidos
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  }, []);

    //Filtra los videos por categoría
   const frontendVideos = videoData.filter((video) => video.category === 'Frontend');
   const backendVideos = videoData.filter((video) => video.category === 'Backend');
   const innovacionGestionVideos = videoData.filter((video) => video.category === 'Innovación y Gestión');

  


   return (
     <div>
       <BannerComponent
         image={banner}
         title="Challenge React"
         description="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
       />
      
       <CarrouselContainer>
       <h1>Frontend</h1>
       <Carousel videoData={frontendVideos} agregarVideo={agregarVideo}  />
       <h1>BackEnd</h1>
       <Carousel videoData={backendVideos} agregarVideo={agregarVideo} />
       <h1>Innovación y Gestión</h1>
       <Carousel videoData={innovacionGestionVideos} agregarVideo={agregarVideo} />
       <Carousel videoData={videoListHomePage} />
     </CarrouselContainer>
      
       
      
     </div>
   );
 };

 export default HomePage;







