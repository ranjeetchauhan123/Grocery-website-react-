import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeaFood from '../../assets/seafood-banner.jpg'

const Seafood = () => {
  return (
    <div>
      <CategoryPage title="SeaFood" bgImage={BgSeaFood} categories={['Meat', 'SeaFood']}/>
    </div>
  )
}

export default Seafood