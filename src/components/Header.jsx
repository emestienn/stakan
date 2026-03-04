// Abdumalik

import React from 'react'

const Header = () => {
  return (
    <div className='bg-blue-300 flex justify-between py-4 px-14'>
      <h1>Stakan</h1>
      <ul className='flex gap-4'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Docs</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
    </div>
  )
}

export default Header