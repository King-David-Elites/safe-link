import React from 'react'

interface Subscription{
    type: string;
    amount: string;
    duration: string;
    offers: string[];
}

interface SubscriptionCardProps {
    subscriptions: Subscription | Subscription[]
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({subscriptions}) => {
    const subscriptionArray = Array.isArray(subscriptions) ? subscriptions : [subscriptions];

  return (
    <div>
        
            {subscriptionArray.map((sub, idx) => (
                <div className='bg-white drop-shadow-lg drop-shadow-[#00000026] rounded-xl p-5 shadow-lg shadow-[#00000026] mb-5 h-fit' key={idx}>
                    <div className='flex items-center gap-3'>
                        <img src={'/ellipse.svg'} alt="" />
                        <h2 className='text-[#170F49] leading-[35px] font-bold capitalize'>{sub.type}</h2>
                    </div>
                    <div>
                        <p className='py-2 mt-2'><span className='text-[#170F49] font-bold leading-[30px] text-[32px]'>{sub.amount}</span> /{sub.duration}</p>
                        <small className='text-[#170F49] font-bold leading-[20px] my-3 pb-3'>What's included</small>
                    </div>
                    <div className='flex flex-col gap-3'>
                        {sub.offers.map((offer, idx) => (
                            <div className='flex items-center gap-2' key={idx}>
                                <img src={'check.svg'} alt="" />
                                <small className='text-[#170F49] text-[11px]'>{offer}</small>
                                </div>
                        ))}
                    </div>
                    <div>
                        <button className='bg-[#F2BE5C] w-full py-4 px-5 rounded-full my-3 text-white capitalize text-[12px] leading-5 text-center font-bold cursor-pointer'>get started</button>
                    </div>
                </div>
            
        ))}
    </div>
  )
}

export default SubscriptionCard