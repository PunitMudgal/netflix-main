import React from 'react'
import SavedShows from '../Components/SavedShows'

export default function Account() {
  return (
    <>
    <div className='w-full text-white'>
      <img className='w-full h-[45vh] object-cover ' src="https://img.freepik.com/free-vector/cinema-stage-background-with-clapperboard-popcorn-chairs_1017-38722.jpg?w=1060&t=st=1680612843~exp=1680613443~hmac=46ef600891630a614add18fc4f984076c415370a66e6799bcda2c682b6e204c9" alt="bgImage" />
      <div className='w-full h-[50vh] absolute top-0 bg-black opacity-30'></div>
      <div className='absolute top-[20%] p-8 md:p-4 '>
        <h1 className='text-4xl text-slate-300 md:text-2xl font-text font-bold'>My Shows</h1>
      </div>
    </div>
    <SavedShows />
    </>
  )
}
