import React from "react";
import { TfiClose, TfiCheck, TfiBookmark, TfiEmail, TfiShare } from "react-icons/tfi";
import { BiExpandAlt } from "react-icons/bi";

const View = () => {
	return (
		<div className="h-[calc(100vh-9rem)] w-full sm:w-[35rem] mx-auto px-5 mt-5">
			<div className="relative w-full sm:w-[35rem] h-[calc(100vh-15rem)] ">
            <button className=" absolute right-3 bottom-3 bg-white/60 p-3 rounded-full z-50">
								<BiExpandAlt size={18} />
							</button>
				<div className="absolute w-full h-full z-10 bg-white shadow-md rounded-xl">
				<div className="absolute w-full h-full z-10 bg-gradient-to-t from-orange-100 to-teal-500/20 shadow-md rounded-xl">
					<div className="w-full h-full text-start tracking-wide mt-3 sm:mt-6">
						<div className="w-full h-14 flex justify-start items-end gap-3 px-3 sm:px-8">
							<img
								className="h-14 aspect-square rounded-lg ring-1 object-cover"
								src="https://content.fortune.com/wp-content/uploads/2017/06/lgo-06-15-17-e-pbs.jpg"
								alt=""
							/>
							<div className="text-start">
								<h1 className="text-base uppercase text-neutral-500">
									Front End Developer
								</h1>
								<p className="text-sm text-emerald-600">Shopley Inc.</p>
								<p className="text-xs text-neutral-600">
									Fulltime/Parttime/Remote
								</p>
							</div>
						</div>
						<div className=" h-[calc(100%-7rem)] sm:h-[calc(100%-8rem)] w-full mt-6  overflow-y-scroll px-6 sm:px-10 rounded-xl">
							<h2 className="text-sm sm:text-base font-light uppercase">Overview</h2>
						
							<ul className="text-[0.6rem] sm:text-xs font-light text-start tracking-normal leading-4 sm:leading-6 my-1">
								<li>
									<p>
										Type: <code className="text-emerald-500">Fulltime</code>
									</p>
								</li>
								<li>
									<p>
										Location: <code className="text-amber-500">Remote</code>
									</p>
								</li>
								<li>
									<p>
										Salary: <code className="text-amber-500">Negotiable</code>
									</p>
								</li>
							</ul>

							<h2 className="text-sm sm:text-base font-light uppercase mt-3 sm:mt-6">Experience</h2>

							<div>
								<ul className="text-[0.6rem] sm:text-xs font-light text-start tracking-normal leading-4 sm:leading-5 mt-1">
									<li>
										Work with internal teams to obtain an in-depth understanding
										and the documentation requirements.
									</li>
									<li>
										Responsible for preparing engineering documentation after
										successive modeling procedures are followed for them.
									</li>
									<li>
										Research of different engineering topics, design creation,
										and subsequent delivery of those design-based documents.
									</li>
									<li>
										Continuously editing and revising content to ensure quality
										content.
									</li>
									<li>
										Strong understanding of respective engineering trends and
										content management systems.
									</li>
									<li>Gather, evaluate and analyze relevant information.</li>
									<li>
										A positive attitude, willing to jump in and tackle new
										challenges.
									</li>
									<li>
										Excellent attention to detail and the ability to prioritize
										and work on multiple projects in a fast-paced, changing
										environment.
									</li>
									<li>Complete the given project within 48 hours.</li>
								</ul>
							</div>
							<h2 className="text-sm sm:text-base font-light uppercase mt-3 sm:mt-6">
								Roles & Responsibilities
							</h2>
							<ul className="text-[0.6rem] sm:text-xs font-light text-start tracking-normal leading-4 sm:leading-5 mt-1">
								<li>
									Work with internal teams to obtain an in-depth understanding
									and the documentation requirements.
								</li>
								<li>
									Responsible for preparing engineering documentation after
									successive modeling procedures are followed for them.
								</li>
								<li>
									Research of different engineering topics, design creation, and
									subsequent delivery of those design-based documents.
								</li>
								<li>
									Continuously editing and revising content to ensure quality
									content.
								</li>
								<li>
									Strong understanding of respective engineering trends and
									content management systems.
								</li>
							</ul>
						</div>
						</div>
					</div>
				</div>
				<span className=" absolute h-[calc(100%+0.5rem)] w-[95%] left-[2.5%] top-0 bg-neutral-200  shadow-md mx-auto rounded-xl z-[5]  "></span>
				<span className=" absolute h-[calc(100%+1rem)] w-[90%] left-[5%] top-0 bg-neutral-300 shadow-md mx-auto rounded-xl z-0 "></span>
			</div>
			<div className="h-24 w-full sm:w-[35rem] mx-auto flex justify-between sm:justify-center gap-4 sm:gap-8 items-center px-3 mt-2">
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
		</div>
	);
};

export default View;
