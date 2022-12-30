import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaSearch, FaHome } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';
import logo from '../../assets/logo.webp'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .carch();
    }
    const menuItems = <>
        <li className='font-semibold mr-4 text-white'><Link to='/'><FaHome className='text-2xl'></FaHome></Link></li>
        <li className='font-semibold mr-4 text-white'><Link to='/media'>Media</Link></li>
        <li className='font-semibold mr-4 text-white'><Link to='/message'>Message</Link></li>
       
        
    </>

    return (
        <div className="navbar   bg-primary  h-20 mb-12 header rounded-b-lg">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-300 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>
                    <img className='h-12 w-12' src={logo} alt=''></img>
                </Link>
                <h2 className='text-3xl font-bold text-white'>Somaj</h2>
            </div>

            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className='ml-10 hidden lg:flex'>
                <FaSearch className='text-white text-xl'></FaSearch>
                <div className="form-control ml-2 mr-3">
                    <input type="text" placeholder="Search" className=" px-3  rounded-lg" />
                </div>
            </div>


            <div className=" hidden lg:block">
                {
                    user?.photoURL ?
                        <>
                            <div className='flex gap-2 '>
                                <img className='h-8 rounded-full ' src={user?.photoURL} alt=''></img>
                                <p className='text-lg font-semibold text-white'>{user?.displayName}</p>
                            </div>
                        </>
                        :

                        <>
                            {
                                user?.email ?
                                    <>
                                        <div className=' bg-slate-200 p-2 rounded-full avatar online'>
                                            <FaUser></FaUser>
                                        </div>
                                    </>
                                    :
                                    ""
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default Header;