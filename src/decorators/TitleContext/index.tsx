import { createContext, Dispatch, SetStateAction } from "react";

type TTitleContext = [string, Dispatch<SetStateAction<string>>];

const TitleContext = createContext<TTitleContext>([
  "",
  () => {},
]);

export default TitleContext;
