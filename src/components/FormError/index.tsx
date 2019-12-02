import React from "react";

import { Container } from "./styles";

const FormError: React.FC = ({ children }) => {
  return <Container key="container">{children}</Container>;
};

export default FormError;