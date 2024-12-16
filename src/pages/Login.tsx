import { useState, FormEvent } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../axiosConfig";
import { toast } from "react-toastify";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	console.log(password);
	console.log(email);
	// base url is localhost:4000
	// login endpoint is /login
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			const { data, status } = await axiosClient.post("/login", {
				email,
				password,
			});

			alert("hey");
			if (status === 200) {
				setLoading(false);
				localStorage.setItem("userToken", JSON.stringify(data.data.accessToken));
				toast.success(data.message);
				navigate("/home");
			} else {
				toast.warn("login failed");
			}
		} catch (error: any) {
			setLoading(false);
			if (error.response !== undefined) {
				toast.error(error.response);
			}
		}
	};

	return (
		<div className="flex flex-col mx-auto w-full md:w-[80%] lg:w-1/2 px-20 mt-10">
			<h1 className="text-4xl font-bold py-5 ">Login</h1>
			<h2 className="font-bold text-xl mb-2">Good to have you back</h2>
			<form className="py-4 text-green text-green-800 w-full">
				<Input type="email" onChange={(value) => setEmail(value)} label="Email" />
				<Input type="password" onChange={(value) => setPassword(value)} label="Password" />
			</form>
			<button onClick={handleSubmit} className="button">
				{loading ? "processing...." : "Login"}
			</button>
		</div>
	);
};

export default Login;
