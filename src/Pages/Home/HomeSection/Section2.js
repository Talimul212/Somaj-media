import React, { useEffect, useState } from 'react';
import PostCard from '../../Media/PostCard';


const Section2 = () => {
const [allPosts,setAllPosts]=useState([]);
useEffect(()=>{
    fetch('https://somej-media-server.vercel.app/topposts')
   .then(res=>res.json())
    .then(data=>setAllPosts(data))
},[]);

    return (
        <div className='lg:ml-[-30px]'>
            <h2 className='text-center text-3xl  lg:mt-[-25px] '>Top most like posts</h2>
            <div className='lg:flex flex-col justify-center mt-5'>
            
            {
                allPosts.map((post,index)=><PostCard key={post._id} post={post} index={index}></PostCard>)
            }
        </div>
        </div>
       
    );
};

export default Section2;

