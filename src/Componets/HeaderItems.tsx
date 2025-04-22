import React from 'react'
type HeaderProps={
    name:any,
    Icon:any
}
// const HeaderItems : React.FC<HeaderProps>=({name,Icon})=> {
//   return (
//     <div>
//       <h5>{Icon}</h5>
//       <h2>{name}</h2>
//     </div>
//   );
// }
function HeaderItems (HeaderProps:any) {
    return (
      <div className='flex items-center gap-2 text-[15px] font-semibold courser-pointer hover:underline underline-offset-8 mb-3'>
        <h5>{HeaderProps.Icon}</h5>
        <h2 className=''>{HeaderProps.name}</h2>
      </div>
    );
  }
export default HeaderItems
