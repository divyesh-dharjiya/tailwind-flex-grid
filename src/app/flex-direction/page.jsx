import React from 'react'

const FlexDirection = () => {
  return (
    <div className=''>
        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center'>className="flex flex-row"</p>
        <div className='flex flex-row'>
            <div className='bg-red-300 p-3'>Item 1</div>
            <div className='bg-green-300 p-3'>Item 2</div>
            <div className='bg-blue-300 p-3'>Item 3</div>
            <div className='bg-yellow-300 p-3'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full mt-2 text-center'>className="flex flex-row-reverse"</p>
        <div className='flex flex-row-reverse'>
            <div className='bg-red-300 p-3'>Item 1</div>
            <div className='bg-green-300 p-3'>Item 2</div>
            <div className='bg-blue-300 p-3'>Item 3</div>
            <div className='bg-yellow-300 p-3'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full mt-2 text-center'>className="flex flex-col"</p>
        <div className='flex flex-col'>
            <div className='bg-red-300 p-3'>Item 1</div>
            <div className='bg-green-300 p-3'>Item 2</div>
            <div className='bg-blue-300 p-3'>Item 3</div>
            <div className='bg-yellow-300 p-3'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full mt-2 text-center'>className="flex flex-col-reverse"</p>
        <div className='flex flex-col-reverse'>
            <div className='bg-red-300 p-3'>Item 1</div>
            <div className='bg-green-300 p-3'>Item 2</div>
            <div className='bg-blue-300 p-3'>Item 3</div>
            <div className='bg-yellow-300 p-3'>Item 4</div>
        </div>
    </div>
  )
}

export default FlexDirection;