import { useContext } from 'react';
import { TableDataContext } from '../context/TableDataContext';

const useTableData = () => {
	const context = useContext(TableDataContext);

	if (!context) {
		throw new Error('useTableData must be used within a TableDataProvider');
	}

	return context;
};

export { useTableData };
