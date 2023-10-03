import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Mostrar un video a la vez
  slidesToScroll: 4, // Desplazarse un video a la vez
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768, // Cambiar a diseño móvil cuando el ancho de la ventana sea menor que 768px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

  const videos = [
    { videoUrl: 'https://youtube.com/embed/PztCEdIJITY?si=kehu8GUV9RSnIkM6' },
    { videoUrl: 'https://youtube.com/embed/GJfOSoaXk4s?si=6vCSHNq0W-g-npfG' },
    { videoUrl: 'https://youtube.com/embed/rpvrLaBQwgg?si=AHTCiAAGt1nMU4Lr' },
    { videoUrl: 'https://youtube.com/embed//MXPhyN5t0uQ?si=6r8AfhGn23LTuXIa' },

    { videoUrl: 'https://youtube.com/embed/FqztWwPIrKo?si=-UFBI8g3aXPperZY' },
    { videoUrl: 'https://youtube.com/embed/cLLKVd5CNLc?si=EF7YP35SKOYSKCJa' },
    { videoUrl: 'https://youtube.com/embed/EoPvlE85XAQ?si=1da4oo3hp7puubpv' },
    { videoUrl: 'https://youtube.com/embed/GrEO8nZzyZM?si=DNJxFyp5jldyQBjX' },

    { videoUrl: 'https://youtube.com/embed/vhwspfvI52k?si=IRXlJ5zHQLusnMzc' },
    { videoUrl: 'https://youtube.com/embed/YhR7Zp8NUzE?si=3obXGrpr3qHxsEXX' },
    { videoUrl: 'https://youtube.com/embed/6N3OkLCfK-0?si=APAP5NGyO9jNvqKm' },
    { videoUrl: 'https://youtube.com/embed/TttMvhj4uu4?si=DG2nvqxKiyv_7PnL' },
    // Agrega más videos según sea necesario
  ];

  
  const SliderComponent = () => {
    return (
      
        <Slider {...sliderSettings}>
          {videos.map((video, index) => (
            <div key={index}>
              <iframe
                title={`Video ${index + 1}`}
                src={video.videoUrl}
                width="100%"
                height="auto"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </Slider>
      
    );
  };
  
  export default SliderComponent;
  