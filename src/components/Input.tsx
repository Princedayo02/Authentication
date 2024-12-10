import { FC } from "react";
interface Iinput {
	label: string;
	type: string;
	register: object;
}
const CustomInput: FC<Iinput> = ({ label, type, register }, props) => {
	return (
		<div className="mb-4">
			<label className="block mb-3">{label}</label>
			<input
				type={type || "text"}
				className="p-3 focus:ring-1 focus:ring-blue-500 outline-none border border-yellow-500"
				{...register}
				{...props}
			/>
		</div>
	);
};

export default CustomInput;
