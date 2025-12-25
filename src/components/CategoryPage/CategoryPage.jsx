import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'

const CategoryPage = ({title, bgImage, categories=[]}) => {

  let filteredItems = categories.includes('All') ? ProductList
  : ProductList.filter(item => categories.includes(item.category))

    const renderProducts = filteredItems.map((product) =>{
        return(
            <div>
              <Cards images={product.image} name={product.name}price={product.price}/>
            </div>
        )
    })
    
  return (
    <div>
        <Banner bannerTitle={title} bgImages={bgImage}/>
        <div className='grid grid-col-1 md:grid-cols-4 gap-4 py-20  max-w-[1400px] mx-auto px-10'>
          {renderProducts}
        </div>
    </div>
  )
}

export default CategoryPage