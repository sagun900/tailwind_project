import React from 'react'

const Header = () => {
  return (
    <header className='bg-black text-white flex items-baseline px-4 py-2 justify-between'>

      <h1 className='text-2xl'>Tail Web</h1>
      <nav className='space-x-2'>
        <a className='hover:bg-white hover:text-black p-3' href="">About</a>
        <a className='hover:bg-white hover:text-black p-3' href="">Contact</a>
      </nav>

    </header>
  )
}

export default Header