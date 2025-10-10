// import React, { createContext, useEffect, useState } from 'react'
// import axios from './axios'

// export const ProductContext =  createContext()

// function Context(props) {

//     const[products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || null)

//     // const getProducts = async ()=>{
//     //     try {
//     //         const {data} = await axios("/products")
//     //         setProducts(data)
            
//     //     } catch (error) {
//     //         console.log(error);
            
//     //     }
//     // } 
//     // console.log(products);
      

//     // useEffect(()=>{
//     //     getProducts()
//     // }, [])

//     return (
//         <ProductContext.Provider value={[products, setProducts]}>
//             {props.children}
//         </ProductContext.Provider>
//     )
// }

// export default Context







// ✅ UPDATED FILE: Context.jsx

// import React, { createContext, useEffect, useState } from "react";
// import axios from "./axios";

// export const ProductContext = createContext();
// export const ThemeContext = createContext();
// export const CartContext = createContext();

// function Context(props) {
//   const [products, setProducts] = useState(
//     JSON.parse(localStorage.getItem("products")) || null
//   );
//   const [theme, setTheme] = useState("light");
//   const [cart, setCart] = useState([]);

//   // Future-ready: fetch products if none in localStorage
//   // useEffect(() => {
//   //   if (!products) getProducts();
//   // }, []);

//   return (
//     <ThemeContext.Provider value={[theme, setTheme]}>
//       <CartContext.Provider value={[cart, setCart]}>
//         <ProductContext.Provider value={[products, setProducts]}>
//           {props.children}
//         </ProductContext.Provider>
//       </CartContext.Provider>
//     </ThemeContext.Provider>
//   );
// }

// export default Context;





// Version 3

// ✅ UPDATED FILE: Context.jsx

import React, { createContext, useEffect, useState } from "react";
import axios from "./axios";

export const ProductContext = createContext();
export const ThemeContext = createContext();
export const CartContext = createContext();

function Context(props) {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // 💾 Persist theme & cart
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🛍 Add/Remove Cart Handlers
  const addToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      const updated = cart.map((c) =>
        c.id === item.id ? { ...c, qty: c.qty + 1 } : c
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
        <ProductContext.Provider value={[products, setProducts]}>
          {props.children}
        </ProductContext.Provider>
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}

export default Context;
