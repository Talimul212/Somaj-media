import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaCommentAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import CommentsCart from './CommentsCart';

const Postdetails = () => {
    const post = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, name, textarea, image } = post;
    const [like, setLike] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();


    const { data: comments = [], refetch } = useQuery({
        queryKey: ['allcomments'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allcomments/${_id}`)
            const data = await res.json();
            return data;
        }
    })

    console.log(comments)

    // const likes=getStoredCart();
    const handlerToLike = (select) => {
        setLike(parseInt(1 + select));
        addToDb(_id)
    }

    const commenter = user?.displayName;
    const commenterEmail = user?.email;

    const handleAddPost = data => {
        const post = {
            id: _id,
            commenter,
            commenterEmail,
            post: data.comment,
        }
        // save doctor information to the database
        fetch('http://localhost:5000/allcomments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`${user?.displayName} ,your post uploaded successfuly`);
                refetch()
            })

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
                <p className='pl-4 mt-3 mb-[-21px] font-semibold text-slate-500'> {like} likes </p>

                <div className="divider mb-[-3px]"></div>
                <div className='flex justify-between px-5 pb-3'>
                    <div className='flex gap-2'>
                        <img onClick={() => handlerToLike(like)} style={{ width: "40px" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGjMGeXlQs-S9pw29Q2N5ZVjkAOe1hwGYyQ&usqp=CAUs' alt='' />
                        <p className='mt-5 text-slate-400 text-base font-semibold hidden lg:flex'>Like</p>
                    </div>
                    <div className='flex gap-2'>

                        <div>
                            <label htmlFor="my-modal-3"><FaCommentAlt className='text-4xl text-sky-400 mt-3'></FaCommentAlt></label>
                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h2 className="text-center font-bold text-2xl">Post Comment</h2>
                                    <form onSubmit={handleSubmit(handleAddPost)} >
                                        <div className="form-control w-full ">
                                            <label className="label"><span className="label-text font-bold">Comment</span> </label>
                                            <textarea name='message' {...register('comment', { required: "comment is required" })} className="textarea textarea-bordered h-24 w-full mb-4 " placeholder={`What's on your mind, ${user?.displayName}`}></textarea>
                                            {errors.textarea && <p className='text-red-600'>{errors.textarea.message}</p>}
                                        </div>
                                        <input type="submit" className='btn btn-primary  bg-gradient-to-r from-primary  to-secondary text-white w-full mt-4 ' value='Post' />
                                        <div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <p className='mt-4 text-slate-400 font-semibold hidden lg:flex'>Comment</p>
                    </div>
                    <div>
                        <Link to='/media'>
                            <button className="btn  border-0 text-white  bg-sky-400">Media</button>
                        </Link>
                    </div>
                </div>
                <div className="divider mt-[-3px]"></div>

                {
                    comments.map(comment => <CommentsCart key={comment._id} comment={comment}></CommentsCart>)
                }
            </div>
        </div>
    );
};

export default Postdetails;