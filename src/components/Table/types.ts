import type { ColumnsType } from 'antd/es/table';

export interface ITable<T> {
	data: T[];
	columns: ColumnsType<T>;
	bordered?: boolean;
	paginationPageSize?: number;
}

export type ITableOptions = {
	PAGINATION: {
		PAGE_SIZE: number;
	};
	SIZE: 'small' | 'middle' | 'large' | undefined;
	EMPTY_TABLE_DESCRIPTION: string;
	SCROLL:
		| ({
				x?: string | number | true | undefined;
				y?: string | number | undefined;
		  } & {
				scrollToFirstRowOnChange?: boolean | undefined;
		  })
		| undefined;
};
