import dayjs from 'dayjs';
import { Button, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import type { TableDataItem } from '../types';

const getTableColumns = (handleEdit: (item: TableDataItem) => void, handleDelete: (key: string) => void): ColumnsType<TableDataItem> => {
	return [
		{
			title: 'Имя',
			dataIndex: 'name',
			key: 'name',
			sorter: (a, b) => a.name.localeCompare(b.name),
		},
		{
			title: 'Дата',
			dataIndex: 'date',
			key: 'date',
			render: (date) => <span>{dayjs(date).format('YYYY-DD-MM')}</span>,
			sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix(),
		},
		{
			title: 'Значение',
			dataIndex: 'value',
			key: 'value',
			sorter: (a, b) => a.value - b.value,
		},
		{
			title: 'Действия',
			key: 'actions',
			render: (_, item) => (
				<Space>
					<Button icon={<EditOutlined />} onClick={() => handleEdit(item)} type="dashed" aria-label="Редактировать" />
					<Button icon={<DeleteOutlined />} onClick={() => handleDelete(item.key)} danger aria-label="Удалить" />
				</Space>
			),
			width: 80,
		},
	];
};

export { getTableColumns };
