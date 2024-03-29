import React, { useMemo } from "react";
import { Tabs } from "antd";

import useTitle from "../../hooks/useTitle";

import { GetTasksQuery, TaskType, useGetTasksQuery } from "../../graphql/generated";

import { Container, TabLine } from "./styles";
import { IProps, TParsedTasks, TTableTask } from "./types";
import Table from "./Table";

const TabPane = Tabs.TabPane;

function parseTasks(tasksQuery?: GetTasksQuery): TParsedTasks {
  const parsedTasks: TParsedTasks = {
    all: [],
    wrong: [],
    correct: [],
    solved: [],
  };

  if (!tasksQuery || !tasksQuery.tasks || tasksQuery.tasks.length === 0) {
    return parsedTasks;
  }

  const tasks = tasksQuery.tasks;
  const tasksCount = tasks.length;
  for (let i: number = 0; i < tasksCount; i++) {
    const task = tasks[i];
    const parsedTask: TTableTask = {
      ...task,
      key: task.id,
    };

    parsedTasks.all.push(parsedTask);
    switch (task.type) {
      case (TaskType.Error): parsedTasks.wrong.push(parsedTask); break;
      case (TaskType.Correct): parsedTasks.correct.push(parsedTask); break;
      case (TaskType.Solved): parsedTasks.solved.push(parsedTask); break;
    }
  }

  return parsedTasks;
}

const TaskDiagnostic: React.FC<IProps> = props => {
  useTitle(props.route);
  const tasks = useGetTasksQuery({ fetchPolicy: "cache-and-network"});
  const parsedTasks = useMemo<TParsedTasks>(() => parseTasks(tasks.data), [tasks.data]);

  return (
    <Container key="container">
      <TabLine key="tab-line" />
      <Tabs key="tabs" defaultActiveKey="all" size="large">
        <TabPane key="all" tab={`Все задачи (${parsedTasks.all.length})`}>
          <Table key="table" tasks={parsedTasks.all} loading={tasks.loading} />
        </TabPane>
        <TabPane key="wrong" tab={`Ошибочные (${parsedTasks.wrong.length})`}>
          <Table
            key="table"
            tasks={parsedTasks.wrong}
            loading={tasks.loading}
            taskTypes={TaskType.Error}
          />
        </TabPane>
        <TabPane key="correct" tab={`Правильные (${parsedTasks.correct.length})`}>
          <Table key="table" tasks={parsedTasks.correct} loading={tasks.loading} />
        </TabPane>
        <TabPane key="resolved" tab={`Исправленные (${parsedTasks.solved.length})`}>
          <Table
            key="table"
            tasks={parsedTasks.solved}
            loading={tasks.loading}
            taskTypes={TaskType.Solved}
          />
        </TabPane>
      </Tabs>
    </Container>
  );
};

export default React.memo(TaskDiagnostic);
