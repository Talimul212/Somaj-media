import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login');
      })
      .catch(err => console.log(err));
  }
  return (
    <div >
      <section className='flex items-center h-screen p-16 bg-gradient-to-r from-primary  to-secondary text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-gray-500'>
              <span className='sr-only'>Error</span>
              <div className='flex justify-center items-center h-full'>
                4
                <div className='w-24 h-24 border-8 border-dashed rounded-full animate-spin mt-3 border-gradient-to-r from-secondary  to-primary '></div>
                4
              </div>
            </h2>
            <p className='text-2xl font-semibold md:text-3xl mb-8'>
              Sorry, we couldn't find this page.
            </p>
            <Link to='/'>
              <input className='btn btn-primary  bg-gradient-to-r from-secondary  to-primary text-white w-full mt-4' value=' Back to homepage' />
            </Link>
            <p className='text-red-400'>{error.statueText || error.message}</p>
            <p className='mt-3 font-semibold'>OR</p>
            <h2 className='text-3xl'>Please  <button onClick={handleLogOut}>Log Out</button> and log back in</h2>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DisplayError;