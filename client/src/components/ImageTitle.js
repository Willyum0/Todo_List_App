import React from 'react';

import '../styles/title.css';

const ImageTitle = ({ text }) => {
  return (
    <div className={'image-title-container'} style={{ 
            backgroundImage: 'url(/todo-list-background.jpg)',
            backgroundImage: 'linear-gradient(45deg, rgb(50, 50, 51), rgb(90, 16, 124))',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}
    >
        <div className={'image-title-cover'}>
            
        </div>
        <h1>{text}</h1>
    </div>
  );
};

export default ImageTitle;