import React from 'react'

const FlexJustiFyContent = () => {
  return (
    <div>
        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center'>className="flex justify-normal"</p>
        <div className='flex justify-normal'>
            <div className='bg-red-300 p-3'>Item 1</div>
            <div className='bg-green-300 p-3'>Item 2</div>
            <div className='bg-blue-300 p-3'>Item 3</div>
            <div className='bg-yellow-300 p-3'>Item 4</div>
        </div>
        
        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center mt-2'>className="flex justify-start"</p>
        <div className='flex justify-start'>
            <div className='bg-red-300 p-3'>Item 1</div>
            <div className='bg-green-300 p-3'>Item 2</div>
            <div className='bg-blue-300 p-3'>Item 3</div>
            <div className='bg-yellow-300 p-3'>Item 4</div>
        </div>
        
        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center mt-2'>className="flex justify-end"</p>
        <div className='flex justify-end'>
            <div className='bg-red-300 p-3'>Item 1</div>
            <div className='bg-green-300 p-3'>Item 2</div>
            <div className='bg-blue-300 p-3'>Item 3</div>
            <div className='bg-yellow-300 p-3'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center mt-2'>className="flex justify-center"</p>
        <div className='flex justify-center'>
            <div className='bg-red-300 p-3'>Item 1</div>
            <div className='bg-green-300 p-3'>Item 2</div>
            <div className='bg-blue-300 p-3'>Item 3</div>
            <div className='bg-yellow-300 p-3'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center mt-2'>className="flex justify-between"</p>
        <div className='flex justify-between'>
            <div className='bg-red-300 p-3'>Item 1</div>
            <div className='bg-green-300 p-3'>Item 2</div>
            <div className='bg-blue-300 p-3'>Item 3</div>
            <div className='bg-yellow-300 p-3'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center mt-2'>className="flex justify-around"</p>
        <div className='flex justify-around'>
            <div className='bg-red-300 p-3'>Item 1</div>
            <div className='bg-green-300 p-3'>Item 2</div>
            <div className='bg-blue-300 p-3'>Item 3</div>
            <div className='bg-yellow-300 p-3'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center mt-2'>className="flex justify-evenly"</p>
        <div className='flex justify-evenly'>
            <div className='bg-red-300 p-3'>Item 1</div>
            <div className='bg-green-300 p-3'>Item 2</div>
            <div className='bg-blue-300 p-3'>Item 3</div>
            <div className='bg-yellow-300 p-3'>Item 4</div>
        </div>

        <p className='mb-3 text-xl bg-black text-white p-2 w-full text-center mt-2'>className="flex justify-stretch"</p>
        <div className='flex justify-stretch'>
            <div className='bg-red-300 p-3'>Item 1</div>
            <div className='bg-green-300 p-3'>Item 2</div>
            <div className='bg-blue-300 p-3'>Item 3</div>
            <div className='bg-yellow-300 p-3'>Item 4</div>
        </div>
    </div>
  )
}

export default FlexJustiFyContent;