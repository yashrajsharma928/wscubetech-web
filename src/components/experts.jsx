import React from 'react';
import laptop from '../assets/laptop.jpg'


export default function Experts(){
return(
    <div className='max-w-[1240px] mx-auto  my-10 p-2 md:grid grid-cols-2'>
<div className='  col-span-1 md:w-[80%]'>
<img src={laptop} alt="" />

</div>

<div className='  col-span-1 flex flex-col justify-center'>
<h1 className='text-[#00df9a] my-2 '>LEARN FROM EXPERTS </h1>
<p className='my-2'>Cureare School Institute is seeking a skilled Web Developer to join their team. The role involves developing and maintaining the institute's website, ensuring a seamless user experience. Candidates should have expertise in front-end and back-end technologies, with a focus on responsive design and performance optimization.</p>
<button className='bg-black text-white p-3 rounded w-[30%]'>Get Started</button>
</div>


</div>

)

}


