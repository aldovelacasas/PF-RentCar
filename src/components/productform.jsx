"use client"
import {useState} from 'react'
import axios from 'axios'

function ProductForm() {
    console.log("eze");
    const [product,setProduct]=useState({
        name:"",
        model:"",
        year:"",
        type:"",
        capacity:"",
        transmission:"",
        description:"",
        price: "",
        image:"",
    })

    const handleChange = (e) => {
      setProduct({
      ...product,
      [e.target.name]: e.target.value
      })
      }

      const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(product);

      const res = await axios.post("/api/products", product)
      console.log(res);
      }

  return (
    <form className='bg-white shadow-md rounded-md px-8 pt-4 pb-4 mb-4' 
    onSubmit={handleSubmit}>
  
    <div className="grid grid-cols-2 gap-3">
      
      <div>
        <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>Product Name</label>
        <input name="name" type="text" placeholder="Enter product name" onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3'
        />
      </div>
      <div>
        <label htmlFor="model" className='block text-gray-700 text-sm font-bold mb-2'>Product Model</label>
        <input name="model" type="text" placeholder="Enter product model" onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3'
        />
      </div>
      <div>
        <label htmlFor="year" className='block text-gray-700 text-sm font-bold mb-2'>Year</label>
        <input name="year" type="text" placeholder="Enter year" onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3'
        />
      </div>
      <div>
        <label htmlFor="type" className='block text-gray-700 text-sm font-bold mb-2'>Type</label>
        <input name="type" type="text" placeholder="Enter product type" onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3'
        />
      </div>
      <div>
        <label htmlFor="capacity" className='block text-gray-700 text-sm font-bold mb-2'>Capacity</label>
        <input name="capacity" type="text" placeholder="Enter capacity" onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3'
        />
      </div>
      <div>
        <label htmlFor="transmission" className='block text-gray-700 text-sm font-bold mb-2'>Transmission</label>
        <input name="transmission" type="text" placeholder="Enter transmission" onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3'
        />
      </div>
      <div>
        <label htmlFor="description" className='block text-gray-700 text-sm font-bold mb-2'>Description</label>
        <textarea name="description" rows={3} placeholder="Enter description" onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3'
        />
      </div>
      <div>
        <label htmlFor="price" className='block text-gray-700 text-sm font-bold mb-2'>Price</label>
        <input name="price" type="text" placeholder="00.00" onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3'
        />
      </div>
      <div>
        <label htmlFor="image" className='block text-gray-700 text-sm font-bold mb-2'>Image</label>
        <input name="image" type="text" placeholder="Enter image URL" onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3'
        />
      </div>
      <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded'>
        Save Product
      </button>
    </div>
  </form>
  
     )
}

export default ProductForm