import React, { useState , useEffect} from 'react'
import { GoHeartFill } from 'react-icons/go'
import { HiShoppingBag } from 'react-icons/hi2'
import { IoSearch } from 'react-icons/io5'
import { TbMenu2 } from 'react-icons/tb'
import {Link, NavLink} from 'react-router-dom'
import photo from '../../assets/photo.jpg'


function Navbar() {
    
    const [shadow, setShadow] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    

    useEffect(() => {
        const handleScroll = () => {
            setShadow(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${shadow ? 'drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]':'' }`}>
                <nav className="max-w-[1400px] mx-auto px-10 h-[13vh] flex justify-between items-center">

                    {/* logo */}
                    <Link to='/' className="text-3xl font-bold">
                        Gr<span className="text-orange-500 uppercase">O</span>cify                        
                    </Link>
                    

                    {/* Desktop Menus */}
                    <ul className="md:flex items-center gap-x-15 hidden">
                        <li><NavLink to="/" className="font-semibold tracking-wider text-orange-500">Home</NavLink></li>
                        <li><a href="" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About Us</a></li>
                        <li><a href="" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</a></li>
                        <li><a href="" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact Us</a></li>
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
                    <div className='flex items-center gap-x-5'>
                        <a href="" className='text-zinc-800 text-2xl'><GoHeartFill /></a>
                        <a href="" className='text-zinc-800 text-2xl'><HiShoppingBag /></a>

                        <button className='w-9 h-9'>
                            <img src={photo} alt="user" className='w-9 h-9 rounded-full border border-orange-500 object-cover'/>
                        </button>
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
                         ${openMenu ? "translate-x-23" : "-translate-x-full"}`}>

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
                                className='flex-1 h-[6vh] px-3 focus:outline-none'
                            />

                            <button className='bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full m-0.5'>
                                <IoSearch />
                            </button>
                        </div>

                        {/* Mobile Menus */}
                        <a href="" className="block font-semibold text-orange-500 cursor-pointer ">Home</a>
                        <a href="" className="block font-semibold text-zinc-800 hover:text-orange-600  cursor-pointer">About Us</a>
                        <a href="" className="block font-semibold text-zinc-800 hover:text-orange-600  cursor-pointer">Process</a>
                        <a href="" className="block font-semibold text-zinc-800 hover:text-orange-600  cursor-pointer">Contact Us</a>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Navbar
