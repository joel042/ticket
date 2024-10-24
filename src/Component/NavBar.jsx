import React from 'react'

function NavBar() {
  return (
    <div>
      <div className="flex justify-between items-center p-4 text-white bg-[#1f262d] h-[50px]">
        <img className='w-10'
          src="https://img.icons8.com/?size=100&id=9433&format=png&color=ffffff"
          alt=""
        />

        <h1>My Tickets</h1>
        <h1>Help</h1>
      </div>
    </div>
  );
}

export default NavBar
