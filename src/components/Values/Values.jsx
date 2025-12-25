import React from 'react'
import Headings from '../Headings/Headings'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {
  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-5'>
        <Headings highlight="Our" heading="Values" />

        <div className='mt-20 grid grid-cols-1 lg:grid-cols-3 items-center gap-14'>

          {/* LEFT VALUES */}
          <div className='space-y-16'>
            {Value.slice(0, 2).map(item => (
              <div
                key={item.id}
                className='flex items-start gap-5 lg:flex-row-reverse lg:text-right'
              >
                <div className='w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white text-xl shrink-0'>
                  {item.icon}
                </div>

                <div>
                  <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                  <p className='text-zinc-600 max-w-xs'>
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className='flex justify-center'>
            <img
              src={Basket}
              alt="Basket"
              className='w-[260px] md:w-[320px]'
            />
          </div>

          {/* RIGHT VALUES */}
          <div className='space-y-16'>
            {Value.slice(2, 4).map(item => (
              <div
                key={item.id}
                className='flex items-start gap-5'
              >
                <div className='w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white text-xl shrink-0'>
                  {item.icon}
                </div>

                <div>
                  <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                  <p className='text-zinc-600 max-w-xs'>
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Values

const Value = [
  {
    id: 1,
    title: 'Trust',
    para: 'It is long Stablished fact that a render will be distracted by the readable',
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: 'Always Fresh',
    para: 'It is a long established fact that a reader will be distracted by the readable.',
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: 'Food Safety',
    para: 'It is long Stablished fact that a render will be distracted by the readable',
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: '100% Organic',
    para: 'It is long Stablished fact that a render will be distracted by the readable',
    icon: <FaSeedling />,
  },
]
