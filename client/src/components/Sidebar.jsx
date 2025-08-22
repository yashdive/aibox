import { useClerk, useUser } from '@clerk/clerk-react'
import { Eraser, FileText, Hash, House, Image, Scissors, Square, SquarePen, User, Users } from 'lucide-react'
import React, { use } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
    {to: '/ai', label: 'Dashboard', Icon: House},
    {to: '/ai/write-article', label: 'Write Article', Icon: SquarePen},
    {to: '/ai/generate-images', label: 'Generate Images', Icon: Image},
    {to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser},
    {to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors},
    {to: '/ai/review-resume', label: 'Review Resume', Icon: FileText},
    {to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash},
    {to: '/ai/community', label: 'Community', Icon: Users},
]

const Sidebar = ({ sidebar, setSidebar }) => {

    const {user} = useUser()
    const { signOut, openUserProfile } = useClerk()

  return (
    <div className={`w-60 bg-white border-r border-gray-200 flex
    flex-col justify-between items-center max-sm:absolute top-14
    bottom-0 ${sidebar ? 'translate-x-0' : 
    'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>
        <div className='my-7 w-full'>
            <img src={user.imageUrl} alt='' className='w-13 rounded-full 
            mx-auto'/>
            <h1 className='text-center mt-1'>{user.fullName}</h1>
            <div>
                {navItems.map(({to, label, Icon}) => (
                    <NavLink key={to} to={to} end={to === '/ai'} onClick={() => setSidebar(false)}
                    className={({isActive})=> `px-3.5 py-2.5 flex items-center gap-2 rounded 
                    ${isActive ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white' : ''}`}>
                        {
                            ({isActive}) => (
                                <>
                                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' :''}`}/>
                                    {label}
                                </>
                            )
                        }
                        

                    </NavLink>

                )

                )}
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
