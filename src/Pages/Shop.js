import React from 'react'
import Herosection from '../Components/Herosection/Herosection'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
      <Herosection/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
     
    </div>
  )
}

export default Shop
