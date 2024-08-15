'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import SubscriptionCard from '@/components/SubscriptionCard';

const page = () => {
  const router = useRouter()

  const SubscriptionList = [
    {
        type: 'basic',
        amount: 'N2,000',
        duration: 'monthly',
        offers: [
            'Unlimited Listings',
            '1 MONTH SUBSCRIPTION',
            'Occasional Feature on the homepage',
            'Occasional Feature on the Safelink social media platforms'
        ]
    },
    {
        type: '3 months plan',
        amount: 'N5,500',
        duration: '3 months',
        offers: [
            'Unlimited Listings',
            '1 MONTH SUBSCRIPTION',
            'Occasional Feature on the homepage',
            'Occasional Feature on the Safelink social media platforms'
        ]
    },
    {
        type: '6 months plan',
        amount: 'N10,000',
        duration: '6 months',
        offers: [
            'Unlimited Listings',
            '6 MONTH SUBSCRIPTION',
            'Occasional Feature on the homepage',
            'Occasional Feature on the Safelink social media platforms'
        ]
    },
    {
        type: '12 months plan',
        amount: 'N18,000',
        duration: '12 months',
        offers: [
            'Unlimited Listings',
            '12 MONTH SUBSCRIPTION',
            'Occasional Feature on the homepage',
            'Occasional Feature on the Safelink social media platforms'
        ]
    }
]
  return (
    <section className='px-5 py-10'>
          <div className="flex items-start justify-between mb-5">
        <button
          className="p-2 -mt-5"
          onClick={() => {
            router.back();
          }}
        >
          <FaArrowLeft size={20} />
        </button>
        <div className="flex-1 text-center">
          <h1 className="font-semibold text-[#252625] text-[20px] leading-7">
          Prices
          </h1>
          <p className="text-[#252625] leading-4 text-[10px]">
          by showcasing your exclusive listings to our highly-esteemed users
          </p>
        </div>
      </div>

      <div>
        {
          SubscriptionList.map((subscription, idx) => (
            <SubscriptionCard key={idx} subscriptions={subscription} />
          ))
        }
        {/* <SubscriptionCard subscriptions={SubscriptionList} /> */}
      </div>
    </section>
  )
}

export default page