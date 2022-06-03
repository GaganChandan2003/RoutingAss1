import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AllProducts = () => {
const [products, setproducts] = useState([]);
const [value, setvalue] = useState();



useEffect(()=>
{
    axios.get('http://localhost:2020/products')
    .then((r)=>setproducts(r.data))
},[])
const navigate=useNavigate();
const handleonclick=(value)=>
{
  
  for (let i = 0; i < products.length; i++) {
    
    if (value ==products[i].id) {
      navigate(`/products/${value}`);
      break;
    } 
    else {
      navigate("/error");
    }
  }
}

  return (
    <div>AllProducts
      <div>
        <input type="number" onChange={(e)=>setvalue(e.target.value)}/>
        <button onClick={()=>handleonclick(value)}>set</button>
      </div>
      <Outlet/>
        <div>
            {
                products.map((el)=>
                (
                    <div key={el.id}>
                      <Link to={`/products/${el.id}`}>{el.name}</Link>
                    </div>
                ))
            }
        </div>
        <Outlet/>
    </div>
  )
}

export default AllProducts