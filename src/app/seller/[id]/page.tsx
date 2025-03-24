import SellersPage from '@/components/seller/SellersPage'
import TrustedSellers from '@/components/seller/TrustedSellers'
import React from 'react'

export default function SellersPageHome() {
  return (
    <div>
      <TrustedSellers />
      <SellersPage />
    </div>
  )
}
