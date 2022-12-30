import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Section3 = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .carch();
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                {
                    user?.email ?
                        <>
                            <ul className='font-semibold mr-4 text-black text-center'><Link to='/about'>About</Link></ul>
                            <div className='flex gap-2 justify-center'>
                                <ul className='font-semibold  text-black' ><Link>Log Out</Link></ul>
                                <input onClick={handleLogOut} type="checkbox" className="toggle" checked />
                            </div>

                        </>
                        :
                        <>
                            <ul className='font-semibold mr-4 text-black'><Link to='/login'>Login</Link></ul>
                            <ul className='font-semibold text-black'><Link to='/signUp'>Sign Up</Link></ul>

                        </>
                }

            </div>
        </div>
    );
};

export default Section3;