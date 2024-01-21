import React, { useEffect, useState } from 'react'
import './home.css'
import { getproductdetails } from '../../Apis/Api'
import { Link } from 'react-router-dom'

function Home() {

  const [product, setProduct] = useState([])
 
  useEffect(() => {

    const fetchData= async ()=>{
    
      const data = await getproductdetails();
      setProduct(data)

    }
    fetchData()
 
  }, [])
  

  return (
    <div className='homes' > 
    {
    
    product.map((product)=>(
      <div className='product' key={product.id}>
      <img  className='img' src={product.image} alt="alterative" />
      <h4>{product.title}</h4>
      <p className='price'>${product.price}</p>

      <Link to= {`/product/${product.id}`}>
      <button className='btn-pdetails'>Product Details</button>
      </Link>
      
    </div>

    )

    )}
      
        
    </div>
  )
}

export default Home