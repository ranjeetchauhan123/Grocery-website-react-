import React, { useState, useEffect } from 'react'
import { GoHeartFill } from 'react-icons/go'
import { HiShoppingBag } from 'react-icons/hi2'
import { IoSearch } from 'react-icons/io5'
import { TbMenu2 } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link"
import photo from '../../assets/photo.JPG'
import Users from '../User/Users'

import { useSelector } from 'react-redux'


function Navbar() {

    const [shadow, setShadow] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [showProfile, setShowProfile] = useState(false)

    const fevCount = useSelector((state) => state.favourite?.items?.length || 0);
    const cartCount = useSelector((state) => state.cart?.cartItems?.length || 0);



    useEffect(() => {
        const handleScroll = () => {
            setShadow(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
<header
  className={`fixed top-0 left-0 right-0 z-[999] bg-white
  ${shadow ? "shadow-md" : ""}`}
>
                <nav className="max-w-[1400px] mx-auto px-10 h-[13vh] flex justify-between items-center">

                    {/* logo */}
                    <HashLink smooth to='/#home' className="text-3xl font-bold">
                        Gr<span className="text-orange-500 uppercase">O</span>cify
                    </HashLink>


                    {/* Desktop Menus */}
                    <ul className="md:flex items-center gap-x-15 hidden">
                        <li><HashLink smooth to="/#home" className="font-semibold tracking-wider text-orange-500">Home</HashLink></li>
                        <li><HashLink smooth to="/#categories" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Categories</HashLink></li>
                        <li><HashLink smooth to="/#products" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Products</HashLink></li>
                        <li><HashLink smooth to="/#process" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</HashLink></li>
                    </ul>

                    {/* Desktop Search */}
                    <div className='hidden md:flex border-2 border-orange-500 rounded-full'>
                        <input type="text" placeholder='search....'
                            className='flex-1 h-[6vh] px-3 focus:outline-none' />

                        <button className='bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full m-0.5'>
                            <IoSearch />
                        </button>
                    </div>

                    {/* icons */}
                    <div className='flex items-center gap-x-3 md:gap-x-5'>

                        <Link to={'/Fevrate'}
                            className='text-zinc-800 text-2xl relative '>
                            <GoHeartFill className='text-gray-400'/>
                            {fevCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs
                                w-5 h-5 rounded-full flex items-center justify-center">
                                    {fevCount}
                                </span>
                            )}
                        </Link>

                        <Link to={'/addCard'}
                            className='text-zinc-800 text-2xl relative'>
                            <HiShoppingBag className='text-gray-400'/>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs
                                w-5 h-5 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                            </Link>

                        {/* profile */}
                        <div className='w-9 h-9 cursor-pointer'>
                            <img src={photo} alt="user"
                                onClick={() => setShowProfile(!showProfile)}
                                className='w-9 h-9 rounded-full border border-orange-500 object-cover' />
                        </div>
                        <Users profile={showProfile} />

                        {/* Mobile Menu Button */}
                        <button
                            className='text-zinc-800 text-2xl md:hidden'
                            onClick={() => setOpenMenu(!openMenu)}>
                            <TbMenu2 />
                        </button>
                    </div>
                </nav>

                {/* ---------- MOBILE SLIDE MENU ---------- */}
                <div
                    className={`fixed top-20 left-0 w-[65%] h-[60%] rounded-2xl
                     bg-orange-300/50 backdrop-blur-lg shadow-xl p-6 z-50
                        transform transition-transform duration-300
                         ${openMenu ? "translate-x-20" : "-translate-x-full"}`}>

                    {/* Close Button */}
                    <button
                        onClick={() => setOpenMenu(false)}
                        className="text-3xl absolute top-5 right-5 text-orange-800"> ✕ </button>

                    <div className="mt-16 space-y-6">
                        {/* Mobile Search */}
                        <div className='flex border-2 border-orange-500 rounded-full'>
                            <input
                                type="text"
                                placeholder='search....'
                                className='flex-1 h-[5vh] w-20 px-3 focus:outline-none'
                            />

                            <button className='bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full m-0.5'>
                                <IoSearch />
                            </button>
                        </div>

                        {/* Mobile Menus */}
                        <HashLink smooth to="/#home" className="block font-semibold text-orange-500 cursor-pointer ">Home</HashLink>
                        <HashLink smooth to="/#categories" className="block font-semibold text-zinc-800 hover:text-orange-600  cursor-pointer">Categories</HashLink>
                        <HashLink smooth to="/#products" className="block font-semibold text-zinc-800 hover:text-orange-600  cursor-pointer">Products</HashLink>
                        <HashLink smooth to="/#process" className="block font-semibold text-zinc-800 hover:text-orange-600  cursor-pointer">Process</HashLink>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Navbar
