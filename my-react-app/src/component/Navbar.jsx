import React from 'react'

function Navbar() {
  return (
    <div>

<nav className=" bg-yellow-500 text-black p-4  ">
    <ul className="flex justify-center gap-5 flex-wrap">
        <li>ALL CATEGORIES</li>
        <li className="text-gray-500">TODAY DEALS</li>
        <li>ELECTRONICS</li>
        <li>CLOTHINGS</li>
        <li>COMPUTERS</li>
        <li>FURNITURES</li>
        <li>MOM & BABY</li>
        <li>BOOKS & MORE</li>
    </ul>
</nav>

    </div>
  )
}

export default Navbar