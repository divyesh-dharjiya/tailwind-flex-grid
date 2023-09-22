import React from 'react'

const FlexWrap = () => {
  return (
    <div className="">
      <p className='mb-3 text-xl bg-black text-white p-2 w-full mt-2 text-center'>className="flex flex-nowrap"</p>
        <div className='flex flex-nowrap'>
            <div className='bg-red-300 p-3'>Display One Item 1 long text long text</div>
            <div className='bg-green-300 p-3'>Display Two Item 2 long text long text</div>
            <div className='bg-blue-300 p-3'>Display Three Item 3 long text long text</div>
            <div className='bg-yellow-300 p-3'>Display Four Item 4 long text long text</div>
            <div className='bg-pink-300 p-3'>Display Three Item 3 long text long text</div>
            <div className='bg-violet-300 p-3'>Display Four Item 4 long text long text</div>
            <div className='bg-orange-300 p-3'>Display Three Item 3 long text long text</div>
            <div className='bg-stone-300 p-3'>Display Four Item 4 long text long text</div>
            <div className='bg-lime-300 p-3'>Display Three Item 3 long text long text</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full mt-2 text-center'>className="flex flex-wrap"</p>
        <div className='flex flex-wrap'>
            <div className='bg-red-300 p-3'>Display One Item 1 long text long text</div>
            <div className='bg-green-300 p-3'>Display Two Item 2 long text long text</div>
            <div className='bg-blue-300 p-3'>Display Three Item 3 long text long text</div>
            <div className='bg-yellow-300 p-3'>Display Four Item 4 long text long text</div>
            <div className='bg-pink-300 p-3'>Display Three Item 3 long text long text</div>
            <div className='bg-violet-300 p-3'>Display Four Item 4 long text long text</div>
            <div className='bg-orange-300 p-3'>Display Three Item 3 long text long text</div>
            <div className='bg-stone-300 p-3'>Display Four Item 4 long text long text</div>
            <div className='bg-lime-300 p-3'>Display Three Item 3 long text long text</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full mt-2 text-center'>className="flex flex-wrap-reverse"</p>
        <div className='flex flex-wrap-reverse'>
            <div className='bg-red-300 p-3'>Display One Item 1 long text long text</div>
            <div className='bg-green-300 p-3'>Display Two Item 2 long text long text</div>
            <div className='bg-blue-300 p-3'>Display Three Item 3 long text long text</div>
            <div className='bg-yellow-300 p-3'>Display Four Item 4 long text long text</div>
            <div className='bg-pink-300 p-3'>Display Three Item 3 long text long text</div>
            <div className='bg-violet-300 p-3'>Display Four Item 4 long text long text</div>
            <div className='bg-orange-300 p-3'>Display Three Item 3 long text long text</div>
            <div className='bg-stone-300 p-3'>Display Four Item 4 long text long text</div>
            <div className='bg-lime-300 p-3'>Display Three Item 3 long text long text</div>
        </div>
    </div>
  )
}

export default FlexWrap;