// import React, {useContext} from 'react'
// import {ProductContext} from "../utils/Context"
// import { Link } from 'react-router-dom';

// function Nav() {

//   const [products] = useContext(ProductContext);
//   let distinct_category = products && products.reduce((acc, cv)=>[...acc,cv.category],[]);
//   distinct_category = [...new Set(distinct_category)];

//   const color =()=>{
//     return `rgba(${(Math.random()*255).toFixed()},
//     ${(Math.random()*255).toFixed()},
//     ${(Math.random()*255).toFixed()},0.4)`;
//   };

  
  


//   return (
//     <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
//         <a className='px-5 py-2 border rounded border-blue-200 text-blue-300' href="/create">Add New Product</a>
//         <hr className='w-[80%] my-3' />
//         <h1 className='text-2xl w-[80%] mb-3'>Category Filter</h1>
//         <div className=' w-[80%]'>

//           {distinct_category.map((c,i)=>(

//           <Link key={i} to={`/?category=${c}`} className='mb-3 flex items-center'> 
//             <span style={{backgroundColor:color()}} className='rounded-full mr-2 w-[15px] h-[15px]'></span>{c}
//           </Link>
          
//           ))}

          
          
//         </div>
//     </nav>
//   )
// }

// export default Nav




// ✅ UPDATED FILE: Nav.jsx

// import React, { useContext, useState } from "react";
// import { ProductContext } from "../utils/Context";
// import { Link } from "react-router-dom";

// function Nav() {
//   const [products] = useContext(ProductContext);
//   const [menuOpen, setMenuOpen] = useState(false);

//   let distinct_category =
//     products && products.reduce((acc, cv) => [...acc, cv.category], []);
//   distinct_category = [...new Set(distinct_category)];

//   const color = () => {
//     return `rgba(${(Math.random() * 255).toFixed()},
//     ${(Math.random() * 255).toFixed()},
//     ${(Math.random() * 255).toFixed()},0.4)`;
//   };

//   return (
//     <>
//       {/* Mobile Menu Toggle */}
//       <button
//         onClick={() => setMenuOpen(!menuOpen)}
//         className="md:hidden fixed top-4 right-4 z-50 bg-blue-600 text-white px-3 py-2 rounded-md shadow-md"
//       >
//         {menuOpen ? "Close" : "Menu"}
//       </button>

//       <nav
//         className={`${
//           menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//         } transition-transform duration-300 md:static fixed top-0 left-0 z-40 
//         w-[70%] md:w-[18%] h-full bg-white shadow-md flex flex-col items-center pt-6 md:pt-8 border-r`}
//       >
//         {/* Add Product Button */}
//         <Link
//           to="/create"
//           className="px-5 py-2 mb-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md"
//         >
//           + Add Product
//         </Link>

//         {/* Search Bar (Coming Soon) */}
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="w-[80%] mb-5 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <h1 className="text-xl font-semibold w-[80%] mb-4 border-b pb-2 text-gray-700">
//           Categories
//         </h1>

//         <div className="w-[80%] flex flex-col gap-3 overflow-y-auto pb-10">
//           {distinct_category.map((c, i) => (
//             <Link
//               key={i}
//               to={`/?category=${c}`}
//               className="flex items-center text-gray-600 hover:text-blue-600 transition-all"
//               onClick={() => setMenuOpen(false)}
//             >
//               <span
//                 style={{ backgroundColor: color() }}
//                 className="rounded-full mr-3 w-[14px] h-[14px]"
//               ></span>
//               {c}
//             </Link>
//           ))}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Nav;




// Version 3


// ✅ UPDATED FILE: Nav.jsx

import React, { useContext, useState } from "react";
import { ProductContext, ThemeContext, CartContext } from "../utils/Context";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Nav() {
  const [products] = useContext(ProductContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const { cart, clearCart } = useContext(CartContext);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  const color = () =>
    `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()},0.4)`;

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?search=${query}`);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    toast.info(`Switched to ${newTheme} mode`);
  };

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-blue-600 text-white px-3 py-2 rounded-md shadow-md"
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      <nav
        className={`${
          menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } transition-transform duration-300 md:static fixed top-0 left-0 z-40 
        w-[70%] md:w-[18%] h-full bg-white dark:bg-gray-800 shadow-md flex flex-col items-center pt-6 md:pt-8 border-r`}
      >
        <Link
          to="/create"
          className="px-5 py-2 mb-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md"
        >
          + Add Product
        </Link>

        {/* 🔍 Search */}
        <form onSubmit={handleSearch} className="w-[80%] mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border text-white dark:border-white rounded-md focus:ring-2 focus:ring-blue-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        {/* 🌗 Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-[80%] mb-3 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* 🛒 Cart */}
        <div className="w-[80%] flex justify-between items-center mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Cart: {cart.length}
          </span>
          <button
            onClick={() => {
              clearCart();
              toast.success("Cart cleared!");
            }}
            className="text-xs text-red-500 hover:underline"
          >
            Clear
          </button>
        </div>

        <h1 className="text-lg font-semibold w-[80%] mb-4 border-b pb-2 text-gray-700 dark:text-gray-300">
          Categories
        </h1>

        <div className="w-[80%] flex flex-col gap-3 overflow-y-auto pb-10">
          {distinct_category.map((c, i) => (
            <Link
              key={i}
              to={`/?category=${c}`}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              <span
                style={{ backgroundColor: color() }}
                className="rounded-full mr-3 w-[14px] h-[14px]"
              ></span>
              {c}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Nav;
