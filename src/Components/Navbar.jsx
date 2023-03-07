import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-transparent p-7 items-center w-full sm:p-6 absolute z-[100]">
      <Link className=" bg-transparent" to="/">
        <h1 className=" bg-transparent text-4xl font-text font-bold text-red-600 md:text-3xl sm:text-xl">
          NETFLIX
        </h1>
      </Link>
      <div className="ss:flex-col flex gap-1 bg-transparent">
        <Link className="bg-transparent" to="/signin">
        <button className="text-gray-200 hover:text-white border-2 border-gray-700 rounded-md flex items-center px-4 py-2  font-semibold text-lg md:px-2 md:py-1 md:text-md sm:text-sm hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-75 duration-300">
          Sign In
        </button>
        </Link>

        <Link className="bg-transparent" to='/signup'>
        <button className="hover:bg-red-700 border-2 border-gray-700 rounded-md flex items-center px-4 py-2 md:px-2 md:py-1 md:text-md bg-red-600 text-lg font-semibold sm:text-sm hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-75 duration-300">
          Sign Up
        </button>
        </Link>
      </div>
    </div>
  );
}
