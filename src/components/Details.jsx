// import React, { useContext, useEffect, useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import axios from '../utils/axios'
// import Loading from './Loading';
// import { ProductContext } from '../utils/Context';

// function Details() {
//   const navigate = useNavigate()
//   const [products, setProducts] = useContext(ProductContext);
//   const[product, setProduct] = useState(null)
//   const {id} = useParams();
  

//   // const getSingleProduct = async ()=>{
//   //   try {
//   //     const {data} =await axios.get(`products/${id}`)
//   //     setProduct(data)
      
//   //   } catch (error) {
//   //     console.log(error);
      
//   //   }
//   // }

//   useEffect(()=>{
//     if(!product){
//       setProduct(products.filter(p=>p.id == id)[0])
//     }
//     // getSingleProduct()
//   },[])

//   const ProductDeleteHandler = (id) =>{
//     const FilteredProducts = products.filter(p=>p.id !== id);
//     setProducts(FilteredProducts);
//     localStorage.setItem("products", JSON.stringify(FilteredProducts))
//     navigate('/');
//   }

//   return product ? (
//     <div className='w-[70%] flex h-full justify-between items-center m-auto p-[10%] '>
//         <img className='h-[80%] w-[40%] object-contain' src={`${product.image}`} alt="" />
//         <div className='content w-[50%]'>
//             <h1 className='text-4xl'>{product.title}</h1>
//             <h3 className='text-zinc-400 my-5'>{product.category}</h3>
//             <h2 className='text-red-300 mb-3'>${product.price}</h2>
//             <p className='mb-[5%]'>{product.description}</p>
//             <Link to={`/edit/${product.id}`} className='mr-5 px-5 py-2 border rounded border-blue-200 text-blue-300'>Edit</Link>
//             <button onClick={()=>ProductDeleteHandler(product.id)} className='px-5 py-2 border rounded border-red-200 text-red-300'>Delete</button>
//         </div>
//     </div>
//   ) :(
//     <Loading/>
//   )
// }

// export default Details





// ✅ UPDATED FILE: Details.jsx

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "../utils/axios";
// import Loading from "./Loading";
// import { ProductContext } from "../utils/Context";

// function Details() {
//   const navigate = useNavigate();
//   const [products, setProducts] = useContext(ProductContext);
//   const [product, setProduct] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     if (!product) {
//       setProduct(products.filter((p) => p.id == id)[0]);
//     }
//   }, []);

//   const ProductDeleteHandler = (id) => {
//     const FilteredProducts = products.filter((p) => p.id !== id);
//     setProducts(FilteredProducts);
//     localStorage.setItem("products", JSON.stringify(FilteredProducts));
//     navigate("/");
//   };

//   return product ? (
//     <div className="flex flex-col md:flex-row gap-10 p-10 md:p-20 justify-center items-center bg-gray-50 min-h-screen">
//       <img
//         className="w-full md:w-1/3 max-w-sm object-contain rounded-lg shadow-md"
//         src={product.image}
//         alt={product.title}
//       />
//       <div className="md:w-1/2">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-3">
//           {product.title}
//         </h1>
//         <p className="text-gray-500 mb-4">{product.category}</p>
//         <h2 className="text-2xl text-blue-600 font-bold mb-3">
//           ${product.price}
//         </h2>
//         <p className="text-gray-600 mb-6">{product.description}</p>
//         <div className="flex gap-4">
//           <Link
//             to={`/edit/${product.id}`}
//             className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
//           >
//             Edit
//           </Link>
//           <button
//             onClick={() => ProductDeleteHandler(product.id)}
//             className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <Loading />
//   );
// }

// export default Details;







//Version 3

// ✅ UPDATED FILE: Details.jsx

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ProductContext, CartContext } from "../utils/Context";
import { toast } from "react-toastify";

function Details() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }
  }, []);

  const ProductDeleteHandler = (id) => {
    const FilteredProducts = products.filter((p) => p.id !== id);
    setProducts(FilteredProducts);
    localStorage.setItem("products", JSON.stringify(FilteredProducts));
    toast.error("Product deleted!");
    navigate("/");
  };

  return product ? (
    <div className="flex flex-col md:flex-row gap-10 p-10 md:p-20 justify-center items-center bg-gray-50 dark:bg-gray-900 min-h-screen">
      <img
        className="w-full md:w-1/3 max-w-sm object-contain rounded-lg shadow-md"
        src={product.image}
        alt={product.title}
      />
      <div className="md:w-1/2">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
          {product.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          {product.category}
        </p>
        <h2 className="text-2xl text-blue-600 font-bold mb-3">
          ${product.price}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {product.description}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => {
              addToCart(product);
              toast.success("Added to Cart!");
            }}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
          >
            Add to Cart
          </button>
          <Link
            to={`/edit/${product.id}`}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition"
          >
            Edit
          </Link>
          <button
            onClick={() => ProductDeleteHandler(product.id)}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
