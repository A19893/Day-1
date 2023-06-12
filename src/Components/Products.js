import React from 'react';
import Data from './data/product.json'
const Products = (props) => {
  const FilteredData=Data.products.filter((item)=>{
    if(props.input===" "){
      return item;
    }
    else{
      return item.ProdName.toLowerCase().includes(props.input);
    }
  })
  return (
    <>
    {
      FilteredData.map((item)=>{
        return(
          <>
          <div key={item} id="div">
            <span class="brand">{item.ProdBrand}</span>
            <li >{item.ProdName}</li>
            <img src={item.ProdImg} alt="" height="80px" width="100px"/>
            <li class="desc">{item.ProdDesc}</li>
          </div>
          </>
        )
      })
    }
    </>
  );
}

export default Products;
