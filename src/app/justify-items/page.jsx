import React from 'react'

const JustifyContent = () => {
    return (
        <div className='text-center'>
            <p className='mb-3 text-xl bg-black text-white p-2 w-full'>className="justify-items-start"</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-start">
                <div className='h-24 bg-teal-400 border border-black w-60'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
            </div>

            <p className='mb-3 text-xl bg-black text-white p-2 w-full'>className="justify-items-end"</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-end">
                <div className='h-24 bg-teal-400 border border-black w-60'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
            </div>

            <p className='mb-3 text-xl bg-black text-white p-2 w-full'>className="justify-items-center"</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                <div className='h-24 bg-teal-400 border border-black w-60'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
            </div>

            <p className='mb-3 text-xl bg-black text-white p-2 w-full'>className="justify-items-stretch"</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-stretch">
                <div className='h-24 bg-teal-400 border border-black w-60'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
                <div className='h-24 bg-teal-400 border border-black'>Video</div>
            </div>
        </div>
    )
}

export default JustifyContent;