import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

interface INavlist {
	title: string;
	path: string;
}

let Navlist: INavlist[] = [
	{ title: "Home", path: "/home" },
	{ title: "About", path: "/about" },
	{ title: "Help", path: "/Help" },
	{ title: "Blog", path: "/blog" },
	{ title: "Contact Us", path: "/contacts" },
];

const Header: React.FC = () => {
	const [navopen, setNavOpen] = useState(false);

	return (
		<nav className="flex flex-row justify-between px-3 py-10 shadow-lg relative mx-8">
			<div className="font-bold text-2xl mr-20">LOGO</div>
			<div className="hidden md:flex justify-around text-md w-1/2 mr-8">
				{Navlist.map((link, index) => {
					return (
						<NavLink
							key={index}
							to={link.path}
							className={({ isActive }) => (isActive ? "  px-4 py-2" : " px-4 py-2")}>
							{link.title}
						</NavLink>
					);
				})}
			</div>
			<div className="hidden md:flex flex gap-x-4 justify-around py-2 ">
				<NavLink
					className={({ isActive }) =>
						isActive
							? "bg-green-500 text-white  px-6 py-2 rounded-lg"
							: "hover:bg-green-800 bg-green-500 px-6 py-2 rounded-lg hover:text-white transition-all ease-out duration-500 ring-2 ring-green-500"
					}
					to="login">
					Login
				</NavLink>

				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-green-800  px-4 py-2 rounded-lg ring-2 ring-green-500"
							: "px-4 py-2 rounded-lg ring-2 ring-green-500"
					}
					to="/signup">
					SignUp
				</NavLink>
			</div>
			{navopen ? (
				<div className="md:hidden flex flex-col absolute z-20 top-28 bg-white w-full left-0 right-0 pl-20">
					{Navlist.map((data, index) => {
						return (
							<NavLink key={index} to={data.path}>
								{data.title}
							</NavLink>
						);
					})}
					<div className="md:hidden flex flex-col absolute z-20 gap-4 top-28 bg-white w-1/2 mb-8 mt-4 left-0 right-0 pl-20">
						<button onClick={() => setNavOpen(false)}>
							<NavLink
								className={({ isActive }) =>
									isActive
										? "bg-green-500 text-white  px-4 py-2 rounded-lg"
										: "hover:bg-green-800 px-4 py-2 rounded-lg hover:text-white transition-all ease-out duration-500 ring-2 ring-green-500"
								}
								to="login">
								Login
							</NavLink>
						</button>

						<NavLink
							className={({ isActive }) =>
								isActive
									? "bg-green-500 text-white  px-4 py-2 rounded-lg"
									: "hover:bg-green-800 px-4 py-2 rounded-lg hover:text-white transition-all ease-out duration-500 ring-2 ring-green-500"
							}
							to="/signup">
							SignUp
						</NavLink>
					</div>
				</div>
			) : (
				""
			)}
			{navopen ? (
				<button onClick={() => setNavOpen(false)} className="md:hidden mr-14">
					<IoCloseSharp />
				</button>
			) : (
				<button onClick={() => setNavOpen(true)} className="md:hidden mr-14">
					<FaAlignJustify />
				</button>
			)}
		</nav>
	);
};

export default Header;
