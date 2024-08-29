import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img className='h-16 w-20' src="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18140.jpg" alt="book-img" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fetch Data</span>
        </div>
        </div>
        </nav>

    </div>
  )
}

export default Navbar
