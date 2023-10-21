import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    // const{user} = UseAuth(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li className='mr-3'>
            <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white text-lg font-semibold bg-rose-500 px-1 rounded" : "bg-slate-400 px-1 text-lg font-semibold text-white rounded"}>Home</NavLink>
        </li>
        <li className='mr-3'>
            <NavLink to='/add' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white text-lg font-semibold bg-rose-500 px-1 rounded" : "bg-slate-400 px-1 text-lg font-semibold text-white rounded"}>Add Product</NavLink>
        </li>
        <li className='mr-3'>
            <NavLink to='/mycart' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white text-lg font-semibold bg-rose-500 px-1 rounded" : "bg-slate-400 px-1 text-lg font-semibold text-white rounded"}>My Cart</NavLink>
        </li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {links}

                        </ul>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-rose-600'>RS BRAND SHOP</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {links}

                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <div className='mr-2 text-center'>
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-error">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                <p className='font-bold text-xs'>{user.email}</p>
                                <button onClick={handleSignOut} className='btn btn-error text-white'>sign Out</button>
                            </div>
                            
                            :
                            <Link to="/login"><button className="btn btn-error text-white">login</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;