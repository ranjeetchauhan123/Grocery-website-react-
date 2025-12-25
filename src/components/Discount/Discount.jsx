import React from 'react'
import Button from '../Button/Button'
import FreshFruit from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section
  className="bg-zinc-100 bg-no-repeat bg-right bg-contain"
  style={{ backgroundImage: `url(${FreshFruit})` }}
>
  <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

      {/* 20% */}
      <span
        className="text-6xl md:text-9xl text-orange-500 font-bold 
        md:-rotate-90 md:self-center"
      >
        20%
      </span>

      {/* CONTENT */}
      <div className="max-w-[700px] text-center md:text-left">
        <h3 className="text-4xl md:text-7xl text-zinc-800 font-bold">
          First Order Discount!
        </h3>

        <p className="text-zinc-600 my-6">
          Enjoy an exclusive first discount on our grocery website! Shop fresh
          essentials and save big on your first purchase.
          Fast delivery and quality guaranteed.
        </p>

        {/* Button below paragraph */}
        <div className="mt-6">
          <Button content="Get a Discount" />
        </div>
      </div>

    </div>
  </div>
</section>

  )
}

export default Discount