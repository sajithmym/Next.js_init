import Link from 'next/link'
import React from 'react'


export default function Navbar() {
  return (
    <div>
        <Link href='/'> Home </Link>
        <Link href='/first'> First </Link>
        <Link href='/sec'> Second  </Link>
        <Link href='/third'> Third  </Link>
    </div>
  )
}
