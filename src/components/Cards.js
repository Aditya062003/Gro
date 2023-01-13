import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

function Cards() {
	return (
		<div className="w-full text-black bg-white">
			<div className="grid md:grid-cols-3 p-20 min-w-[400] gap-8 mx-auto justify-center items-center ">
				<div className="card w-full shadow-2xl rounded-2xl  hover:animate-pulse duration-75 px-8 py-2 ">
					<img src={single} alt="single" className=" w-20 mx-auto" />
					<h2 className="text-2xl lg:text-3xl border-b-2 text-center p-2">
						Single User
					</h2>
					<p className="text-center p-2 ">$150</p>
					<div className="flex flex-col justify-center items-center space-y-4 ">
						<p>500 GB Storage</p>
						<p>1 User Allowed</p>
						<p>Send Up to 2Gb</p>
						<button className="Pastel bg-gradient-to-tr from-violet-500 to-orange-300 mt-4 rounded w-fit px-8 py-2  mx-auto font-medium hover:text-black  ease-in-out duration-500 active:animate-ping">
							Get Started
						</button>
					</div>
				</div>
				<div className="card w-full shadow-2xl   rounded-2xl  hover:animate-pulse duration-75 px-8 py-2">
					<img src={double} alt="single" className=" w-20 mx-auto" />
					<h2 className="text-2xl lg:text-3xl border-b-2 text-center p-2">
						Single User
					</h2>
					<p className="text-center p-2 ">$150</p>
					<div className="flex flex-col justify-center items-center space-y-4 ">
						<p>1000 GB Storage</p>
						<p>2 User Allowed</p>
						<p>Send Up to 10Gb</p>
						<button className="Pastel bg-gradient-to-tr from-violet-500 to-orange-300 mt-4 rounded w-fit px-8 py-2  mx-auto font-medium hover:text-black ease-in-out duration-500 active:animate-ping">
							Get Started
						</button>
					</div>
				</div>
				<div className="card w-full shadow-2xl   rounded-2xl  hover:animate-pulse duration-75  px-8 py-2">
					<img src={triple} alt="single" className=" w-20 mx-auto" />
					<h2 className="text-2xl lg:text-3xl border-b-2 text-center p-2">
						Single User
					</h2>
					<p className="text-center p-2 ">$150</p>
					<div className="flex flex-col justify-center items-center space-y-4 ">
						<p>1500 GB Storage</p>
						<p>3 User Allowed</p>
						<p>Send Up to 125Gb</p>
						<button className="Pastel bg-gradient-to-tr from-violet-500 to-orange-300  mt-4 rounded w-fit px-8 py-2  mx-auto font-medium hover:text-black0 ease-in-out duration-500 active:animate-ping">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
