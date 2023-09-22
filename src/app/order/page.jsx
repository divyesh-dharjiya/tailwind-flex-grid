import React from 'react'

const Order = () => {
  return (
    <div className='text-center'>
        <p className='mb-3 text-xl bg-black text-white p-2 w-full'>className="order-1, 2, 3"</p>
        <div className='grid grd-cols-1 sm:grid-cols-3 gap-6 p-6'>
            <div className='h-36 order-3'>Basic</div>
            <div className='h-36 order-1'>Intermediate</div>
            <div className='h-36 order-2'>Advance</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full'>className="order-first, last"</p>
        <div className='grid grd-cols-1 sm:grid-cols-3 gap-6 p-6'>
            <div className='h-36 order-last'>Basic</div>
            <div className='h-36'>Intermediate</div>
            <div className='h-36 order-first'>Advance</div>
        </div>
    </div>
  )
}

export default Order;