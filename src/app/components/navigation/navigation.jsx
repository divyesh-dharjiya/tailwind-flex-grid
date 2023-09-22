import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className='mb-8 h-auto'>
        <div>
        <h1 className='text-3xl font-bold text-center my-4'>Grid</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-7 justify-between text-center font-bold">
          <Link href="/" className="bg-blue-600 text-white p-5 m-3 mb-2">Responsive Grid</Link>
          <Link href="/justify-items" className="bg-green-600 text-white p-5 m-3 mb-2">Justify Items</Link>
          <Link href="/align-items" className="bg-blue-600 text-white p-5 m-3 mb-2">Align Items</Link>
          <Link href="/justify-content" className="bg-green-600 text-white p-5 m-3 mb-2">Justify Content</Link>
          <Link href="/align-content" className="bg-blue-600 text-white p-5 m-3 mb-2">Align Content</Link>
          <Link href="/order" className="bg-green-600 text-white p-5 m-3 mb-2">Order</Link>
          <Link href="/col-span" className="bg-blue-600 text-white p-5 m-3 mb-2">Col Span</Link>
        </div>
        </div>

        <div>
        <h1 className='text-3xl font-bold text-center my-4'>Flexbox</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-7 justify-between text-center font-bold">
          <Link href="/flex-direction" className="bg-teal-500 text-white p-5 m-3 mb-2">Flex Direction</Link>
          <Link href="/flex-wrap" className="bg-cyan-500 text-white p-5 m-3 mb-2">Flex Wrap</Link>
          <Link href="/flex-justify-content" className="bg-teal-500 text-white p-5 m-3 mb-2">Flex Justify Content</Link>
          <Link href="/flex-align-items" className="bg-cyan-500 text-white p-5 m-3 mb-2">Flex Align Items</Link>
          <Link href="/flex-align-content" className="bg-teal-500 text-white p-5 m-3 mb-2">Flex Align Content</Link>
          {/* <Link href="/order" className="bg-cyan-500 text-white p-5 m-3 mb-2">Order</Link>
          <Link href="/col-span" className="bg-teal-500 text-white p-5 m-3 mb-2">Col Span</Link> */}
        </div>
        </div>
    </div>
  )
}

export default Navigation