import React from 'react'
import { TfiClose, TfiCheck, TfiBookmark, TfiEmail, TfiShare } from "react-icons/tfi";

const Button = () => {
  return (
    <div className="h-24 w-full sm:w-[35rem] mx-auto flex justify-between sm:justify-center gap-4 sm:gap-8 items-center p-4 mt-2">
				<button className="h-12 aspect-square flex justify-center items-center p-3 text-red-500 bg-white rounded-full scale-100 focus: focus:text-red-600 shadow-md ">
					<TfiClose size={30} className=" " />
				</button>
				<div className="h-12 w-full flex justify-around items-center p-3 bg-white rounded-full scale-100 shadow-md">
					<button className="text-yellow-500 focus:text-yellow-600">
                    <TfiBookmark size={25} className=" " />
                    </button>
                    <button className="text-blue-500 focus:text-blue-600">
					<TfiShare size={25} className=" " />
                    </button>
                    <button className="text-amber-500 focus:text-amber-600">
					<TfiEmail size={25} className=" " />
                    </button>
				</div>
				<button className="h-12 aspect-square flex justify-center items-center p-3 text-emerald-500 bg-white rounded-full scale-100 focus: focus:text-emerald-600 shadow-md ">
					<TfiCheck size={30} className=" " />
				</button>
			</div>
  )
}

export default Button