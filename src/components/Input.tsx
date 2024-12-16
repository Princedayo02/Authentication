import { FC } from "react";
interface Iinput {
	onChange: (value: string) => void;
	label: string;
	type?: string;
	value?: string;
	placeholder?: string;
}
const Input: FC<Iinput> = ({ label, type, value, placeholder, onChange }, props) => {
	return (
		<div className="mb-4">
			<label className="block mb-3">{label}</label>
			<input
				onChange={(e) => onChange(e.target.value)}
				type={type || "text"}
				className="input"
				value={value}
				placeholder={placeholder}
				{...props}
			/>
		</div>
	);
};

export default Input;
