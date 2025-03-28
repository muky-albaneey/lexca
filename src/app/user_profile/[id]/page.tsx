import SellerHead from '@/components/user_profile/SellerHead'
import SellerStorefront from '@/components/user_profile/SellerStorefront'
import React from 'react'

export default function User_profile() {
  return (
    <div className='py-2'>
        <SellerHead />
        <div className='mt-10'>
     <SellerStorefront />
   </div>
    </div>
  )
}
