import React from 'react'
import ShowRoom from '/src/assets/images/trax_showroom.webp'
const Story = () => {
    return (
        <div className='px-10 py-10 space-y-8'>
            <div className='text-center py-10'>
                <h1 className='text-white text-4xl font-bold'>Our Story</h1>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-5'>
                <div className='md:w-1/2 space-y-6'>
                    <h1 className='text-white  text-4xl font-semibold'>Afro Fashion: Fax Apparel's Passionate Quest to Unravel Africa's Soul</h1>
                    <p className='text-white/50'>Our journey begins in the bustling city of Lagos, where the soul of Afro fashion pulses through the vibrant patterns and colors. It's a place where artisans with paintbrushes in hand, transform garments into canvases that share stories of resilience, pride, and a deep-rooted connection to the continent.</p>
                </div>
                <div>
                    <img src={ShowRoom} alt="" className='rounded-lg' />
                </div>
            </div>
        </div>
    )
}

export default Story
