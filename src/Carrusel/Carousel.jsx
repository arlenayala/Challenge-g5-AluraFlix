import React from 'react';

import SliderComponent from './Slider';
import VideoCard from './VideoCard';




const Carousel = ({ videoData }) => {
  if (!videoData) {
    return null; // Otra acción adecuada para manejar el caso de videoData undefined
  }
  return (

  

      <SliderComponent>
          {videoData.map((video, index) => (
            <VideoCard
              key={video.id}
              videoUrl={video.videoUrl}
            />
          ))}
      </SliderComponent>


  
  

    
  );

  
    
};

export default Carousel;
