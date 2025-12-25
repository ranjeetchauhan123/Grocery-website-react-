import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

function Cards({ images, name, price }) {
    return (
        <div className='bg-whitw border p-4 sm:p-5 rounded-xl transition-all duration-300 ease-out hover:border-green-500 hover:-translate-y-2 
        hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] '>
            {/* Card Icons */}
            <div className='flex justify-between'>
                <span className='text-2xl sm:text-3xl text-zinc-300'>
                    <FaHeart />
                </span>
                <button className='bg-gradient-to-b from-orange-400 to-orange-500 
                text-white text-lg sm:text-xl px-3 py-2 rounded-lg'>
                    <FaPlus /></button>
            </div>
            {/* Card Image */}
            <div className="w-full h-40 sm:h-50">
                <img src={images} className='w-full h-full object-contain mx-auto' />
            </div>
            {/* Card Content */}
            <div className='text-center'>
                <h3 className='text-xl sm:text-2xl font-semibold'>
                    {name}
                </h3>
                <p className='text-xl sm:text-2xl font-bold mt-4 mb-3'>
                    ${price.toFixed(2)}
                </p>
                <Button content="Shop Now" />
            </div>
        </div>

    )
}

export default Cards