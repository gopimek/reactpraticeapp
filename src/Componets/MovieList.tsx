import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
type Props={
    genreId:any,
    index:number
}
function MovieList(Props:any) {
    const [movieList,setMovieList]=useState([])
    const elementRef=useRef(null);
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(Props.genreId).then((resp:any)=>{
            console.log(resp.results)
            if(resp.results){
                setMovieList(resp.results)
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    const slideRight=(element:any)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element:any)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${Props.index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>
   
    <div ref={elementRef} className='flex overflow-x-auto gap-8
     scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
        {movieList.map((item,index)=>(
           <>
          {Props.index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
           </> 
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${Props.index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
  )
}

export default MovieList