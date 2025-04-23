import React from 'react'
import logo from '../assets/Images/logo.png'
import {HiHome,HiStar,HiTv,HiPlayCircle,HiMagnifyingGlass} from 'react-icons/hi2'
import { HiLink,HiDotsVertical,HiPlus   } from 'react-icons/hi'
import HeaderItems from './HeaderItems'
function Header() {
    const [toggle,setToggle]=React.useState(false);
    const menu=[
        {name:'HOME',icon:<HiHome className='text-[20px]'/>},
        {name:'Search',icon:<HiMagnifyingGlass className='text-[20px]'/>},
        {name:"WATCH LIST",icon:<HiPlus className='text-[20px]'/>},
        {name:'ORIGINALS',icon:<HiStar className='text-[20px]'/>},
        {name:'MOVIES',icon:<HiPlayCircle className='text-[20px]'/>},
        {name:'SERIES',icon:<HiTv className='text-[20px]'/>}, 
         // {name:'Link',icon:<HiLink className='text-[20px]'/>},
        // {name:'More',icon:<HiDotsVertical className='text-[20px]'/>},
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex items-center gap-8'>
        <img src={logo} alt="Logo" className="w-[80px] md:w-[100px] object-cover" />
        <div className='hidden md:flex items-center gap-8'>
        {menu.map((item:any,index)=>(
            <HeaderItems key={index} name={item.name} Icon={item.icon}/>
        ))}
        </div>
        <div className='flex items-center gap-5 md:hidden'>
        {menu.map((item:any,index)=>index<3&&(
            <HeaderItems key={index} name={''} Icon={item.icon}/>
        ))}
        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
          <HeaderItems name='' Icon={<HiDotsVertical className='text-[20px]'/>}/>
          {toggle?<div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item:any,index)=>index>2&&(
            <HeaderItems key={index}name={item.name} Icon={item.icon}/>
        ))}
          </div>:null}
        </div>
        </div>
        </div>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="logo" 
        className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header
