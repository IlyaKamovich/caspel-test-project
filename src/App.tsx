import { Fragment, useMemo } from 'react';
import { Button, Input, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { SearchOutlined } from '@ant-design/icons';
import { Modal } from './components/Modal';
import { Table } from './components/Table';
import type { TableDataItem } from './types';
import { ModalForm } from './components/ModalForm';
import { useTableData } from './hooks/useTableData';
import { getTableColumns } from './helpers/get-table-columns';
import { closeModal, handleEditTableDataItem, openModal, removeTableDataItem, searchTableDataItem } from './actions/TableDataActions';

function App() {
	const { state, dispatch, filteredData } = useTableData();

	const onOpenModal = () => {
		dispatch(openModal());
	};

	const onCloseModal = () => {
		dispatch(closeModal());
	};

	const handleEdit = (tableDataItem: TableDataItem) => {
		dispatch(handleEditTableDataItem(tableDataItem));
	};

	const handleDelete = (key: TableDataItem['key']) => {
		dispatch(removeTableDataItem(key));
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(searchTableDataItem(event));
	};

	const columns = useMemo(() => getTableColumns(handleEdit, handleDelete), [handleEdit, handleDelete]);

	return (
		<Fragment>
			<Layout>
				<Content className="content">
					<div className="content__wrapper">
						<Button className="button" size="large" type="primary" onClick={onOpenModal}>
							Добавить
						</Button>
						<Input size="large" placeholder="Поиск" prefix={<SearchOutlined />} value={state.searchQuery} onChange={handleSearch} />
					</div>
					<Table data={filteredData} columns={columns} paginationPageSize={5} bordered={true} />
				</Content>
			</Layout>
			<Modal
				title={state.editingTableItem ? 'Редактировать запись' : 'Добавить новую запись'}
				isOpen={state.isOpenModal}
				onClose={onCloseModal}
			>
				<ModalForm initialData={state.editingTableItem ? { ...state.editingTableItem } : undefined} />
			</Modal>
		</Fragment>
	);
}

export default App;
