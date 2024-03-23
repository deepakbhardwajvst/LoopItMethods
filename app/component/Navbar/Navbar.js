import React from 'react'
import InputText from './../input/InputText';

const Navbar = ({ signOut }) => {
  return (
    <nav className="flex justify-between bg-[#181818] max-h-20">
      <div className="text-white flex items-center gap-4">
        <button className="bg-[#4CAF50] h-full p-3 font-bold text-xl">
          Sticky Note
        </button>
        <h2 className="">Home</h2>
      </div>
      <div className="text-white flex items-center gap-4">
        <button
          type="button"
          className="bg-[#4CAF50] rounded-md px-2 py-1"
          onClick={() => signOut()}
        >
          Logout
        </button>
        <input
          type="search"
          placeholder="Search..."
          className=" outline-none px-2 py-1 mr-4"
        />
      </div>
    </nav>
  );
};

export default Navbar