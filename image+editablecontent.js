import React from 'react';
import ReactDOM from 'react-dom';

const name= "saumya sharma";
const img1= "https://picsum.photos/400/400" ;
const img2= "https://picsum.photos/seed/picsum/400/400";
const img3="https://picsum.photos/id/237/400/400" ;


ReactDOM.render(
  <>
  <h1 contentEditable = "true">Hi welcome to {name}'s gallery</h1>
  <img src= {img1} />
  <img src= {img2} />
  <img src= {img3} />
</>, document.getElementById("root")
);

