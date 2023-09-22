import React from 'react'

const FlexAlignItems = () => {
  return (
    <div>
        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center'>className="flex justify-between items-start"</p>
        <div className='flex justify-between items-start'>
            <div className='bg-red-300 p-6'>Item 1</div>
            <div className='bg-green-300 p-6 text-6xl'>Item 2</div>
            <div className='bg-blue-300 p-6'>Item 3</div>
            <div className='bg-yellow-300 p-6'>Item 4</div>
        </div>
        
        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center mt-2'>className="flex justify-between items-end"</p>
        <div className='flex justify-between items-end'>
            <div className='bg-red-300 p-6'>Item 1</div>
            <div className='bg-green-300 p-6 text-6xl'>Item 2</div>
            <div className='bg-blue-300 p-6'>Item 3</div>
            <div className='bg-yellow-300 p-6'>Item 4</div>
        </div>
        
        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center mt-2'>className="flex justify-between items-center"</p>
        <div className='flex justify-between items-center'>
            <div className='bg-red-300 p-6'>Item 1</div>
            <div className='bg-green-300 p-6 text-6xl'>Item 2</div>
            <div className='bg-blue-300 p-6'>Item 3</div>
            <div className='bg-yellow-300 p-6'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center mt-2'>className="flex justify-between items-baseline"</p>
        <div className='flex justify-between items-baseline'>
            <div className='p-6'>Item 1 Lorem Ipsum Lorem Imsum</div>
            <div className='p-6 text-6xl'>Item 2</div>
            <div className='bg-blue-300 p-6'>Item 3</div>
            <div className='bg-yellow-300 p-6'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center mt-2'>className="flex justify-between items-stretch"</p>
        <div className='flex justify-between items-stretch'>
            <div className='bg-red-300 p-6'>Item 1</div>
            <div className='bg-green-300 p-6 text-6xl'>Item 2</div>
            <div className='bg-blue-300 p-6'>Item 3</div>
            <div className='bg-yellow-300 p-6'>Item 4</div>
        </div>
    </div>
  )
}

export default FlexAlignItems;