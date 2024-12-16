import { useState, FormEvent } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { axiosClient } from "../axiosConfig";

const Signup: React.FC = () => {
	const navigate = useNavigate();
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");
	const [email, setEmail] = useState("");
	const [lastname, setLastname] = useState("");
	const [firstname, setFirstname] = useState("");
	const [gender, setGender] = useState("");
	const [error, setError] = useState({ value: false, messsage: "" });

	const [loading, setLoading] = useState(false);

	const validateInput = (input: any) => {
		if (input.password.lenght < 3) {
			setError({ value: true, messsage: "password too short" });
			return;
		}
		if (input.email == "" || input.email == " ") {
			setError({ value: true, messsage: "Please enter email" });

			return;
		}

		if (input.firstname == "" || input.firstname == " ") {
			setError({ value: true, messsage: "please enter first name" });

			return;
		}
		if (input.gender != "M" && input.gender != "F") {
			setError({ value: true, messsage: "Enter a valid gender" });
			return;
		}
		if (input.password !== input.confirmPass) {
			setError({ value: true, messsage: "Password does not match" });
		}
		return true;
	};
	const handleSubmit = async (e: FormEvent) => {
		setLoading(true);
		e.preventDefault();
		if (validateInput({ password, email, lastname, gender, firstname, confirmPass })) {
			console.log({ password, email, lastname, gender, firstname, confirmPass });
			try {
				const response = await axiosClient.post("/signup", {
					firstName: firstname,
					lastname: lastname,
					email,
					password,
				});
				if (response.status === 200) {
					setLoading(false);
					localStorage.setItem("userToken", JSON.stringify(response.data.data.accessToken));
					toast.success(response.data.message);
					navigate("/home");
				} else {
				}
			} catch (error: any) {
				setLoading(false);
				if (error.response !== undefined) {
					toast.error(error.response);
				}
			}
		}
	};

	return (
		<div className="flex flex-col justify-center align-center mx-auto w-1/2 my-10">
			<div className="text-center text-2xl font-bold my-10">Register your account</div>
			<div className="border border-grey-500 rounded-lg py-6 px-5">
				{error.value && <p className="text-sm p-1 text-red-500">{error.messsage}</p>}
				<form>
					<Input
						label="Email"
						type={"text"}
						value={firstname}
						placeholder="Enter Firstname"
						onChange={(value) => {
							setFirstname(value);
							setError({ value: false, messsage: "" });
						}}
					/>
					{/* <Input
						label="Email"
						type={"text"}
						value={firstname}
						placeholder="Enter Firstname"
						onChange={(e) => {
							setFirstname(e.target.value);
							setError({ value: false, messsage: "" });
						}}
					/> */}
					<Input
						label="Lastname"
						type={"text"}
						value={lastname}
						placeholder={"Enter Lastname"}
						onChange={(value) => {
							setError({ value: false, messsage: "" });
							setLastname(value);
						}}
					/>
					<Input
						label="Gender"
						type={"text"}
						value={gender}
						placeholder={"Gender"}
						onChange={(value) => {
							setGender(value);
							setError({ value: false, messsage: "" });
						}}
					/>
					<Input
						label="Email"
						type={"email"}
						value={email}
						placeholder={"Enter Email"}
						onChange={(value) => {
							setEmail(value);
							setError({ value: false, messsage: "" });
						}}
					/>
					<Input
						label="Password"
						type={"password"}
						value={password}
						placeholder={"Enter password"}
						onChange={(value) => {
							setPassword(value);
							setError({ value: false, messsage: "" });
						}}
					/>
					<Input
						label="Confirm Password"
						type="password"
						value={confirmPass}
						placeholder="Confirm Password"
						onChange={(value) => {
							setConfirmPass(value);
							setError({ value: false, messsage: "" });
						}}
					/>
					<button onClick={handleSubmit} className="button">
						{loading ? "processing...." : "Signup"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Signup;
