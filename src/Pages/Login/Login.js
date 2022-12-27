import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';



const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    // const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [createUserEmail, setCreateUserEmail] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.form?.pathname || '/';

    const handlerGoogleSingIn = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                navigate('/');
            })
            .catch(error => {
                console.log(error.message)
            });
       
    }
    const handleLogin = data => {
        setLoginError('');
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    return (
        <div className=' flex justify-center items-center'>
            <div className="hero rounded-lg mt-10" id='heroImg'>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-full p-7 shadow-lg rounded-xl bg-white'>
                        <h2 className='text-2xl font-semibold text-center mb-6'>Login</h2>

                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="form-control w-full ">
                                <label className="label"><span className="label-text font-bold">Email</span> </label>
                                <input type='text' name='email'
                                    {...register("email",
                                        { required: "Email Address is required" })}
                                    className="input input-bordered w-full" />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"><span className="label-text font-bold">Password</span> </label>
                                <input type='password' name='password'
                                    {...register("password",
                                        {
                                            required: "Password is required",
                                            minLength: { value: 6, message: "password must be 6 characters or longer" }
                                        })}
                                    className="input input-bordered w-full" />
                                {errors.password && <p className=' text-red-600'>{errors.password?.message}</p>}
                                <label className="label"><span className="label-text font-semibold">Fotget password</span> </label>
                            </div>
                            <input type="submit" className=' btn btn-primary  bg-gradient-to-r from-primary  to-secondary my-2 text-white w-full' value='login' />
                            <div>
                                {
                                    loginError && <p className='text-red-600'>{loginError}</p>
                                }
                            </div>
                        </form>
                        <p className='font-bold text-center'>New to Tech.com? <Link to='/signup' className='text-secondary'>Create new account</Link></p>
                        <div className='divider'>OR</div>
                        <button onClick={handlerGoogleSingIn} className=' btn btn-primary  bg-gradient-to-r from-primary  to-secondary w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                    <div>
                        <h1 className=" text-5xl font-bold text-blue-600">How it works
                        </h1>
                        <p className="py-6 text-2xl font-semibold"> </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;