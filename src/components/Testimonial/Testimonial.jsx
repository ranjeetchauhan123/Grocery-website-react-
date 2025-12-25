import React, { useState } from "react";
import Headings from "../Headings/Headings";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {


  return (
    <section>
      <div className="max-w-[1400px] px-5 md:px-10 mx-auto py-20">
        <Headings highlight="Customers" heading="Saying" />

        {/* arrows */}
        <div className="flex justify-end py-6 gap-3">
          <button className="prev-btn text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100
            hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white">
            <IoIosArrowBack />
          </button>

          <button className="next-btn text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100
            hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white">
            <IoIosArrowForward />
          </button>
        </div>

        {/* cards */}
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ">

            <Swiper
              modules={[Navigation]}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              slidesPerGroup={1}
              navigation={{
                prevEl: '.prev-btn',
                nextEl: '.next-btn',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper">

              {testimonials.map((item, i) => (
                <SwiperSlide key={i} className="px-3">
                  <div className="bg-zinc-100 p-6 h-60 rounded-xl">
                    <div className="flex items-center gap-4">
                      <img src={item.img} alt="" className="w-14 h-14 rounded-full object-cover border border-orange-500" />
                      <div>
                        <h4 className="font-bold text-zinc-800">
                          {item.name}
                        </h4>
                        <span className="text-sm text-zinc-500 ">
                          {item.role}
                        </span>
                        <div className="flex gap-2 text-orange-400 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-zinc-600 mt-5 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;




const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Food Blogger",
    desc:
      "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    img: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    role: "Chef",
    desc:
      "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    img: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    role: "Model",
    desc:
      "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
    img: Customer3,
  },
  {
    id: 4,
    name: "Rahul Mehta",
    role: "Fitness Trainer",
    desc:
      "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    img: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    role: "Nutritionist",
    desc:
      "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    img: Customer5,
  },
];
