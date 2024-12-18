import React from 'react';
import Singal from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'




export default function plans(){
return(
<div className='py-[100px] px-2'>
<div className='md:grid grid-cols-3 max-w-[1240px] gap-6 my-4 mx-auto'>
<div className='shadow-xl text-center py-2 hover:scale-105 duration-500 my-4  items-center relative '>
<img src={Singal} alt="" className='w-[80px] m-auto  absolute top-[-40px] left-[180px]' />
<h1 className='text-[24px] font-bold mt-8 text-center '>Web Devlopement </h1>
<h2 className='text-[29px] font-bold text-center mt-5 '>$149</h2>
<p className='mt-7 text-center'>Experienced Teachers</p>
<p className='mt-4 text-center'>12 + projects and best gauidance by our <br /> instructer's team</p>
<p className='mt-4 text-center'>Experienced Teachers</p>
<button className='bg-[#6dce6d]  text-white p-3 mt-6 rounded w-[37%] '>Start Trial</button>

</div>
<div className='shadow-xl text-center bg-gray-100  hover:scale-105 duration-500 relative'>
<img src={Double} alt="" className='w-[80px] m-auto absolute top-[-35px] left-[180px] mb-4' />
<h1 className='text-[24px] font-bold mt-8 text-center '>Digital Marketing </h1>
<h2 className='text-[29px] font-bold text-center mt-5 '>$149</h2>
<p className='mt-7 text-center'>Experienced Teachers</p>
<p className='mt-4 text-center'>12 + projects and best gauidance by our <br /> instructer's team</p>
<p className='mt-4 text-center'>Experienced Teachers</p>
<button className='bg-black  text-white p-3 mt-6 rounded w-[37%] '>Start Trial</button>
</div>
<div className='shadow-xl text-center hover:scale-105 duration-500 my-4 relative'>
<img src={Triple} alt="" className='w-[80px] m-auto absolute top-[-55px] left-[180px]  ' />
<h1 className='text-[24px] font-bold mt-8 text-center '>App Devlopement </h1>
<h2 className='text-[29px] font-bold text-center mt-5 '>$149</h2>
<p className='mt-7 text-center'>Experienced Teachers</p>
<p className='mt-4 text-center'>12 + projects and best gauidance by our <br /> instructer's team</p>
<p className='mt-4 text-center'>Experienced Teachers</p>
<button className='bg-[#6dce6d]  text-white p-3 mt-6 rounded w-[37%] '>Start Trial</button>
</div>
</div>
</div>


)


}
