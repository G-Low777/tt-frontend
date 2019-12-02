import React, { useState } from "react";
import { Table, Tabs, Button } from "antd";
import { map } from "lodash";
import moment from "moment";

import useTitle from "../../hooks/useTitle";

import { Task, useGetTasksQuery } from "../../graphql/generated";

import TableActions from "./TableActions";
import { IProps } from "./types";
import { Container, TabLine, StackText, TopText, BottomText, RowText } from "./styles";

const TabPane = Tabs.TabPane;
const columns = [
  {
    title: "№ / ID",
    render(text: any, record: Task) {
      return (
        <StackText key="stack">
          <TopText key="top">{record.id}</TopText>
          <BottomText key="bottom">{record.number}</BottomText>
        </StackText>
      );
    }
  },
  {
    title: "Адрес",
    render(text: any, record: Task) {
      return (
        <StackText key="stack">
          <TopText key="top">{record.address}</TopText>
          <BottomText key="bottom">{record.mf}</BottomText>
        </StackText>
      );
    }
  },
  {
    title: "Название прибора",
    render(text: any, record: Task) {
      return (
        <StackText key="stack">
          <TopText key="top">{record.device} ({record.deviceId})</TopText>
          <BottomText key="bottom">{record.message}</BottomText>
        </StackText>
      );
    }
  },
  {
    title: "Дата создания/закрытия",
    render(text: any, record: Task) {
      const creationTime = moment(record.creationTime);

      return (
        <StackText key="stack">
          <RowText key="creation-time">
            <TopText key="top">{creationTime.format("DD.MM.YYYY")}</TopText>
            <BottomText key="bottom">{creationTime.format("HH:mm:ss")}</BottomText>
          </RowText>
        </StackText>
      );
    }
  },
  {
    title: "",
  }
];

function getTasks(tasks: Task[]): (Task & { key: string })[] {
  return map<Task, Task & { key: string }>(tasks, task => ({
    ...task,
    key: `${task.__typename}:${task.id}`,
  }))
}

const TaskDiagnostic: React.FC<IProps> = props => {
  useTitle(props.route);
  const tasks = useGetTasksQuery({ fetchPolicy: "cache-and-network" });
  const [selectedRowKeys, onSelectedRowKeysChange] = useState<string[] | number[]>([]);
  const parsedTasks = getTasks(tasks.data ? tasks.data.tasks || [] : []);
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectedRowKeysChange,
  };

  return (
    <Container key="container">
      <TabLine key="tab-line" />
      <Tabs key="tabs" defaultActiveKey="all" size="large">
        <TabPane key="all" tab={`Все задачи (${parsedTasks.length})`}>
          <TableActions key="table-actions" />
          <Table<Task>
            key="table"
            rowSelection={rowSelection}
            columns={columns}
            size="middle"
            loading={tasks.loading}
            dataSource={parsedTasks}
          />
        </TabPane>
        <TabPane key="wrong" tab={`Ошибочные`}>
          <TableActions key="table-actions" />
        </TabPane>
        <TabPane key="correct" tab={`Правильные`}>
          <TableActions key="table-actions" />
        </TabPane>
        <TabPane key="resolved" tab={`Исправленные`}>
          <TableActions key="table-actions" />
        </TabPane>
      </Tabs>
    </Container>
  );
};

export default TaskDiagnostic;
