display current date and time -->>



import React from 'react';
import ReactDOM from 'react-dom';

const name= "Saumya Sharma";
const Date= new Date().toLocaleDateString();
const Time= new Time().toLocaleTimeString();


ReactDOM.render(
  <>
<h1>  Hello my name is {name} </h1>
<p> current date is= {Date} </p>
<p>current time is = {Time}</p>


</>, 
document.getElementById("root")


);