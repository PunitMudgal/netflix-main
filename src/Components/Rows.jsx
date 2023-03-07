import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import Movies from "./Movies";

// https://image.tmdb.org/t/p/original
export default function Rows(props) {

  const [movies, setMovies] = useState([]);

  const leftSlider = () => {
    let slider = document.getElementById('slider' + props.rowId)
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const rightSlider = () => {
    let slider = document.getElementById('slider' + props.rowId)
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    axios.get(props.fetchData).then((res) => {
      setMovies(res.data.results);
      // console.log('below is res');
      // console.log(res);
      // console.log('below is movies');
      // console.log(movies);
    });
  }, []);

  return (
    <>
      <h1 className="title text-3xl md:text-xl font-bold mt-4 md:mt-3 font-text uppercase">
        {props.title}
      </h1>
      <div className="relative flex items-center group select-none">
        <FiArrowLeftCircle
          size={40}
          onClick={leftSlider}
          className="relative opacity-50 hover:opacity-100 rounded-full left-[3px] z-10  cursor-pointer hidden group-hover:block"
        />
        <div
          id={"slider"+ props.rowId}
          className="relative w-full h-full overflow-x-auto whitespace-nowrap scrollbar-hide "
        >
          {movies.map((items, id) => (
            <Movies items={items} key={id} />
          ))}
        </div>
        <FiArrowRightCircle
          size={40}
          onClick={rightSlider}
          className="relative opacity-50 hover:opacity-100 rounded-full  hidden right-[3px] cursor-pointer z-10 group-hover:block"
        />
      </div>
    </>
  );
}
