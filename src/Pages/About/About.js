import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import InfoCard from './InfoCard';

const About = () => {
  const { user } = useContext(AuthContext);
  const [info, setInfo] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbbkey;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || '/';


  useEffect(() => {
    fetch(`  https://somej-media-server.vercel.app/users/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setInfo(data);
      })
  }, [user?.email])


  const handleAddPost = data => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          const post = {
            name: data.name,
            email: data.email,
            university: data.university,
            adress: data.adress,
            image: imgData.data.url
          }
          // save doctor information to the database
          fetch('https://somej-media-server.vercel.app/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(post)
          })
            .then(res => res.json())
            .then(result => {
              toast.success(`${data.name} ,you information update successfuly`);
              navigate(from, { replace: true });
              navigate('/about')
            })
        }
      })
  }

  return (
    <div>
      <h2 className='text-center mb-3 text-2xl' >please, click the edit button and filup your name, email, university and address</h2>
      <div className='flex  justify-center mb-10'>
      <div className="w-96 bg-base-100 shadow-xl rounded-lg ">
        {
          info.map(infos=><InfoCard key={infos._id} infos={infos}></InfoCard>)
        }
        <div>
          <label htmlFor="my-modal-3" className="btn bg-primary text-white w-full">Edit</label>
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h2 className="text-center font-bold text-2xl">Your Information</h2>
              <form onSubmit={handleSubmit(handleAddPost)} >
                <div className='lg:flex  gap-2'>
                  <div className="form-control w-full ">
                    <label className="label"> <span className="label-text font-bold">Name</span></label>
                    <input name='name' type="text" {...register("name", {
                      required: "Name is Required"
                    })} className="input input-bordered w-full" defaultValue={user?.displayName} value={user?.displayName} />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                  </div>
                  <div className="form-control w-full ">
                    <label className="label"> <span className="label-text font-bold">Email</span></label>
                    <input name='email'  type="email" {...register("email", {
                      required: "email is Required"
                    })} className="input input-bordered w-full " defaultValue={user?.email} value={user?.email} />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                  </div>
                </div>
                <div className="form-control w-full ">
                  <label className="label"> <span className="label-text font-bold">University Name</span></label>
                  <input type="text" {...register("university", {
                    required: "university is Required"
                  })} className="input input-bordered w-full " />
                  {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>


                <div className="form-control w-full ">
                  <label className="label"><span className="label-text font-bold">Adress</span> </label>
                  <textarea name='message' {...register('adress', { required: "adress is required" })} className="textarea textarea-bordered h-24 w-full mb-4 " placeholder={`Your adress, ${user?.email}`}></textarea>
                  {errors.textarea && <p className='text-red-600'>{errors.textarea.message}</p>}
                </div>

                <div className="form-control w-full ">
                  <label className="label"> <span className="label-text font-bold">Upload Your photo</span></label>
                  <input type="file" {...register("image", {
                    required: "photo is Required"
                  })} className="input input-bordered w-full " />
                  {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input type="submit" className='btn btn-primary  bg-gradient-to-r from-primary  to-secondary text-white w-full mt-4 ' value='Update' />
                <div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default About;