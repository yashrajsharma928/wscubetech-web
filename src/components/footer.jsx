import React from 'react';
import { FaFacebookSquare,FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

export default function footer(){
return(
<div className=' bg-[#2699fb]'>
<div className='grid grid-cols-5 w-[1240px] mx-auto pb-8'>
<div className='col-span-2 p-7'> <h1 className='font-bold text-[27px] mt-5'>Ws Cube Tech .</h1><p className='text-white mt-4'>Ws Cube Tech is a institude which can be provide's you a envaironmet to studyied in our cotching centers who located in jaipur and jodhpur .</p>
<div className='flex justify-around mt-10 text-[27px] text-white p-3'><FaFacebookSquare /> <FaInstagram /> <FaSquareTwitter /> <IoLogoGithub />
</div>

</div>
<div className='grid-cols-1 text-white py-6 p-7'><h1 className='text-black mb-4'>Solutions</h1><p >Analytics</p><br /><p>Marketing</p><br /><p>Commerce</p><br /><p>Insights</p></div>
<div className='grid-cols-1 text-white py-6 p-6'><h1 className='text-black mb-4'>Support</h1><p >Pricing</p><br /><p>Documenttation</p><br /><p>Guides</p><br /><p>API Status</p></div>
<div className='grid-cols-1 text-white py-6 p-6'><h1 className='text-black mb-4'>Company</h1><p >About</p><br /><p>blog</p><br /><p>Jobs</p><br /><p>Press</p>
<br /><p>Careers</p>
</div>


</div>


</div>


)



}
