import { useContext, type FC, useEffect } from 'react';
import * as z from 'zod/v4';
import { Button } from 'antd';
import dayjs, { type Dayjs } from 'dayjs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { TableDataItem } from '../../types';
import { ModalFormInput } from '../ModalFormInput';
import { ModalFormDatePicker } from '../ModalFormDatePicker';
import { ModalFormInputNumber } from '../ModalFormInputNumber';
import { TableDataContext } from '../../context/TableDataContext';
import { generateRandomId } from '../../utils/generate-random-id';
import { addNewTableDataItem, closeModal, updateTableDataItem } from '../../actions/TableDataActions';

export const ModalFormSchema = z.object({
	key: z.string(),
	name: z.string().min(2, { message: 'Имя слишком короткое' }).trim(),
	date: z
		.instanceof(dayjs as unknown as typeof Dayjs)
		.or(z.date())
		.transform((val) => (val instanceof Date ? val : val.toDate())),
	value: z.number('Введите число'),
});

export interface IModalForm {
	initialData: TableDataItem | undefined;
}

const ModalForm: FC<IModalForm> = ({ initialData }) => {
	const { dispatch } = useContext(TableDataContext);

	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm<TableDataItem>({
		resolver: zodResolver(ModalFormSchema),
		defaultValues: {
			key: generateRandomId(),
			value: 0,
			name: '',
			date: new Date(),
		},
	});

	useEffect(() => {
		reset({
			key: initialData?.key ?? generateRandomId(),
			value: initialData?.value ?? 0,
			name: initialData?.name ?? '',
			date: initialData?.date ?? new Date(),
		});
	}, [initialData]);

	const onSubmit = (data: TableDataItem) => {
		if (!initialData) {
			dispatch(addNewTableDataItem(data));
		} else {
			dispatch(updateTableDataItem(data));
		}

		reset();
		dispatch(closeModal());
	};

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<ModalFormInput label="Имя *" name="name" inputType="text" placeholder="Введите имя" control={control} errors={errors.name} />
			<ModalFormDatePicker label="Дата *" name="date" placeholder="Выберите дату" control={control} />
			<ModalFormInputNumber label="Значение *" name="value" placeholder="Введите значение" control={control} errors={errors.value} />
			<Button type="primary" htmlType="submit">
				Отправить
			</Button>
		</form>
	);
};

export { ModalForm };
