import { FC } from "react";
interface Iinput {
	label: string;
	type: string;
	register: object;
}
const Input: FC<Iinput> = ({ label, type, register }, props) => {
	return (
		<div className="mb-4">
			<label className="block mb-3">{label}</label>
			<input
				type={type || "text"}
				className="w-full rounded-md py-3 text-green my-4 hover:scale-110 transition-all ring-2 ring-green-500"
				{...register}
				{...props}
			/>
		</div>
	);
};

export default Input;
