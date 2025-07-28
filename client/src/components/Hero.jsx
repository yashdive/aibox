import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {

    const navigate = useNavigate()


  return (
    <div className='px-4 sm:px-20 relative inline-flex flex-col 
    w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat
    min-h-screen'>
        <div className='text-center mb-6'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl
             font-semibold mb-6 mx-auto leading-[1.2]'>Create amazing content <br/> with 
            <span className='text-primary'> AI tools</span></h1>
            <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto
            max-sm:text-xs text-gray-600'>Transform your content with our suite of preminum AI tools. 
            <br/>Write articles, generate images and enhance your workflow.</p>
        </div>
        <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
            <button onClick={() => navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg
            hover:scale-102 active:scale-95 transition cursor-pointer'>Start creating now</button>
            <button className='border bg-white border-primary text-primary px-10 py-3 rounded-lg
            hover:scale-102 active:scale-95 transition cursor-pointer'>Watch demo</button>

        </div>

        <div className='flex items-center gap-2 text-gray-600 mt-8 mx-auto'>
            <img src={assets.user_group} className='h-8'/> Trusted by 10k+ users
        </div>
       
    </div>

    
  )
}

export default Hero
