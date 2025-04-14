import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaEye, FaShoppingCart } from 'react-icons/fa';

const kaftan = [
    {
        id: 1,
        name: "Line Art Hand-painted Kaftan",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-3.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-4.webp',
      },
    {
        id: 1,
        name: "Line Art Jalabiya and Cap Set",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-3.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-4.webp',
      },
    {
        id: 1,
        name: "Line Art Jalabiya and Cap Set",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-3.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-4.webp',
      },
    {
        id: 1,
        name: "Line Art Jalabiya and Cap Set",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-3.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-4.webp',
      },
    {
        id: 1,
        name: "Line Art Jalabiya and Cap Set",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-3.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-4.webp',
      },
    {
        id: 1,
        name: "Line Art Jalabiya and Cap Set",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-3.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-4.webp',
      },
    {
        id: 1,
        name: "Line Art Jalabiya and Cap Set",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-3.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-4.webp',
      },
    {
        id: 1,
        name: "Line Art Jalabiya and Cap Set",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-3.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-4.webp',
      },
    {
        id: 1,
        name: "Line Art Jalabiya and Cap Set",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-3.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-4.webp',
      },
    {
        id: 1,
        name: "Line Art Jalabiya and Cap Set",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-3.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-4.webp',
      },
    {
        id: 1,
        name: "Line Art Jalabiya and Cap Set",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-3.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-4.webp',
      },
    {
        id: 1,
        name: "Line Art Jalabiya and Cap Set",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-3.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-4.webp',
      },
]
const Kaftan = () => {
  return (
    <div  className='bg-black mt-23 z-10 pt-10'>
      <div className='space-y-7'>
        <h1 className='text-white text-5xl text-center '>Kaftan</h1>
        <div className='flex items-center justify-center gap-5'>
          <Link to={'/'} className='text-white'>Home</Link> <FaChevronRight className='text-white w-2' /> <span className='text-white'>Kaftan</span>
        </div>
      </div>
    </div>
  )
}

export default Kaftan
