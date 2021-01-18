import React, { useState } from 'react';


const App = () => {
    const [bg, setBg]=useState(purple);

    const bgChange = () =>{
        //console.log('clicked');
    };

    return (
    <>
    <div style={{backgroundColor:bg}}>
    <button onClick= {bgChange} > Click me </button>
    </div>
    </>

    )
}


export default App;