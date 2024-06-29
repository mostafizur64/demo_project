import React from 'react';

const P_Video = () => {
  return (
    <div className="flex justify-center mt-20">
      <iframe
        width="100%"
        height="615"
        src="https://www.youtube.com/embed/SzJ46YA_RaA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default P_Video;
