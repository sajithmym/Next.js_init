import Link from 'next/link'
import React from 'react'
import './style.css'


export default function Navbar() {
  return (
    <div> <center>
      <Link href='/'> Home </Link>
      <Link href='/first'> First </Link>
      <Link href='/sec'> Second  </Link>
      <Link href='/third'> Third  </Link>
    </center> </div>
  )
}
