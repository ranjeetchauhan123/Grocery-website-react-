import React from 'react'

const Banner = ({bannerTitle, bgImages}) => {
  return (
    <div className='h-[50vh] mt-25 flex justify-center items-center  bg-center bg-cover relative'
    style={{backgroundImage:`url(${bgImages})`}}>
        <h2 className='text-5xl text-zinc-800 bg-white gap-5 p-5 rounded-xl font-bold z-10'>{bannerTitle}</h2>
        <div className='bg-black/50 absolute not-first:inset-0'></div>
    </div>
  )
}

export default Banner