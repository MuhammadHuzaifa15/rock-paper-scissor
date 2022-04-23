import React from 'react';
import { Table as AntdTable } from 'antd';

import { ITableProps } from './types';

const Table = function ({
  columns, data, loading, pagination, expandable, style,
}: ITableProps) {
  return (
    <AntdTable
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={pagination}
      expandable={expandable}
      style={style}
      scroll={{
        x: true,
      }}
    />
  );
};

export default Table;
