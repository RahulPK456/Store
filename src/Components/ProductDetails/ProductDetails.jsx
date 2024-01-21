import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { Link, useParams } from 'react-router-dom'

import { getproductdid } from '../Apis/Api';


function ProductDetails() {

  const {id} = useParams();

  const [productdetailss, setProductdetails] = useState([])

  useEffect(() => {

 const productIddetails = async ()=>{

    const data= await getproductdid(id);
    setProductdetails(data);
 }

 productIddetails()
    
  }, [id])
  
 const handleClick=()=>{
  alert("Buy the Product")
 }

  return (
    <div className='details'>
        <img className="image" src={productdetailss.image} alt="alternative" />
      <div className='description'>
         <h2>{productdetailss.title}</h2>
         <p>{productdetailss.description}</p>
        
         <button onClick={handleClick}  className='one'>Buy Now</button>
        
         <Link to='/' style={{position:'fixed'}}>
         <button className='two'>Go back</button>
         </Link>
      </div>
    </div>
  )
}

export default ProductDetails