import React from 'react'

const Navbar = () => {
  return (
    <nav className=" fixed bg-[#0A192FD9] w-full z-[999] ">
      <div className="mx-auto  px-10 py-4 flex sm:items-center place-items-center justify-between">
        <h2 className="text-2xl font-bold capitalize text-main">
          Success
        </h2>
        <div className="hidden sm:flex gap-x-6 text-light capitalize ">
          <h2>about</h2>
          <h2>projects</h2>
          <h2>skills</h2>
          <h2>contact</h2>
          <button className="">Resume</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
// className="bg-[#0A192FD9]"