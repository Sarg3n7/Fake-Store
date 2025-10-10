// import React from 'react'
// import { Link, Route, Routes, useLocation } from 'react-router-dom'
// import Home from './components/Home'
// import Details from './components/Details'
// import Create from './components/Create'
// import Edit from './components/Edit'

// function App() {
//   const {search, pathname}=useLocation();
  
//   return (
//     <div className='h-screen w-screen flex'>
//       {(pathname != '/'  || search.length >0) && <Link to="/" className='text-red-300 absolute left-[18%] top-[3%]'>Home</Link>}
      

      
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/create' element={<Create/>}/>
//         <Route path='/details/:id' element={<Details/>}/>
//         <Route path='/edit/:id' element={<Edit/>}/>
//       </Routes>


      
//     </div>
//   )
// }

// export default App




// Version 2
// ✅ UPDATED FILE: App.jsx

// import React from 'react'
// import { Link, Route, Routes, useLocation } from 'react-router-dom'
// import Home from './components/Home'
// import Details from './components/Details'
// import Create from './components/Create'
// import Edit from './components/Edit'

// function App() {
//   const { search, pathname } = useLocation();

//   return (
//     <div className="min-h-screen w-full flex flex-col md:flex-row bg-gray-100 text-gray-800 transition-all duration-300">
      
//       {/* 🏠 Floating Home button */}
//       {(pathname !== '/' || search.length > 0) && (
//         <Link
//           to="/"
//           className="fixed top-[1%] right-[4%] z-50 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg shadow-md transition-all"
//         >
//           Home
//         </Link>
//       )}

//       {/* 🔀 Page Routes */}
//       <div className="flex-1 overflow-y-auto">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/create" element={<Create />} />
//           <Route path="/details/:id" element={<Details />} />
//           <Route path="/edit/:id" element={<Edit />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App





// ✅ UPDATED FILE: App.jsx

import React, { useContext, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";
import { ThemeContext } from "./utils/Context";

function App() {
  const { search, pathname } = useLocation();
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    document.body.className =
      theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800";
  }, [theme]);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row transition-all duration-300">
      {(pathname !== "/" || search.length > 0) && (
        <Link
          to="/"
          className="fixed top-[4%] right-[4%] z-50 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg shadow-md transition-all"
        >
          Home
        </Link>
      )}

      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>

      {/* 🔔 Toast Notification Container */}
      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar={false}
        theme={theme === "dark" ? "dark" : "light"}
      />
    </div>
  );
}

export default App;
