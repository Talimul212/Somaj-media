import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import PostCard from './PostCard';

const Media = () => {
const [allPosts,setAllPosts]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/allposts')
   .then(res=>res.json())
    .then(data=>setAllPosts(data))
},[]);


return (
        <div className='grid lg:grid-cols-3'>
            {
                allPosts.map((post,index)=><PostCard key={post._id} post={post}  index={index}></PostCard>)
            }
        </div>
    );
};

export default Media;