import ProductPage from '@/components/product/Product_detail'
import RelatedProducts from '@/components/product/RelatedPro'
import React from 'react'

export default function Product_page() {
  return (
    <div className=' w-full flex flex-col items-center justify-center'>
      <ProductPage />
      <RelatedProducts />
    </div>
  )
}
