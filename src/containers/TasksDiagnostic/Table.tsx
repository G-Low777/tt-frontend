import React, { useState, useMemo } from "react";
import { Table as AntTable } from "antd";

import { ITableProps, TTableTask } from "./types";
import TableActions from "./TableActions";
import getColumns from "./columns";
import { ColumnProps } from "antd/lib/table";

const Table: React.FC<ITableProps> = ({ tasks, loading, taskTypes }) => {
  const [selectedRowKeys, onSelectedRowKeysChange] = useState<string[] | number[]>([]);
  const columns = useMemo<ColumnProps<TTableTask>[]>(
    () => getColumns(onSelectedRowKeysChange),
    [onSelectedRowKeysChange]
  );
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectedRowKeysChange,
  };

  return (
    <>
      <TableActions
        key="table-actions"
        tasksIds={selectedRowKeys as number[]}
        taskTypes={taskTypes}
        clearSelection={() => onSelectedRowKeysChange([])}
      />
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
