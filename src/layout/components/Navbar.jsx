import React from "react";
import { RiHomeLine, RiGlobalLine, RiSearch2Line,RiNewspaperLine, RiChat1Line } from "react-icons/ri";
const Navbar = () => {
	return (
		<div className="absolute bottom-0 h-16 w-screen bg-neutral-50 dark:bg-neutral-700 border-t  ">
		
			<div className="h-16 w-full sm:w-[35rem] mx-auto grid grid-cols-5 text-xs text-neutral-500 dark:text-neutral-50 font-extralight">
				<div className="col-span-1 flex flex-col justify-center items-center gap-1">
					<RiHomeLine size={20} />
          <p>Home</p>
				</div>
				<div className="col-span-1 flex flex-col justify-center items-center gap-1">
          <RiGlobalLine size={20}/>
					<p>Explore</p>
				</div>
				<div className="col-span-1 flex flex-col justify-center items-center gap-1">
          <RiSearch2Line size={20}/>
					<p>Discover</p>
				</div>
				<div className="col-span-1 flex flex-col justify-center items-center gap-1">
          <RiNewspaperLine size={20}/>
					<p>Activity</p>
				</div>
				<div className="col-span-1 flex flex-col justify-center items-center gap-1">
          <RiChat1Line size={20}/>
					<p>Chat</p>
				</div>
		</div>
		</div>
	);
};

export default Navbar;
