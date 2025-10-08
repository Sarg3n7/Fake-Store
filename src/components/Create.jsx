import React, { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const AddProduct = (e)=>{
    e.preventDefault();
    const product = {
        title,
        image,
        category,
        price,
        description,
    }
    console.log(product);
    
  }




  return (
    <form onSubmit={AddProduct} className="flex flex-col items-center p-[5%] w-screen h-screen">
      <h1 className="text-3xl mb-5 w-1/2 mb-5">Add New Product</h1>
      <input
        type="url"
        placeholder="Image Link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter Product Description Here"
        value={description}
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
      ></textarea>
      <div className="w-1/2">
      <button className="px-5 py-2 border rounded border-blue-200 text-blue-300">
        Add New Product
      </button>
      </div>
      
    </form>
  );
}

export default Create;
