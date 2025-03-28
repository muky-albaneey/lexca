import Cart from '@/components/cart/Cart'
import RelatedProducts from '@/components/product/RelatedPro'
import React from 'react'

export default function cartPage() {
  return (
    <div>
      <Cart />
      <RelatedProducts headingText = {`You might also like`} isLeft={`Related Products`} isRight= {false} />

    </div>
  )
}
