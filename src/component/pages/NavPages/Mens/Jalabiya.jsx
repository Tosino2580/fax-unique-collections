import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import Footer from '../../../Footer';


const jalabiya = [
    {
        id: 1,
        name: "Noble Man Hand-painted Jalabiya",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-3.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-4.webp',
      },
    {
        id: 2,
        name: "Line Art Jalabiya and Cap Set",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/DSC05551-Edit.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-2.webp',
      },
    {
        id: 3,
        name: "Hand painted V-Neck Crepe Jalabiya",
        price: "₦318,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-5.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-6.webp',
      },
    {
        id: 4,
        name: "Line Art Jalabiya",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-7.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-8.webp',
      },
    {
        id: 5,
        name: "Map of Africa Hand Painted Jalabiya",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-9.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-9.webp',
      },
    {
        id: 6,
        name: "Male Hand-Painted Jalabiya",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-10.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-11.webp',
      },
    {
        id: 7,
        name: "Benin Head Hand-Painted Jalabiya",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-12.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-12.webp',
      },
    {
        id: 8,
        name: "Line Art White Jalabiya and Cap Set",
        price: "₦255,000.00 NGN",
        image: '/src/assets/images/MEN/Jalabiya/Jalabiya-13.webp',
        hoverImage: '/src/assets/images/MEN/Jalabiya/Jalabiya-14.webp',
      },
];

const JalabiyaData = ({product})=>{
     const [isHovered, setIsHovered] = useState(false);
    
      return (
          <div className='md:px-5'>
              <div
                  className="relative group w-90 md:w-84   rounded-lg  shadow-lg"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
              >
                 <motion.img
                      src={product.image}
                      alt={product.name}
                      className={`w-100  md:w-full h-120 md:h-120 object-cover transition-transform rounded-xl duration-300 `}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: isHovered ? 0 : 1,}}
                      transition={{ duration: 0.5, ease: "easeInOut",  }}
                  />
    
                  <motion.img
                      src={product.hoverImage}
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 1 }}
                      transition={{ duration: 0.9, ease: "easeInOut",   }}
                  />
    
                  <h3 className='text-sm font-semibold  text-white px-1 bg-red-400 rounded-xl w-13 text-center relative bottom-118 left-2'>NEW</h3>
    
                  <div
                      
                      className={`absolute inset-0 flex flex-col space-y-2  items-center justify-center space-x-4 transition-transform duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                          }`}
                  >
                      <button className="bg-white p-4 rounded-full cursor-pointer shadow-md hover:bg-gray-100 transition relative left-38 md:left-35 bottom-45">
                          <FaEye size={15} className="text-gray-800 " />
                      </button>
                      <button className="bg-white p-4 rounded-full cursor-pointer shadow-md hover:bg-gray-100 transition relative left-36 md:left-33 bottom-45">
                          <FaShoppingCart size={15} className="text-gray-800" />
                      </button>
                  </div>
              </div>
    
              <div className=" bg-black text-white">
                  <h3 className="font-semibold uppercase">{product.name}</h3>
                  <p className="text-yellow-400">{product.price}</p>
              </div>
          </div>
      )
}
const Jalabiya = () => {
  return (
    <div className='bg-black mt-23 z-10 pt-10'>
      <div className='space-y-7'>
        <h1 className='text-white text-5xl text-center '>Jalabiya</h1>
        <div className='flex items-center justify-center gap-5'>
          <Link to={'/'} className='text-white'>Home</Link> <FaChevronRight className='text-white w-2' /> <span className='text-white'>Jalabiya</span>
        </div>
      </div>

      <div className="grid grid-col md:grid-cols-4 gap-5 p-4 mt-25">
        {jalabiya.map((product)=>(
            <JalabiyaData key={product.id} product={product}/>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Jalabiya
