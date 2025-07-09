import type { ITableDataAction, TableDataItem } from '../types';

const openModal = (): ITableDataAction => ({
	type: 'OPEN_MODAL',
});

const closeModal = (): ITableDataAction => ({
	type: 'CLOSE_MODAL',
});

const addNewTableDataItem = (newDataItem: TableDataItem): ITableDataAction => ({
	type: 'ADD',
	payload: newDataItem,
});

const removeTableDataItem = (key: TableDataItem['key']): ITableDataAction => ({
	type: 'DELETE',
	payload: key,
});

const handleEditTableDataItem = (tableDataItem: TableDataItem): ITableDataAction => ({
	type: 'START_UPDATE',
	payload: tableDataItem,
});

const updateTableDataItem = (updatedDataItem: TableDataItem): ITableDataAction => ({
	type: 'UPDATE',
	payload: updatedDataItem,
});

const searchTableDataItem = (event: React.ChangeEvent<HTMLInputElement>): ITableDataAction => ({
	type: 'SET_SEARCH_QUERY',
	payload: event.target.value,
});

export { openModal, closeModal, addNewTableDataItem, removeTableDataItem, handleEditTableDataItem, updateTableDataItem, searchTableDataItem };
