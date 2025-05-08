import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { KaftanData } from '../productData/KaftanData';
import { Link } from 'react-router-dom';

function KaftanDetails() {
  const { id } = useParams();
  const product = KaftanData.find(item => item.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="text-white p-10">Product not found</div>;

  const images = [product.image, product.hoverImage];

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="bg-black text-white min-h-screen py-10 px-4 md:px-10 font-[Raleway]">
      <div className='flex items-center justify-center gap-2 md:gap-5 mt-23'>
          <Link to={'/'} className=' text-sm md:text-lg text-white'>Home</Link> <FaChevronRight className='text-white w-2' /> <span className='text-white text-sm md:text-lg'><Link to={'/jalabiya'}>Kaftan</Link></span><FaChevronRight className='text-white w-2' /> <span className='text-sm'>{product.name}</span>
        </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-23">
        {/* Left Section - Image Thumbnails + Main Image */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumb ${idx}`}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-20 h-24 rounded-lg hidden md:block cursor-pointer border-2 ${
                  currentImageIndex === idx ? 'border-yellow-400' : 'border-transparent'
                }`}
              />
            ))}
          </div>

          <div className="relative w-[400px] h-[500px] md:h-[700px] ">
            <img
              src={images[currentImageIndex]}
              alt="Main Product"
              className="mr- md:mr-0w-full h-full object-cover rounded-xl"
            />
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="flex-1 space-y-6">
          <h2 className=" ml-5 md:ml-0 text-3xl font-bold">{product.name}</h2>

          {/* Stock Status */}
          <p className="text-white- font-semibold">Only {product.inStock} item(s) left in stock!</p>
          <div className='flex '>
            <div className="bg-red-600 h-1 w-20 rounded-full absolute"></div>
            <div className="bg-white h-1 w-75 md:w-90 rounded-full relative left-10"></div>
          </div>
          

          {/* Price */}
          <div className="text-2xl font-bold text-yellow-400">
            ₦{product.price.toLocaleString('en-NG')}
            <span className="line-through ml-3 text-gray-400 text-lg">
              ₦{product.oldPrice.toLocaleString('en-NG')}
            </span>
          </div>

          {/* Size Selection */}
          <div>
            <p className="mb-2 font-semibold">Select a Size: <span className="text-yellow-400">{selectedSize}</span></p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded transition ${
                    selectedSize === size
                      ? 'bg-yellow-500 text-black font-bold'
                      : 'border-white text-white hover:bg-white hover:text-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mt-4">
            <p className="font-semibold">Quantity:</p>
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="w-10 h-10 bg-gray-800 rounded text-xl cursor-pointer"
            >
              −
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="w-10 h-10 bg-gray-800 rounded text-xl cursor-pointer"
            >
              +
            </button>
          </div>

          <button className="w-full md:w-1/2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-xl mt-6 cursor-pointer">
            Add to Cart
          </button>

         
        </div>
      </div>
      
    </div>
  );
}

export default KaftanDetails;
