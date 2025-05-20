import React from "react";

function ButtomBody() {
  return (
    <div>
      <div class="grid grid-cols-1 gap-4 mx-10 ">
        <div className="flex border-2 border-gray-200 my-5 py-5  items-center  p-10 justify-around bg-gray-100">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-light">Bose Bluetooth</h1>
            <h1 className="text-4xl font-light"> Wireless Headphones</h1>
            <p className='text-gray-400'>crisp powertut sound wrom the best sounding wireles</p>
            <p className='text-gray-400'> neadohone in its class.</p>
          </div>
          {/*  */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="line-through text-gray-400 text-sm">$260.50</h1>
            <h1 className="text-2xl text-green-600">$219.05</h1>
            <button class="rounded-sm font-bold text-sm bg-amber-300 mt-5 p-2">Shop Now</button>
          </div>
          {/*  */}
          <img
            className="h-40  flex flex-col  "
            src="/src/assets/Airpods.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ButtomBody;
