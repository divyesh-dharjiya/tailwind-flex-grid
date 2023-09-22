import React from 'react'

const AlignItems = () => {
    return (
        <div className='text-center'>
            <p className='mb-3 text-xl bg-black text-white p-2 w-full'>className="items-start"</p>
            <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
                <div className='bg-teal-400 border border-black w-60'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
            </div>

            <p className='mb-3 text-xl bg-black text-white p-2 w-full'>className="items-end"</p>
            <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-end">
                <div className='bg-teal-400 border border-black w-60'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
            </div>

            <p className='mb-3 text-xl bg-black text-white p-2 w-full'>className="items-center"</p>
            <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">
                <div className='bg-teal-400 border border-black w-60'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
            </div>

            <p className='mb-3 text-xl bg-black text-white p-2 w-full'>className="items-baseline"</p>
            <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-baseline">
                <div className='bg-teal-400 border border-black w-60'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
            </div>

            <p className='mb-3 text-xl bg-black text-white p-2 w-full'>className="items-stretch"</p>
            <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
                <div className='bg-teal-400 border border-black w-60'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
            </div>
        </div>
    )
}

export default AlignItems;