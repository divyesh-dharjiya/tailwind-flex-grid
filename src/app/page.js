
export default function Home() {
  return (
    <div className="text-center mt-3">
      <p className='mt-3 text-xl bg-black text-white p-2 w-full'>(1) Responsive Grid</p>
      <p className='mb-3 text-xl bg-yellow-500 text-white p-2 w-full'>className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className='h-24 bg-teal-400 border border-black'>Video</div>
        <div className='h-24 bg-teal-400 border border-black'>Video</div>
        <div className='h-24 bg-teal-400 border border-black'>Video</div>
        <div className='h-24 bg-teal-400 border border-black'>Video</div>
        <div className='h-24 bg-teal-400 border border-black'>Video</div>
        <div className='h-24 bg-teal-400 border border-black'>Video</div>
      </div>
    </div>
  )
}
