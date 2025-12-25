import React from 'react'

const Headings = (props) => {
  return (
    <div className='mx-auto w-fit'>
                <h2 className='text-zinc-800 md:text-5xl text-[2.5rem] font-bold'><span className='text-orange-500'>{props.highlight} </span>{props.heading}</h2>
                <div className='w-34 h-1 bg-orange-400 md:mt-3 mt-3 ml-auto'></div>
    </div>
  )
}

export default Headings