import React from "react";
import { renderRoutes } from "react-router-config";

import { IProps } from "./types";

const Auth: React.FC<IProps> = props => renderRoutes(props.route.childRoutes);

export default Auth;
