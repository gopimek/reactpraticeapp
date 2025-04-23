import React,{useEffect,useRef,useState} from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft,HiChevronRight } from "react-icons/hi2";
function Slider() {
    const [movieList,setmovieList]=useState([]);
     useEffect(() => {
        getTrendingVideoas();
    },[]);
    const windowWidth = window.innerWidth;
    const elementRef = useRef<HTMLDivElement | null>(null);
    const getTrendingVideoas = ()=>{
        GlobalApi.getTrendingVideoas
        .then((res:any) => {
        const data =res.results;
        setmovieList(data);
        })
        .catch((err) => {
        console.log(err)
         });
    };
    const sliderRight=(element:any)=>{
      element.scrollLeft+=windowWidth-110
      }
      const sliderLeft=(element:any)=>{
          element.scrollLeft-=windowWidth-110
      }
  return (
    <div>
      <HiChevronLeft className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer" onClick={()=>sliderLeft(elementRef.current)}/>
      <HiChevronRight className=" hidden md:block text-white text-[30px] absolute mx-8 
      mt-[150px] cursor-pointer right-0" onClick={()=>sliderRight(elementRef.current)}/>
      <div ref={elementRef} className='flex overflow-x-auto scrollbar-none scroll-smooth px-16 py-4 w-full'> 
        {movieList.map((item:any)=>(
            <img src={GlobalApi.Image_base_url+item.backdrop_path} 
            className='min-w-full  md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in'/>
        ))}
    </div>
    </div>
    // <div>
    // {/* {movieList.map((item:any,index:number)=>(
    //       <img src={`${GlobalApi.Image_base_url+item.backdrop_path}`} 
    //       className='min-w-fill h-[310px] object-cover' />
    // ))} */
    // </div>
  )
}

export default Slider
