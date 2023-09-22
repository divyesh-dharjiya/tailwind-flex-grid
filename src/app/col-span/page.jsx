import React from 'react'

const ColSpan = () => {
    return (
        // <div className=''>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-4 m-5'>
            <div className='bg-red-300 sm:col-span-2 p-8'>
                <h1 className="text-3xl">Lorem ipsum dolor sit amet</h1>
                <p className='mt-3 break-words'>
                    Lorem ipsum dolor sit amet, reque deserunt per ad, id pri idque maiorum assueverit. An atqui nostro eam. Cu elit nusquam usu, ne fugit lobortis antiopam nam. No sit timeam mentitum oporteat. Sit ut affert imperdiet.
                    Ex duo lorem sonet theophrastus, id labitur vocibus alienum usu, volumus nominati quo in. Putant vidisse ei nam, ei nec porro ipsum rationibus. His veri regione minimum ut, sea dicant signiferumque at. Ullum virtute eloquentiam eu cum. Eos ei quod eius equidem. Cum ei choro utamur referrentur.
                </p>
            </div>
            <div className='bg-orange-200 p-6'>
                <h2 className='text-2xl'>Actions</h2>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
        </div>
        // </div>
    )
}

export default ColSpan;