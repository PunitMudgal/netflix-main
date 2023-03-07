import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function Movies(props) {
  const [watchLater, setWatchLater] = useState(false);

  return (
    <div className="relative w-[280px] md:w-[240] sm:w-[190px] inline-block cursor-pointer p-1 shadow-md shadow-red-900/20 border border-gray-800 m-1 hover:shadow-lg hover:shadow-red-900/20  hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-75 duration-300">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500${props.items?.backdrop_path}`}
        alt={props.items?.title}
      />
      <div className="absolute top-0 right-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 ">
        <p className="white-space-normal text-sm md:text-xs font-bold flex justify-center items-center h-full text-center">
          {props.items?.title}
        </p>

        <p>
          {watchLater ? (
            <FaHeart className="absolute top-4 right-4 text-gray-500" />
          ) : (
            <FaRegHeart className="absolute top-4 right-4 text-gray-500" />
          )}
        </p>
      </div>
    </div>
  );
}
