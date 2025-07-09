import React, { useMemo, useReducer } from 'react';
import type { ITableDataState, ITableDataAction, ITableDataContext } from '../types';

const defaultState: ITableDataState = {
	isOpenModal: false,
	tableData: [],
	searchQuery: '',
	editingTableItem: null,
};

const reducer = (state: ITableDataState, action: ITableDataAction): ITableDataState => {
	switch (action.type) {
		case 'OPEN_MODAL':
			return {
				...state,
				isOpenModal: true,
				editingTableItem: null,
			};
		case 'CLOSE_MODAL':
			return {
				...state,
				isOpenModal: false,
			};
		case 'ADD':
			return {
				...state,
				tableData: [...state.tableData, action.payload],
			};
		case 'DELETE':
			return {
				...state,
				tableData: state.tableData.filter(({ key }) => key !== action.payload),
			};
		case 'START_UPDATE':
			return {
				...state,
				isOpenModal: true,
				editingTableItem: action.payload,
			};
		case 'UPDATE':
			return {
				...state,
				tableData: state.tableData.map((item) => (item.key === action.payload.key ? action.payload : item)),
				editingTableItem: null,
			};
		case 'SET_SEARCH_QUERY':
			return {
				...state,
				searchQuery: action.payload,
			};
		default:
			return state;
	}
};

const TableDataContext = React.createContext({} as ITableDataContext);

const TableDataProvider = ({ children }: React.PropsWithChildren) => {
	const [state, dispatch] = useReducer(reducer, defaultState);

	const filteredData = useMemo(() => {
		if (!state.searchQuery) return state.tableData;

		return state.tableData.filter(({ name }) => name.toLowerCase().includes(state.searchQuery.toLowerCase()));
	}, [state.tableData, state.searchQuery]);

	return <TableDataContext.Provider value={{ state, dispatch, filteredData }}>{children}</TableDataContext.Provider>;
};

export { TableDataContext, TableDataProvider };
