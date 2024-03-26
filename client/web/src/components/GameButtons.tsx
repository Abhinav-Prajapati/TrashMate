"use client"
import React from 'react'

const GameButtons = () => {
  return (
    <div className=' w-full flex justify-between gap-x-1 '>
      <button className='border bg-[#36454F4d] text-xl text-white/80 border-white/40 px-10 py-2 w-1/3 rounded-xl flex-1 hover:bg-[#36454f8c] hover:text-white/90' >Draw</button>
      <button className='border bg-[#36454F4d] text-xl text-white/80 border-white/40 px-10 py-2 w-1/3 rounded-xl flex-1'>Resign</button>
      <button className='border bg-[#36454F4d] text-xl text-white/80 border-white/40 px-10 py-2 w-1/3 rounded-xl  flex-1'>Rollback</button>
    </div>
  )
}

export default GameButtons