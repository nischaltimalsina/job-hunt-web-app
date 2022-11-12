import React from "react";
import { BiExpandAlt } from "react-icons/bi";

const Card = () => {
	return (
		<div className="relative w-full sm:w-[35rem] h-[calc(100vh-15.5rem)] mx-auto">
			<button className=" absolute right-3 bottom-3 bg-white/60 p-3 rounded-full z-50">
				<BiExpandAlt size={18} />
			</button>
			<div className="absolute w-full h-full z-10 bg-white rounded-xl">
				<div className="absolute w-full h-full z-10 shadow-md bg-neutral-200/50 dark:bg-neutral-800 dark:shadow-neutral-600/30 rounded-xl dark:border dark:border-neutral-600/30">
					<div className="w-full h-full text-start tracking-wide mt-3 sm:mt-6">
						<div className="w-full flex flex-col justify-center items-center gap-3 p-8 sm:px-14">
							<img
								className="h-32 shadow-md dark:shadow-neutral-300 aspect-square rounded-full object-cover object-center ring-1 ring-neutral-300/50"
								src="https://content.fortune.com/wp-content/uploads/2017/06/lgo-06-15-17-e-pbs.jpg"
								alt=""
							/>
							<div className="text-center">
								<h1 className="text-base uppercase dark:text-neutral-200">
									Front End Developer
								</h1>
								<p className="text-sm text-emerald-600">Shopley Inc.</p>
								<p className="text-xs dark:text-neutral-300">
									Fulltime/Parttime/Remote
								</p>
							</div>
						</div>
						<div className=" h-[calc(100%-7m)] sm:h-[calc(100%-8rem)] w-full mt-6  overflow-y-scroll px-6 sm:px-10 rounded-xl  text-neutral-200">
							
						</div>
					</div>
				</div>
			</div>
			<span className=" absolute h-[calc(100%+0.5rem)] w-[95%] left-[2.5%] top-0 bg-neutral-200 dark:bg-neutral-800 dark:shadow-neutral-700 shadow-md mx-auto rounded-xl z-[5]  "></span>
			<span className=" absolute h-[calc(100%+1rem)] w-[90%] left-[5%] top-0 bg-neutral-300 dark:bg-neutral-700 shadow-md dark:shadow-neutral-600 mx-auto rounded-xl z-0 "></span>
		</div>
	);
};

export default Card;
