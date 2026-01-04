import React from 'react'
import Headings from '../Headings/Headings'
import FruitsCat from '../../assets/Fruits-and-Veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import { Link } from "react-router-dom";

const Category = () => {

  const renderCards = category.map(card => {
    return (
      <div key={card.id} id='categories'
        className="flex-1 rounded-xl hover:shadow-xl transition-shadow duration-300 mt-20">
        {/* Image */}
        <div className="w-full min-h-[25vh] md:min-h-[30vh] relative -mb-10 flex justify-center">
          <img src={card.image} alt={card.title}
            className="absolute bottom-0" />
        </div>

        {/* Content */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-3xl font-bold text-zinc-800 mb-2">
            {card.title}
          </h3>

          <p className="text-zinc-600 mb-9 mt-3">
            {card.description}
          </p>

          <Link
            to={card.path}
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-5 py-1
              rounded-lg text-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer">
            See All
          </Link>

        </div>
      </div>
    )
  })

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Headings highlight="Shop" heading="by Category" />

        {/* Category Cards Grid */}
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderCards}
        </div>
      </div>
    </section>
  )
}

export default Category

const category = [
  {
    id: 1,
    title: 'Fruits & Veggies',
    description:
      'Fresh, organic product sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetable.',
    image: FruitsCat,
    path: '/fruits'
  },
  {
    id: 2,
    title: 'Dairy & Eggs',
    description:
      'Wholesome dairy products and free range eggs. From creamy milk and yogurt to artisanal cheeses.',
    image: DairyCat,
    path: '/dairy'
  },
  {
    id: 3,
    title: 'Meat & SeaFood',
    description:
      'High quality, responsibly sourced meat and seafood. Choose fresh cuts, marinated options and more.',
    image: SeaFoodCat,
    path: '/seaFood'
  },
]
