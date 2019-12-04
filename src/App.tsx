import React, { useEffect, useState } from "react";
import { renderRoutes } from "react-router-config";

import TitleContext from "./decorators/TitleContext";
import { useIsLoggedInQuery } from "./graphql/generated";
import unauthorized from "./routes/unauthorized";
import authorized from "./routes/authorized";
import { baseTitle } from "./utils/const";

const unauthRoutes = [unauthorized];
const authRoutes = [authorized];

const App: React.FC = () => {
  const loggedIn = useIsLoggedInQuery();
  const titleState = useState(baseTitle);
  const isAuthorized = loggedIn.data && loggedIn.data.isLoggedIn;

  useEffect(() => {
    let title = titleState[0];

    if (title === baseTitle) {
      title = "";
    }

    document.title = title + (title && title.length > 0 ? " – " : "") + baseTitle;
  }, [titleState[0]]);

  return (
    <TitleContext.Provider value={titleState}>
      {loggedIn.loading ? null : renderRoutes(isAuthorized ? authRoutes : unauthRoutes)}}
    </TitleContext.Provider>
  );
};

export default App;
