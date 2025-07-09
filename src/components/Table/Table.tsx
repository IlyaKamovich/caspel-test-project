import { Empty, Table as AntdTable } from 'antd';
import type { ITable } from './types';
import { TABLE_OPTIONS } from './constants';

const Table = <T, _>({ data, columns, bordered = false, paginationPageSize = TABLE_OPTIONS.PAGINATION.PAGE_SIZE }: ITable<T>) => {
	if (!data.length) return <Empty description={TABLE_OPTIONS.EMPTY_TABLE_DESCRIPTION} />;

	return (
		<AntdTable
			size={TABLE_OPTIONS.SIZE}
			scroll={TABLE_OPTIONS.SCROLL}
			pagination={{ pageSize: paginationPageSize }}
			bordered={bordered}
			columns={columns}
			dataSource={data}
		/>
	);
};

export { Table };
