
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Section1= () => {
    const{user}= useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbbkey;
    const navigate = useNavigate();

    const handleAddDoctor = data => {

     const image = data.image[0];
    
     console.log("image:",image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
      .then(res=>res.json())
      .then(imgData=>{
        if(imgData.success){
            console.log(imgData.data.url);
            const post = {
                name: data.name, 
                textarea: data.textarea,
                image: imgData.data.url
            }
              // save doctor information to the database
              fetch('http://localhost:5000/allposts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(post)
            })
            .then(res => res.json())
            .then(result =>{
                toast.success(`${data.name} ,you post uploaded successfuly`);
                navigate('/media')
            })
       }
    })
    }

   
    return (
        <div className='flex flex-row justify-center mt-8'>
            <div className='w-96 p-7 shadow-lg rounded-xl'>
            <h2 className='text-3xl font-bold'>Create post</h2>
                <form onSubmit={handleSubmit(handleAddDoctor)} >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text font-bold">Textarea</span> </label>
                        <textarea name='message' {...register('textarea', { required: "textarea is required" })} className="textarea textarea-bordered h-24 w-full mb-4" placeholder={`What's on your mind, ${user?.email}`}></textarea>
                        {errors.textarea && <p className='text-red-600'>{errors.textarea.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold">Upload text related photo</span></label>
                        <input type="file" {...register("image", {
                            required: "photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>
                    <input type="submit" className='btn btn-primary  bg-gradient-to-r from-primary  to-secondary text-white w-full mt-4' value='Submit' />
                    <div>

                    </div>
                </form>
            </div>
        </div>
    );
};
/*
*Three places to store images
*1.Thrid party images hosting server 
*2.File system of your server
*3.Mongodbh (database)
**/
export default Section1;

// 



// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
