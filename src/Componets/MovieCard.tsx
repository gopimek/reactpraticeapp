import React from 'react'
import GlobalApi from '../Services/GlobalApi';
type Props={
    movie:any
}

function MovieCard(Props:any) {
  return (
    <>
        <img src={GlobalApi.Image_base_url+Props.movie.poster_path} 
        className='w-[110px] md:w-[200px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in'/>
    </>
  )
}

export default MovieCard