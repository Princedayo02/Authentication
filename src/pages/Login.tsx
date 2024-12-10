import { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	return (
		<div className="flex flex-col mx-auto w-full md:w-[80%] lg:w-1/2 px-20 mt-10">
			<h1 className="text-4xl font-bold py-5 ">Login</h1>
			<h2 className="font-bold text-xl mb-2">Good to have you back</h2>
			<form className="py-4 text-green text-green-800 w-full">
				<Input label="Username"></Input>
				<Input label="Password"></Input>
			</form>
			<button className="border border-blue-500 hover:bg-blue-950 bg-blue-500 hover:scale-110 transition-all text-white rounded-xl flex justify-center m-3 p-3 w-40 align-middle mx-auto">
				Submit
			</button>
		</div>
	);
};

export default Login;
