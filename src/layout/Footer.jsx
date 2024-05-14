import React from 'react'

function Footer() {
  return (
    <div className='mt-10'>
        <hr className='bg-gradient-to-r from-white  to-red-400 p-3 border-none'/>
        <div className="flex justify-around p-10 bg-gray-100">
      <div className='text-[#A0A0A0] flex flex-col items-center'>
        <p className='text-xs'>Companies Visited</p>
        <h3 className='text-2xl'>68,000</h3>
      </div>
      <div className='text-[#A0A0A0] flex flex-col items-center'>
        <p className='text-xs'>Candidates Visited</p>
        <h3 className='text-2xl'>2,68,000</h3>
      </div>
    </div>
    </div>
  )
}

export default Footer