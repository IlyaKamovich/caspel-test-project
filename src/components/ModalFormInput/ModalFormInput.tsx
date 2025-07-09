import { Input } from 'antd';
import { type Path, type Control, type FieldError, Controller, type FieldValues } from 'react-hook-form';

export interface IModalFormInput<T extends FieldValues> {
	name: Path<T>;
	control: Control<T>;
	errors?: FieldError | undefined;
	label: string;
	placeholder: string;
	inputType?: string | undefined;
}

const ModalFormInput = <T extends FieldValues>({ name, control, errors, label, placeholder, inputType }: IModalFormInput<T>) => {
	return (
		<div className="input">
			<label htmlFor={name} className="input__label">
				{label}
			</label>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<Input required={true} placeholder={placeholder} type={inputType} id={name} onChange={onChange} value={value} />
				)}
			/>
			{errors && (
				<span role="alert" className="input__error">
					{errors?.message}
				</span>
			)}
		</div>
	);
};

export { ModalFormInput };
