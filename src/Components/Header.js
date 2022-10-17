import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Context/UserContext';
import image from '../images/6b087603862a127ea290e0a47ed932bf.jpg'

const Header = () => {
    const { user, logOut } = useContext(authContext);
    const handlesignOut = () => {

        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    console.log(user)
    return (
        <div>
            <div className="navbar bg-base-200 container mx-auto px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'>Home</Link>
                            <Link to='/order'>Orders</Link>
                            <Link to='/login'>Login</Link>
                            <Link to='/registration'>SignUp</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-white normal-case text-xl">i-Secure</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-white menu-horizontal p-0">
                        <Link className='mx-3' to='/'>Home</Link>
                        <Link className='mx-3' to='/profile'>Profile</Link>
                        <Link className='mx-3' to='/registration'>SignUp</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.displayName &&
                        <div className='flex items-center'>
                            <div className="avatar">
                                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={image} alt='img' />
                                </div>
                            </div>
                            <h4 className='mr-10 mx-2 text-white'>{user.displayName}</h4>
                        </div>
                    }

                    {

                        user?.email ? <button onClick={handlesignOut} className='btn bg-primary text-white'>LogOut</button> :
                            <Link className='btn bg-primary text-white' to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;