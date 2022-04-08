// src/Project.js

import React from 'react';

function POPOSSpace(props) {
  const { name, image, description } = props
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}images/${image}`} 
      width="300"
      height="300"
      alt="..."/>
      <h1>{name}</h1>
      <div style={{margin: 2 + 'em'}}  id="description">{description}</div>
    </div>
  )
}
export default POPOSSpace