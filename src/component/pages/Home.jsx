import React from 'react'
import Section from '../Section'
import Arrival from '../Arrival'
import ProductList from '../ProductList'
import Button from '../../Button'
import Story from '../Story'
import CategoryCarousel from '../CategoryCarousel'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
     <Section/>
     <Arrival/>
     <ProductList/>
     <Button/>
     <Story/>
     <CategoryCarousel/>
     <Footer/>
    </div>
  )
}

export default Home
