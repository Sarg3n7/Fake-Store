import React from 'react'

function App() {
  return (
    <div className='h-screen w-screen flex'>
      <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
        <a className='px-5 py-2 border rounded border-blue-200 text-blue-300' href="/create">Add New Product</a>
        <hr className='w-[80%] my-3' />
        <h1 className='text-2xl w-[80%] mb-3'>Category Filter</h1>
        <ul className=' w-[80%]'>
          <li className='mb-3 flex items-center'> 
            <span className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-100'></span>Cat 1
          </li>
          <li className='mb-3 flex items-center'> 
            <span className='rounded-full mr-2 w-[15px] h-[15px] bg-red-100'></span>Cat 1
          </li>
          <li className='mb-3 flex items-center'> 
            <span className='rounded-full mr-2 w-[15px] h-[15px] bg-green-100'></span>Cat 1
          </li>
        </ul>
      </nav>


      <div className='w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>


        <div className='card w-[18%] h-[30vh] mr-3 mb-3 p-3 border shadow rounded flex flex-col justify-center items-center'>
          <div className='w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center hover:scale-110'
            style={{backgroundImage: 
              "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1 className='hover:text-blue-400'>Lorem ipsum dolor sit amet.</h1>
        </div>

       

      </div>
    </div>
  )
}

export default App