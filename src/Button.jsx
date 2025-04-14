import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div className='flex items-center justify-center p-5'>
      <Link to={'/collections'}>
              <button className='py-3 px-5 bg-yellow-400 cursor-pointer text-white text-xl font-semibold rounded-md transition-transform duration-300 hover:scale-110 capitalize'>Shop all products</button>
              </Link>
    </div>
  )
}

export default Button
