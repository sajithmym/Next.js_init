import Link from 'next/link'
import React from 'react'
import './style.css'


export default function Navbar() {
  return (
    <div> <center>
      <Link className='o' href='/'> Home </Link>
      <Link className='o' href='/first'> First </Link>
      <Link className='o' href='/sec'> Second  </Link>
      <Link className='o' href='/third'> Third  </Link>
    </center> </div>
  )
}
