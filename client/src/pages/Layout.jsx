import { Menu, X } from 'lucide-react';
import React, { use, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import Sidebar from '../components/sidebar';
import { SignIn,useUser } from '@clerk/clerk-react';


const Layout = () => {

  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const {user} = useUser();


  return user ? (
    <div className='flex flex-col items-start justify-start h-screen'>
      <nav className='w-full px-8 min-h-14 flex items-center justify-between bg-white shadow-md
      border-b border-gray-200'>
        <img src={assets.brandlogo} alt='Logo' onClick={() => {navigate('/')}} />
        {
          sidebar ? <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden'/>
          : <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden'/>
        }
      </nav>
      <div className='flex-1 w-full flex h-[calc(100vh-564px)]'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className='flex-1 bg-[#f4F7FB]'>
              <Outlet />

        </div>
      </div>
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  )
}

export default Layout
