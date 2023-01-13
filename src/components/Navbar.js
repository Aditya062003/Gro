import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
	const [nav, setNav] = useState(false);

	const handleNav = (e) => {
		e.preventDefault();
		setNav(!nav);
	};

	return (
		<div className="text-white flex items-center max-w-[1240px] mx-auto justify-between p-4">
			<h2 className="text-3xl  font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b from-orange-500 to-yellow-300 ease-in-out hover:duration-500 active:animate-ping">
				Gro
			</h2>
			<ul className="space-x-4 p-2 hidden md:flex">
				<li>Home</li>
				<li>Company</li>
				<li>Resourse</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
			<div onClick={handleNav} className="block md:hidden">
				{nav ? (
					<AiOutlineClose color="steelblue" size={20} />
				) : (
					<AiOutlineMenu size={20} color="steelblue" />
				)}
			</div>
			<div
				className={
					nav
						? "fixed opacity-80 left-0  top-0 pt-4 w-[60%] h-[100%] border-r-stone-600 bg-black  ease-in-out duration-500"
						: "fixed left-[-100%]"
				}
			>
				<ul className="pt-10 uppercase">
					<li className="p-4 border-b-2 border-stone-600">Home</li>
					<li className="p-4 border-b-2 border-stone-600">Company</li>
					<li className="p-4 border-b-2 border-stone-600">Resourse</li>
					<li className="p-4 border-b-2 border-stone-600">About</li>
					<li className="p-4  border-stone-600">Contact</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
