import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hook/useToken';
import { AuthContext } from '../../Context/AuthProvider';




const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [singUpError, setSignUpError] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail);
    const imageHostKey = process.env.REACT_APP_imgbbkey;
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    } 




    const handleSignUp = (data) => {
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            
            toast('User Created Successfully.')
            const userInfo = {
                displayName: data.name,
            }
            updateUser(userInfo)
                .then(() => {
                    saveUser(data.name, data.email);
                })
                .catch(err => console.log(err));
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        })

    const saveUser = (name, email) => {
        const role = 'seller'
        const user = { name, email, role };
        fetch('https://tech-com-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email)
            })
    }


    }

    return (
        <div className=' flex justify-center items-center'>
            <div className="hero rounded-lg mt-10" id='heroImg'>
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className='w-full p-7 shadow-lg rounded-xl bg-white'>
                        <h2 className='text-2xl font-semibold text-center mb-6'>Sign Up</h2>
                        <form onSubmit={handleSubmit(handleSignUp)} >
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text font-bold">Name</span></label>
                                <input type="text" {...register("name", {
                                    required: "Name is Required"
                                })} className="input input-bordered w-full" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"><span className="label-text font-bold">Email</span> </label>
                                <input type='text' name='email' {...register('email', { required: "email is required" })}
                                    className="input input-bordered w-full" />
                                {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"><span className="label-text font-bold">Password</span> </label>
                                <input type='password' name='password' {...register('password'
                                    , {
                                        required: "password is required",
                                        minLength: { value: 6, message: "password must be 6 characters or longer" }
                                    }
                                )}
                                    className="input input-bordered w-full" />
                                {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

                            </div>
                            <input type="submit" className=' btn btn-primary  bg-gradient-to-r from-primary  to-secondary my-2 text-white w-full' value='Sign Up ' />
                            <div>
                                {singUpError && <p className='text-red-600'>{singUpError}</p>}
                            </div>
                        </form>
                        <p className='font-bold text-center'>Already have an <Link to='/login' className='text-secondary'> account</Link></p>

                    </div>
                    <div>
                        <h1 className=" text-5xl font-bold text-blue-600">How it works
                        </h1>
                        <p className="py-6 text-2xl font-semibold"></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;