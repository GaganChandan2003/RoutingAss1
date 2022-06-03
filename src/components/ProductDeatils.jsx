import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';

const ProductDeatils = () => {
  const [product, setproduct] = useState({});
  const {id}=useParams();
  useEffect(()=>
  {
    if(id)
    {
      axios.get(`http://localhost:2020/products/${id}`)
      .then((r)=>setproduct(r.data))
    }
  },[id])
  
  return (
    <div>
    Product Id:{id}
    <div>Name:{product.name}</div>
    <div>Price:{product.price}</div>
    </div>
    
  )
}

export default ProductDeatils