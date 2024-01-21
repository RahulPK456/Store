import axios from 'axios';


const BaseUrl ='https://fakestoreapi.com'

export const getproductdetails= async()=>{

const response = await axios.get(`${BaseUrl}/products`)
return response.data

}

export const getproductdid= async(id)=>{

    const response = await axios.get(`${BaseUrl}/products/${id}`)
    return response.data
    
    }

    export const getproductimages= async(id)=>{

        const response = await axios.get(`${BaseUrl}/products/${id}/image`)
        return response.data
        
        }