import React, { useState } from 'react'
import Headings from '../Headings/Headings'
import ProductsList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import { Link } from "react-router-dom";

const Products = () => {
    const categorys = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
    const [activeTab, setActiveTab] = useState('All')
    let filterdItems = activeTab === 'All'? ProductsList : ProductsList.filter(item =>item.category === activeTab)

    const renderCards = filterdItems.slice(0, 8).map(product => {
        return (
            <Cards images={product.image} name={product.name} price={product.price}  key={product.id}/>
        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-15'>
                <Headings highlight="Our" heading="Products" />

                {/* tabs */}
                <div className="flex gap-3 justify-center mt-10 flex-wrap sm:flex-nowrap overflow-x-auto px-2">
                    {categorys.map(category => (
                        <button key={category} onClick={() => setActiveTab(category)}
                            className={`px-4 sm:px-5 py-2 text-sm sm:text-lg rounded-lg cursor-pointer whitespace-nowrap
                                transition-all duration-300 ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white'
                                    : 'bg-zinc-100 md:hover:bg-zinc-200 hover:bg-zinc-200'}`} >
                            {category}
                        </button>
                    ))}
                </div>

                {/* produst Listing */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-20 '>
                    {renderCards}
                </div>
                <div className='mt-15 mx-auto w-fit'>
                    <Link
            to='/allProducts'
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-5 py-1
              rounded-lg text-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer">
            See All
          </Link>
                </div>
            </div>
        </section>
    )
}

export default Products