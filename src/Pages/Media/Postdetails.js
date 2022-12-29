import React, { useState } from 'react';
import { FaCommentAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';

const Postdetails = () => {
    const post = useLoaderData();
    const { _id, name, textarea, image } = post;

    const [like, setLike] = useState('')


    const likes = localStorage.getItem('Total-likes');
    console.log(likes);
    const handlerToLike = (select) => {
        addToDb(setLike(parseInt(1 + select)));



    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-8 mx-3 lg:mx-44 border-2">
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
                </div>
            </div>
            <div>
                <p className='  mt-4 pl-5 mb-2'>Description: {textarea}</p>
                <figure><img src={image} alt="Shoes" className='w-full h-full' /></figure>
                <p className='pl-4 mt-3 mb-[-21px] font-semibold text-slate-500'>{
                    like} likes </p>
                <div className="divider mb-[-3px]"></div>
                <div className='flex justify-between px-5 pb-3'>
                    <div className='flex gap-2'>
                        <img onClick={() => handlerToLike(like)} style={{ width: "40px" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGjMGeXlQs-S9pw29Q2N5ZVjkAOe1hwGYyQ&usqp=CAUs' alt='' />
                        <p className='mt-5 text-slate-400 text-base font-semibold hidden lg:flex'>Like</p>
                    </div>
                    <div className='flex gap-2'>
                        <FaCommentAlt className='text-4xl text-sky-400 mt-3'></FaCommentAlt><p className='mt-4 text-slate-400 font-semibold hidden lg:flex'>Comment</p>
                    </div>
                    <div>
                        <Link to='/media'>
                            <button className="btn  border-0 text-white  bg-sky-400">Media</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Postdetails;