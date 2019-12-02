import { useContext } from "react";

import TitleContext from "../decorators/TitleContext";
import { IRoutes } from "../routes/types";

function useTitle(route: IRoutes): void {
  const titleState = useContext(TitleContext);

  if (route.title) {
    titleState[1](route.title);
  }
}

export default useTitle;
