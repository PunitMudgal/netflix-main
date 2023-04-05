import React, { useState, useEffect } from "react";
import axios from "axios";
import Requests from "../Request";

export default function Poster() {
  const [movie, setMovie] = useState([]);

  //* below code will pick random movies from the array everytime the user refresh the page
  const randomNoGenerator = movie[Math.floor(Math.random() * movie.length)];

  useEffect(() => {
    axios.get(Requests.requestPopular).then((res) => {
      setMovie(res.data.results); 
      // console.log('movie below')
      // console.log(movie);
    });
  }, []);
  // console.log('random no, below')
  // console.log(randomNoGenerator)

  // to short the description length of movie
  // const descriptionLength = (str, num) => {
  //   if (str.length > num) {
  //     return str.slice(0, num) + "...";
  //   } else {
  //     return str;
  //   }
  // };

  // const newArray = randomNoGenerator.overview.slice(0, 150) + "...";

  return (
    <div className="w-full h-[600px] md:h-[450px] shadow-lg shadow-red-900/25">
      <div className="w-full h-full">
        {/* gradient  */}
        <div className="absolute w-full bg-transparent h-[600px] md:h-[450px] bg-gradient-to-r from-black "></div>

        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${randomNoGenerator?.backdrop_path}`}
          alt={randomNoGenerator?.title}
        />

        {/* text  */}
        <div className="absolute top-[20%] bg-transparent ml-4 max-w-lg md:max-w-sm sm:max-w-xs">
          <h2 className=" font-heading bg-transparent font-bold text-3xl md:text-2xl ">
            {randomNoGenerator?.title}
          </h2>
          <div className="mb-4 mt-1 bg-transparent font-text gap-4 flex md:mt-3 md:gap-3">
            <button className="bg-transparent bg-white border hover:bg-gray-300 border-gray-400 rounded-sm py-2 px-4 text-black hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-75 duration-300">
              Play
            </button>
            <button className="bg-transparent border hover:text-gray-400 border-gray-400 rounded-sm py-2 px-4 hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-75 duration-300">
              Watch Later
            </button>
          </div>
          <p className="bg-transparent text-md text-gray-300">
            Released on: {randomNoGenerator?.release_date}
          </p>
          <p className="bg-transparent text-gray-300 text-md mt-1">
            {/* {descriptionLength(randomNoGenerator?.overview, 150)} */}
            {randomNoGenerator?.overview}
            {/* {newArray} */}
          </p>
        </div>
      </div>
    </div>
    // <></>
  );
}
