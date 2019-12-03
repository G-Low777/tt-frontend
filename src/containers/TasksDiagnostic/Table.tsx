import React, { useState } from "react";
import { Table as AntTable } from "antd";

import { ITableProps, TTableTask } from "./types";
import TableActions from "./TableActions";
import columns from "./columns";

const Table: React.FC<ITableProps> = ({ tasks, loading }) => {
  const [selectedRowKeys, onSelectedRowKeysChange] = useState<string[] | number[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectedRowKeysChange,
  };

  return (
    <>
      <TableActions key="table-actions" />
      <AntTable<TTableTask>
        key="table"
        rowSelection={rowSelection}
        columns={columns}
        size="middle"
        loading={loading}
        dataSource={tasks}
      />
    </>
  );
};

export default Table;
