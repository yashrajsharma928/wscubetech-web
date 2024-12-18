import React from 'react';



export default function newsLetters(){
return(
<div className=' bg-[#2699fb] p-4 '>
<div className='max-w-[1240px] md:flex mx-auto justify-between py-[50px] '>
<div className='m-2' >
    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want To Learn Latest I.T. Skills ?</h1>
<span className='text-white'>Sign up to our news letter and stay up to date .</span></div>
<div className='m-2' >
<input type="text" className='p-3 rounded mb-2 mr-2 text-slate-600' placeholder=' E-mail' />
<button className='bg-black text-white p-3 rounded '>Get Started</button>
<br/>
<p className='text-white'> We care bout the pretection of your data . Read Our<br/> <a href="" className='text-black'>Praivate Policy</a> </p>
</div>
</div>
</div>



)


}
