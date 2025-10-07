import { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

function Home() {
  const [products] = useContext(ProductContext);
  const {search} =useLocation()
  const category =decodeURIComponent(search.split('=')[1]);


  const[filteredProducts, setFilteredProducts]=useState(null)




  const getProductscategory = async ()=>{
    try {
      const {data} = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if (!filteredProducts || category == 'undefined') setFilteredProducts(products)
    if (category != "undefined") getProductscategory();
  },[category, products]);

  
  

  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts && filteredProducts.map((p, i) => (
          <Link key={p.id}
            to={`/details/${p.id}`}
            className="card w-[18%] h-[30vh] mr-3 mb-3 p-3 border shadow rounded flex flex-col justify-center items-center"
          >
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center hover:scale-110"
              style={{
                backgroundImage:
                  `url(${p.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-400">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
