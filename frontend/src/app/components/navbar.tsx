import React from 'react'

const Navbar = () => {
  return (
   
<nav className="bg-white border-gray-200 dark:bg-gray-900 mb-4">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
    <a href="/" className="flex items-center">  
    
    <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-800"><i className="fa-solid fa-film fa-flip"></i>   <span className='text-blue-500'>Movies</span>DB</span>
    </a>

  </div>
</nav>

  )
}

export default Navbar