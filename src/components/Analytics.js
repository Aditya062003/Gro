import React from "react";
import analytics from "../assets/laptop.jpg";

function Analytics() {
	return (
		<div className="text-white py-10 bg-white justify-center items-center grid md:grid-cols-2 h-fit p-4">
			<div className="image">
				<img className="w-[500px] mx-auto my-4" src={analytics} alt="/" />
			</div>
			<div className="text mx-auto space-y-2 text-black text-center  ">
				<p className="text-[#4682B4]  font-bold text-3xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b from-orange-500 to-yellow-300 ease-in-out hover:duration-500">
					Data Analytics Dashboard
				</p>
				<h2 className="">Manage Data Analytics Professionally</h2>
				<p className="font-mono text-sm font-light opacity-50">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
					eveniet unde mollitia eum adipisci quaerat tenetur sint, nobis soluta
					repellendus non iste nemo qui temporibus ipsam illo ab est voluptatum
					eaque atque. Nisi, praesentium debitis!
				</p>
				<button className="hover:text-black mt-4 rounded w-fit px-8 py-1 mx-auto font-medium text-white bg-gradient-to-b from-cyan-500 to-lime-300 ease-in-out duration-500 ">
					Get Started
				</button>
			</div>
		</div>
	);
}

export default Analytics;
