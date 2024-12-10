import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";

const Login: React.FC = () => {
	return (
		<div className="flex flex-col mx-auto w-full md:w-[80%] lg:w-1/2 px-20 mt-10">
			<h1 className="text-4xl font-bold py-5 ">Login</h1>
			<h2 className="font-bold text-xl mb-2">Good to have you back</h2>
			<form className="py-4 text-green text-green-800 w-full">
				<button
					type="submit"
					className="w-full rounded-md py-3 text-green my-4 hover:scale-110 transition-all ring-2 ring-green-500">
					For my child
				</button>
				<button
					type="submit"
					className="w-full rounded-md p-3 text-green my-4 hover:scale-110 transition-all ring-2 ring-green-500">
					As an individual
				</button>
				<button
					type="submit"
					className="w-full rounded-md p-3 text-green my-4 hover:scale-110 transition-all ring-2 ring-green-500">
					As an organisation
				</button>
				<button
					type="submit"
					className="w-full rounded-md p-3 text-green my-4 hover:scale-110 transition-all ring-2 ring-green-500">
					As a therapist
				</button>
			</form>
		</div>
	);
};

export default Login;
