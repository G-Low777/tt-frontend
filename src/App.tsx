import React, { useEffect, useState } from "react";
import { renderRoutes } from "react-router-config";

import TitleContext from "./decorators/TitleContext";
import { useGetTokenQuery } from "./graphql/generated";
import unauthorized from "./routes/unauthorized";
import authorized from "./routes/authorized";
import { baseTitle } from "./utils/const";

const unauthRoutes = [unauthorized];
const authRoutes = [authorized];

let oldToken: string | undefined | null = undefined;

const App: React.FC = () => {
  const token = useGetTokenQuery();
  const titleState = useState(baseTitle);
  const [isAuthorized, setAuthorized] = useState(false);
  const tokenValue = token.data && token.data.getToken && token.data.getToken.value;

  useEffect(() => {
    let title = titleState[0];

    if (title === baseTitle) {
      title = "";
    }

    document.title = title + (title && title.length > 0 ? " – " : "") + baseTitle;
  }, [titleState[0]]);

  useEffect(() => {
    if (oldToken !== tokenValue) {
      oldToken = tokenValue;

      setAuthorized(!!tokenValue);
    }
  }, [tokenValue]);

  return (
    <TitleContext.Provider value={titleState}>
      {token.loading ? null : renderRoutes(isAuthorized ? authRoutes : unauthRoutes)}}
    </TitleContext.Provider>
  );
};

export default App;
