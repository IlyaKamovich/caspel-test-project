import * as z from 'zod/v4';
import type { Dayjs } from 'dayjs';
import type { ModalFormSchema } from '../components/ModalForm';

export type TableDataItem = Omit<z.infer<typeof ModalFormSchema>, 'date'> & {
	date: Dayjs | Date;
};

export type ITableDataState = {
	isOpenModal: boolean;
	tableData: TableDataItem[];
	searchQuery: string;
	editingTableItem: TableDataItem | null;
};

export type ITableDataAction =
	| { type: 'ADD'; payload: TableDataItem }
	| { type: 'DELETE'; payload: TableDataItem['key'] }
	| { type: 'START_UPDATE'; payload: TableDataItem }
	| { type: 'UPDATE'; payload: TableDataItem }
	| { type: 'OPEN_MODAL' }
	| { type: 'CLOSE_MODAL' }
	| { type: 'SET_SEARCH_QUERY'; payload: string };

export type ITableDataContext = {
	state: ITableDataState;
	dispatch: React.Dispatch<ITableDataAction>;
	filteredData: TableDataItem[];
};
