// import { useContext, useEffect, useState } from "react";
// import Nav from "./Nav";
// import { Link, useLocation } from "react-router-dom";
// import { ProductContext } from "../utils/Context";
// import Loading from "./Loading";
// import axios from "../utils/axios";

// function Home() {
//   const [products] = useContext(ProductContext);
//   const {search} =useLocation()
//   const category =decodeURIComponent(search.split('=')[1]);


//   const[filteredProducts, setFilteredProducts]=useState(null)




//   const getProductscategory = async ()=>{
//     try {
//       const {data} = await axios.get(`/products/category/${category}`);
//       setFilteredProducts(data)
      
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(()=>{
//     if (!filteredProducts || category == 'undefined') setFilteredProducts(products)
//     if (category != "undefined") {

//       // getProductscategory()
//       setFilteredProducts(products.filter (p=> p.category == category))


//     };
//   },[category, products]);

  
  

//   return products ? (
//     <>
//       <Nav />
//       <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
//         {filteredProducts && filteredProducts.map((p, i) => (
//           <Link key={p.id}
//             to={`/details/${p.id}`}
//             className="card w-[18%] h-[30vh] mr-3 mb-3 p-3 border shadow rounded flex flex-col justify-center items-center"
//           >
//             <div
//               className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center hover:scale-110"
//               style={{
//                 backgroundImage:
//                   `url(${p.image})`,
//               }}
//             ></div>
//             <h1 className="hover:text-blue-400">{p.title}</h1>
//           </Link>
//         ))}
//       </div>
//     </>
//   ) : (
//     <Loading />
//   );
// }

// export default Home;





// ✅ UPDATED FILE: Home.jsx

// import { useContext, useEffect, useState } from "react";
// import Nav from "./Nav";
// import { Link, useLocation } from "react-router-dom";
// import { ProductContext } from "../utils/Context";
// import Loading from "./Loading";
// import axios from "../utils/axios";

// function Home() {
//   const [products] = useContext(ProductContext);
//   const { search } = useLocation();
//   const category = decodeURIComponent(search.split("=")[1]);
//   const [filteredProducts, setFilteredProducts] = useState(null);

//   useEffect(() => {
//     if (!filteredProducts || category === "undefined")
//       setFilteredProducts(products);
//     if (category !== "undefined") {
//       setFilteredProducts(products.filter((p) => p.category === category));
//     }
//   }, [category, products]);

//   return products ? (
//     <div className="flex flex-col md:flex-row h-full">
//       <Nav />
//       <div className="flex-1 p-6 md:p-10 overflow-y-auto">
//         <h1 className="text-2xl font-semibold mb-6 text-white">
//           {category && category !== "undefined"
//             ? `Category: ${category}`
//             : "All Products"}
//         </h1>

//         <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//           {filteredProducts &&
//             filteredProducts.map((p) => (
//               <Link
//                 key={p.id}
//                 to={`/details/${p.id}`}
//                 className="bg-white shadow-md hover:shadow-xl transition-all rounded-lg overflow-hidden p-4 flex flex-col items-center group"
//               >
//                 <div
//                   className="w-full h-40 bg-contain bg-no-repeat bg-center group-hover:scale-110 transition-transform"
//                   style={{
//                     backgroundImage: `url(${p.image})`,
//                   }}
//                 ></div>
//                 <h2 className="mt-3 text-sm font-medium text-center text-gray-700 group-hover:text-blue-600 transition">
//                   {p.title.length > 50 ? p.title.slice(0, 50) + "..." : p.title}
//                 </h2>
//               </Link>
//             ))}
//         </div>
//       </div>
//     </div>
//   ) : (
//     <Loading />
//   );
// }

// export default Home;





//Version 3

// ✅ UPDATED FILE: Home.jsx

import { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext, CartContext } from "../utils/Context";
import Loading from "./Loading";
import { toast } from "react-toastify";

function Home() {
  const [products] = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const query = new URLSearchParams(search).get("search");
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    let filtered = products;
    if (category && category !== "undefined") {
      filtered = products.filter((p) => p.category === category);
    }
    if (query) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  }, [category, products, query]);

  return products ? (
    <div className="flex flex-col md:flex-row h-full">
      <Nav />
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-6 dark:text-gray-500 ">
          {query
            ? `Results for "${query}"`
            : category && category !== "undefined"
            ? `Category: ${category}`
            : "All Products"}
        </h1>

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredProducts &&
            filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all rounded-lg overflow-hidden p-4 flex flex-col items-center group"
              >
                <Link
                  to={`/details/${p.id}`}
                  className="w-full h-40 bg-contain bg-no-repeat bg-center group-hover:scale-110 transition-transform"
                  style={{ backgroundImage: `url(${p.image})` }}
                ></Link>
                <h2 className="mt-3 text-sm font-medium text-center text-gray-700 dark:text-gray-200 group-hover:text-blue-600 transition">
                  {p.title.length > 50 ? p.title.slice(0, 50) + "..." : p.title}
                </h2>
                <button
                  onClick={() => {
                    addToCart(p);
                    toast.success("Added to Cart!");
                  }}
                  className="mt-3 px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-md transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Home;
