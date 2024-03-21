import React from "react";
import Navbar from "./../component/Navbar/Navbar";

const Category = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[90vh] w-screen flex justify-center items-center">
        <input
          type="search"
          name=""
          id=""
          placeholder="Enter text..."
          className="w-[35%] border border-[#5A5A5A] p-4 outline-none"
        />
        <button className=" bg-[#4CAF50] p-[1.1rem] border-none ml-1 text-white">Create Note</button>
      </div>
    </div>
  );
};

export default Category;
