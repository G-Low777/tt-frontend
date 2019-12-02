import React from "react";
import { Redirect } from "react-router";

import Unauthorized from "../layouts/Unauthorized";

import { auth, authLogin, root } from "./path";

import Login from "../containers/Login";
import Auth from "../containers/Auth";

import { IRoutes } from "./types";

const unauthorized: IRoutes = {
  key: "root",
  path: root,
  component: Unauthorized,
  childRoutes: [
    {
      key: "auth",
      path: auth,
      component: Auth,
      childRoutes: [
        {
          key: "login",
          path: authLogin,
          title: "Диагностика",
          component: Login,
        },
        {
          key: "redirect-auth",
          path: auth,
          component() {
            return <Redirect key="redirect" to={authLogin} />;
          }
        },
      ]
    },
    {
      key: "redirect-root",
      path: root,
      component() {
        return <Redirect key="redirect" to={auth} />;
      }
    },
  ]
};

export default unauthorized;
