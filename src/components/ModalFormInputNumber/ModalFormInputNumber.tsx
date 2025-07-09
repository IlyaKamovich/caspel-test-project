import { InputNumber } from 'antd';
import { type Path, type Control, type FieldError, Controller, type FieldValues } from 'react-hook-form';

export interface IModalFormInputNumber<T extends FieldValues> {
	name: Path<T>;
	control: Control<T>;
	errors?: FieldError | undefined;
	label: string;
	placeholder: string;
}

const ModalFormInputNumber = <T extends FieldValues>({ name, control, errors, label, placeholder }: IModalFormInputNumber<T>) => {
	return (
		<div className="input">
			<label htmlFor={name} className="input__label">
				{label}
			</label>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<InputNumber required={true} className="input__number" id={name} placeholder={placeholder} value={value} onChange={onChange} />
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

export { ModalFormInputNumber };
