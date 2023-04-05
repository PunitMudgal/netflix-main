import React, { useState, useEffect } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const leftSlider = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const rightSlider = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-8 md:my-4">
      <h1 className="title my-4 text-2xl md:text-xl font-bold mt-4 md:mt-3 font-text text-gray-600 uppercase">
      Favourite List
      </h1>
      <div className="relative flex items-center group select-none">
        {movies.length >= 5 ? (
          <FiArrowLeftCircle
            size={40}
            onClick={leftSlider}
            className="relative opacity-50 hover:opacity-100 rounded-full left-[3px] z-10  cursor-pointer hidden group-hover:block"
          />
        ) : (
          ""
        )}
        <div
          id={"slider"}
          className="relative w-full h-full overflow-x-auto whitespace-nowrap scrollbar-hide "
        >
          {movies.map((items) => (
            <div
              key={items.id}
              className="relative w-[280px] md:w-[240] sm:w-[190px] inline-block cursor-pointer p-1 shadow-md shadow-red-900/20 border border-gray-800 m-1 hover:shadow-lg hover:shadow-red-900/20  hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-75 duration-300"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500${items?.img}`}
                alt={items?.title}
              />
              <div className="absolute top-0 right-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 ">
                <p className="white-space-normal text-sm md:text-xs font-bold flex justify-center items-center h-full text-center">
                  {items?.title}
                </p>
                <p
                  onClick={() => deleteShow(items.id)}
                  className="absolute text-gray-300 top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        {movies.length >= 5 ? (
          <FiArrowRightCircle
            size={40}
            onClick={rightSlider}
            className="relative opacity-50 hover:opacity-100 rounded-full  hidden right-[3px] cursor-pointer z-10 group-hover:block"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SavedShows;
