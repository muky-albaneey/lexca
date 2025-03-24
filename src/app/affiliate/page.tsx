import AffiliateApplicationForm from '@/components/affiliate/AffiliateForm'
import AffiliateProgram from '@/components/affiliate/AffiliateProgram'
import AffiliateProgram_2 from '@/components/affiliate/AffiliateProgram_2'
import FAQ from '@/components/affiliate/FAQ'
import HowItWorks from '@/components/affiliate/HowItWorks'
import React from 'react'

export default function Affiliate_page() {
  return (
    <div>
      <AffiliateProgram />
      <HowItWorks />
      <AffiliateProgram_2 />
      <AffiliateApplicationForm />
      <FAQ />
    </div>
  )
}
