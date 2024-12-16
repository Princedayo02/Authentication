import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

interface INavlist {
	title: string;
	path: string;
}

const Navlist: INavlist[] = [
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
				<div className="md:hidden flex items-end pr-10 shadow-xl py-4 flex-col gap-3   top-28 bg-white w-full right-0  ">
					<button onClick={() => setNavOpen(false)} className="md:hidden  absolute right-8 top-14">
						<IoCloseSharp />
					</button>
					<div className="space-y-3">
						{Navlist.map((data, index) => {
							return (
								<NavLink className=" flex w-fit" key={index} to={data.path}>
									{data.title}
								</NavLink>
							);
						})}
						<button className=" flex" onClick={() => setNavOpen(false)}>
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
						<button className="my-1 flex">
							<NavLink
								className={({ isActive }) =>
									isActive
										? "bg-green-500 text-white  px-4 py-2 rounded-lg"
										: "hover:bg-green-800 px-4 py-2 rounded-lg hover:text-white transition-all ease-out duration-500 ring-2 ring-green-500"
								}
								to="/signup">
								SignUp
							</NavLink>
						</button>
					</div>
				</div>
			) : (
				""
			)}
			{navopen ? null : (
				<button onClick={() => setNavOpen(true)} className="md:hidden mr-14">
					<FaAlignJustify />
				</button>
			)}
		</nav>
	);
};

export default Header;
