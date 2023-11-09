'use client'

import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar'
import { useCallback, useState } from 'react'
import MenuItem from './MenuItem'
import React from 'react'
import userRegisterModal from '@/app/hooks/userRegisterModal'
import LoginModal from '../modals/LoginModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import { signOut } from 'next-auth/react'
import { SafeUser } from '@/app/types'
import useRentModal from '@/app/hooks/useRentModal'


interface UserMenuProps {
   currentUser?: SafeUser | null
}


const UserMenu:React.FC<UserMenuProps> = ({currentUser}) => {
  const registerModal = userRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen,setIsOpen] = useState(false);
  
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(()=>{
      if(!currentUser){
        return loginModal.onOpen();
      }
    rentModal.onOpen();

  },[currentUser,loginModal,rentModal]);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div 
         className='hidden 
          md:block
          text-sm 
          font-semibold
          py-3 px-4
          rounded-full
          hover: bg-slate-900
          transition
          cursor-pointer
          '
        onClick={onRent}>
          Airbnb your home
        </div>
         <div 
          onClick={toggleOpen}
          className='p-4 
          md:py-1 
          border-[1px]
          md:px-2 border-neutral-800
          flex flex-row items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
          '
         >
          <AiOutlineMenu/>
          <div className='hidden md:block'>
             <Avatar src={currentUser?.image}/>
          </div>
         </div>
      </div>
       {
         isOpen && (
            <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-slate-800 overflow-hidden right-0 top-12 text-sm'>
               <div className='flex flex-col cursor-pointer'>
                {currentUser ? (
                    <>
                    <MenuItem
                     onClick={loginModal.onOpen}
                     label='My Trips'
                    />
                    <MenuItem
                     onClick={registerModal.onOpen}
                     label='My Favorites'
                    />
                    <MenuItem
                     onClick={registerModal.onOpen}
                     label='My Reservations'
                    />
                    <MenuItem
                     onClick={registerModal.onOpen}
                     label='My Properties'
                    />
                    <MenuItem
                     onClick={rentModal.onOpen}
                     label='Fincas Sopetran'
                    />
                    <hr/>
                    <MenuItem
                     onClick={()=> signOut()}
                     label='LogOut'
                    />
                  </>
                ):(

                  <>
                    <MenuItem
                     onClick={loginModal.onOpen}
                     label='Login'
                     />
                    <MenuItem
                     onClick={registerModal.onOpen}
                     label='Sign Up'
                     />
                  </>
               )}
               </div>
               </div>
         )
       }
    </div>
  )
}

export default UserMenu