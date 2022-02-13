import React from 'react';

import '../styles/paragraph.css';

const Paragraph = ({ title, text }) => {
  return (
      <div className={'paragraph-container'}>
          {title !== undefined && !title.isEmpty && <h1>{title}</h1>}
          <div className={'paragraph-content'}>{text}</div>
      </div>
  );
};

export default Paragraph;