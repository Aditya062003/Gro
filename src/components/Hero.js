import React from "react";
import Typed from "react-typed";
function Hero() {
	return (
		<div className="text-white max-w-[800px] flex flex-col p-24 lg:p-52  mx-auto h-fit text-center">
			<p className="text-[#4682B4] p-1">Growing with Data Analytics</p>
			<p className="text-5xl lg:txt-5xl p-2 font-extrabold">Grow With Data</p>
			<div className="flex-row sm:flex justify-center font-bold items-center text-xl lg:3xl space-x-2">
				<p>fast and flexible for </p>
				<Typed
					className="text-[#4682B4]"
					loop
					strings={["BTC", "BTB", "SAAS"]}
					typeSpeed={100}
				/>
			</div>
			<p className="font-bold text-xs opacity-25 pt-2">
				Monitor your data analytics to increase your revenue on your SAAS, BTC,
				BTB
			</p>
			<button className="bg-[#4682B4] mt-4 rounded w-fit px-8 py-1 mx-auto font-medium hover:text-black hover:bg-gradient-to-b from-orange-500 to-yellow-300 ease-in-out duration-500 active:animate-ping">
				Get Started
			</button>
		</div>
	);
}

export default Hero;
