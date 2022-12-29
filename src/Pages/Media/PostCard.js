import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCommentAlt } from "react-icons/fa";
import {addToDb} from'../../utilities/fakedb'
const PostCard = ({ post, index }) => {
  const { _id, name, image, textarea } = post;
  const [like,setLike]=useState('')


const likes = localStorage.getItem('Total-likes');
console.log(likes);
  const handlerToLike=(select)=>{
     addToDb(setLike(parseInt(1+select)));
   
     

  }
  return (
    <div className="card card-compact bg-base-100 shadow-xl mb-8 mx-3 border-2">
     <div className='flex justify-between'>
      <div className='flex gap-1'>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-3 mt-3">
        <div className="w-10 rounded-full">
          <img src="https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png" alt='' />
        </div>
      </label>
      <div>
      <h2 className=" text-sm font-semibold mt-5">{name}</h2>
      <p className='mt-[-6px]'><small>Public</small></p>
      </div>
      </div>
      <div className='mr-4 mt-2'>
        <p className='font-semibold text-slate-400'>{index + 1}</p>
      </div>
     </div>
      <div>
        <p className='  mt-4 pl-5 mb-2'><b>Description:</b> {textarea.slice(0, 20) + '...'}</p>
        <figure><img src={image} alt="Shoes" className='w-full h-64' /></figure>
          <div className='mx-2 my-4'>
            <Link to={`/details/${_id}`}>
              <button className="btn  border-0 text-white  bg-sky-400 w-full">More Details</button>
            </Link>
          </div>  
      </div>
    </div>
  );
};

export default PostCard;