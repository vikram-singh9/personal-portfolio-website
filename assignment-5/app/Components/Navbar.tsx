import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className=' sticky bg-red-500 opacity-9       h-10 p-10 flex justify-between items-center text-zinc-700 text-1xl font-bold font-mono'>
      <div className='text-3xl text-yellow-400'><h2>P.<span className='text-zinc-700'>Folio</span></h2></div>
      <div className='flex gap-3 '>
      <Link className='hover:underline' href={'/about'}>About</Link>
      <Link className='hover:underline' href={'/projects'}>Projects</Link>
      <Link className='hover:underline' href={'/contacts'}>Contacts</Link>
      <Link className='hover:underline' href={'/hire-me'}>Hire me</Link>
      {/* <Link href={'/about'}>About</Link> */}
      </div>
    </nav>
    </>
  )
}

export default Navbar