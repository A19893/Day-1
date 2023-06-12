import React, { useState } from 'react';
import Product from './Components/Products'
const App = () => {
  const [value,setValue]=useState(" ");
  const handleChange=(e)=>{
    console.log(e.target.value);
   setValue(e.target.value.toLowerCase());
  }
  return (
    <>
    <div id="search">
    <input type="text" placeholder='Enter Product Name' value={value} onChange={handleChange} />
    </div>
    <Product input={value}/>
    </>
  );
}

export default App;
