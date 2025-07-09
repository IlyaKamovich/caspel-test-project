import { DatePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import { type Path, type Control, Controller, type FieldValues } from 'react-hook-form';
import locale from 'antd/locale/ru_RU';

export interface IModalFormDatePicker<T extends FieldValues> {
	name: Path<T>;
	control: Control<T>;
	label: string;
	placeholder: string;
}

const ModalFormDatePicker = <T extends FieldValues>({ name, control, label, placeholder }: IModalFormDatePicker<T>) => {
	return (
		<div className="input">
			<label htmlFor={name} className="input__label">
				{label}
			</label>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<ConfigProvider locale={locale}>
						<DatePicker placeholder={placeholder} id={name} value={dayjs(value)} onChange={onChange} allowClear={false} />
					</ConfigProvider>
				)}
			/>
		</div>
	);
};

export { ModalFormDatePicker };
