import React from 'react'

import CategoryPage from '../CategoryPage/CategoryPage'
import bgFruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <section>
      <div>
        <CategoryPage title="Fruits & Veggies" bgImage={bgFruits} categories={['Fruits','Vegitables']}/>
      </div>
    </section>
  )
}

export default Fruits