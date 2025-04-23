import React from 'react'
import GlobalApi from '../Services/GlobalApi'
type Props={
    movie:any
}
function HrMovieCard(Props:any) {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in'>
    <img src={GlobalApi.Image_base_url+Props.movie.backdrop_path} 
    className='w-[110px] md:w-[260px] rounded-lg
    hover:border-[3px] border-gray-400 cursor-pointer
    '/>
    <h2 className='w-[110px] md:w-[260px] text-white
    mt-2'>{Props.movie.title}</h2>
    </section>
  )
}

export default HrMovieCard