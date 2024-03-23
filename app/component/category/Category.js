import React from "react";
import Navbar from "../Navbar/Navbar";

const Category = () => {
  return (
    <div>
      
      <div className="h-[90vh] w-screen flex justify-center items-center flex-col">
        <div className="w-full flex justify-center items-center">
          <input
            type="search"
            name=""
            id=""
            placeholder="Enter text..."
            className="w-[35%] border border-[#5A5A5A] p-4 outline-none"
          />
          <button className=" bg-[#4CAF50] p-[1.1rem] border-none ml-1 text-white">
            Create Note
          </button>
        </div>
        <div className="mt-10 w-[50%] h-3/5 bg-[#A5B74A]">
          <h5 className="m-4">category</h5>
          <button className="bg-[#093e10] text-white p-1 mr-1  ml-4">
            Delete
          </button>
          <button className="bg-[#093e10] text-white p-1 mr-1 ">Edit</button>
          <button className="bg-[#093e10] text-white p-1 mr-1 ">Save</button>
          <button className="bg-[#093e10] text-white p-1 mr-1 ">
            New Notes
          </button>
          <div className="ml-4 border border-gray-100 h-[352px] w-[829px] rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Category;
