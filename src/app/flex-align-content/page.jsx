import React from 'react'

const FlexAlignContent = () => {
  return (
    <div>
        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center'>className="flex justify-between items-start content-center"</p>
        <div className='bg-gray-300 mt-12 h-72 flex flex-wrap justify-between items-center content-center'>
            <div className='bg-red-300 p-6'>Item 1</div>
            <div className='bg-green-300 p-6 text-6xl'>Item 2</div>
            <div className='bg-blue-300 p-6'>Item 3</div>
            <div className='bg-yellow-300 p-6'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center'>className="flex justify-between items-start content-start"</p>
        <div className='bg-gray-300 mt-12 h-72 flex flex-wrap justify-between items-center content-start'>
            <div className='bg-red-300 p-6'>Item 1</div>
            <div className='bg-green-300 p-6 text-6xl'>Item 2</div>
            <div className='bg-blue-300 p-6'>Item 3</div>
            <div className='bg-yellow-300 p-6'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center'>className="flex justify-between items-start content-end"</p>
        <div className='bg-gray-300 mt-12 h-72 flex flex-wrap justify-between items-center content-end'>
            <div className='bg-red-300 p-6'>Item 1</div>
            <div className='bg-green-300 p-6 text-6xl'>Item 2</div>
            <div className='bg-blue-300 p-6'>Item 3</div>
            <div className='bg-yellow-300 p-6'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center'>className="flex justify-between items-start content-between"</p>
        <div className='bg-gray-300 mt-12 h-72 flex flex-wrap justify-between items-center content-between'>
            <div className='bg-red-300 p-6'>Item 1</div>
            <div className='bg-green-300 p-6 text-6xl'>Item 2</div>
            <div className='bg-blue-300 p-6'>Item 3</div>
            <div className='bg-yellow-300 p-6'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center'>className="flex justify-between items-start content-around"</p>
        <div className='bg-gray-300 mt-12 h-72 flex flex-wrap justify-between items-center content-around'>
            <div className='bg-red-300 p-6'>Item 1</div>
            <div className='bg-green-300 p-6 text-6xl'>Item 2</div>
            <div className='bg-blue-300 p-6'>Item 3</div>
            <div className='bg-yellow-300 p-6'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center'>className="flex justify-between items-start content-evenly"</p>
        <div className='bg-gray-300 mt-12 h-72 flex flex-wrap justify-between items-center content-evenly'>
            <div className='bg-red-300 p-6'>Item 1</div>
            <div className='bg-green-300 p-6 text-6xl'>Item 2</div>
            <div className='bg-blue-300 p-6'>Item 3</div>
            <div className='bg-yellow-300 p-6'>Item 4</div>
        </div>
    </div>
  )
}

export default FlexAlignContent;