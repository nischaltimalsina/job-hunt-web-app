import React from "react";
import { RiMenuFill } from "react-icons/ri";
import Dashboard from "../Pages/Dashboard";
import Navbar from "./components/Navbar";

const Main = () => {
	return (
		<>
			<section className="relative h-screen w-screen bg-gradient-to-tr from-neutral-300 to-neutral-100 backdrop-blur-2xl  flex-col justify-center items-center overflow-hidden">
				<div className="h-16 flex items-center text-neutral-500 dark:text-neutral-50 bg-neutral-100 dark:bg-neutral-800 w-full dark:border-b dark:border-neutral-600/30 shadow-md  dark:shadow-neutral-600/25">
					<div className="p-2 px-3 ">
						<RiMenuFill size={30} />
					</div>
				</div>
				<Dashboard />
				<Navbar />
			</section>
		</>
	);
};

export default Main;
