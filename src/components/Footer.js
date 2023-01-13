// import React from 'react'

// function Footer() {
//   return <div className="bg-[#4682B4]"></div>;
// }

// export default Footer

import React from "react";
import {
	FaDribbbleSquare,
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagram,
	FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="w-full bg">
			<div className="text-white grid md:grid-cols-2 max-w-[1240] py-20 px-10">
				<div className="logo">
					<h2 className="text-3xl py-2 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b from-orange-500 to-yellow-300 ease-in-out hover:duration-500 active:animate-ping">
						Gro
					</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ab.
						Debitis aperiam labore illo cumque modi, similique dolores nisi
						officiis animi accusantium voluptatem eius repudiandae voluptatum
						natus, ab, sit omnis!
					</p>
					<div className="flex justify-between md:w-[75%] my-6">
						<FaFacebookSquare size={30} />
						<FaInstagram size={30} />
						<FaTwitterSquare size={30} />
						<FaGithubSquare size={30} />
						<FaDribbbleSquare size={30} />
					</div>
				</div>
				<div className="footerHeading flex justify-between p-4">
					<ul className="flex-col">
						<h6>Solutions</h6>
						<li className="py-2 text-sm">Analytics</li>
						<li className="py-2 text-sm">Marketing</li>
						<li className="py-2 text-sm">Commerce</li>
						<li className="py-2 text-sm">Insights</li>
					</ul>
					<ul className="flex-col">
						<h6>Support</h6>
						<li className="py-2 text-sm">Pricing</li>
						<li className="py-2 text-sm">Documentation</li>
						<li className="py-2 text-sm">Guides</li>
						<li className="py-2 text-sm">API Status</li>
					</ul>
					<ul className="flex-col">
						<h6>Company</h6>
						<li className="py-2 text-sm">About</li>
						<li className="py-2 text-sm">Blog</li>
						<li className="py-2 text-sm">Jobs</li>
						<li className="py-2 text-sm">Press</li>
						<li className="py-2 text-sm">Careers</li>
					</ul>
					<ul className="flex-col">
						<h6>Legal</h6>
						<li className="py-2 text-sm">Claim</li>
						<li className="py-2 text-sm">Policy</li>
						<li className="py-2 text-sm">Terms</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
