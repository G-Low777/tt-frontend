import React from "react";
import { Redirect } from "react-router";

import { root, tasksDiagnostic } from "./path";
import Authorized from "../layouts/Authorized";
import TasksDiagnostic from "../containers/TasksDiagnostic";

import { IRoutes } from "./types";

const authorized: IRoutes = {
  key: "root",
  path: root,
  component: Authorized,
  childRoutes: [
    {
      key: "tasks-diagnostic",
      path: tasksDiagnostic,
      title: "Диагностика задач",
      component: TasksDiagnostic,
    },
    {
      key: "redirect-root",
      path: root,
      component() {
        return <Redirect key="redirect" to={tasksDiagnostic} />;
      }
    },
  ],
};

export default authorized;