import { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

function Home() {
  const [products] = useContext(ProductContext);

  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {products.map((p, i) => (
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
