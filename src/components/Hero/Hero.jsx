import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

function Hero() {
    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-10 flex flex-col-reverse md:flex-row items-center pt-25 min-h-screen">

                {/* Left Content */}
                <div className='flex-1 text-center md:text-left mt-10 md:mt-0'>
                    <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>
                        Export Best Quality...
                    </span>

                    <h1 className='text-4xl md:text-6xl leading-tight font-bold mt-4'>
                        Taste Organic <br />
                        <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Vaggies</span> <br />
                        In your City
                    </h1>

                    <p className='text-zinc-600 text-lg max-w-[530px] mt-5 mb-10 mx-auto md:mx-0'>
                        Bred for a High Content of beneficial substance.
                        Our Products are all Fresh and healthy.
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <Button content="Shop now" />
                    </div>
                </div>

                {/* Right Image */}
                <div className='flex-1 flex justify-center md:justify-end'>
                    <img src={Grocery} alt="Image" className='w-[80%] md:w-full' />
                </div>

            </div>
        </section>
    )
}

export default Hero
