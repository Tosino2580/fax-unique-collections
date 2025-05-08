import React from 'react'
import Section from '../Section'
import Arrival from '../Arrival'
import ProductList from '../ProductList'
import Button from '../../Button'
import Story from '../Story'
import CategoryCarousel from '../CategoryCarousel'

const Home = () => {
  return (
    <div className='overflow-hidden font-["Crimson+Pro"]'>
     <Section/>
     <Arrival/>
     <ProductList/>
     <Button/>
     <Story/>
     <CategoryCarousel/>
     
    </div>
  )
}

export default Home
