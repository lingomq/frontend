import React from "react";
import { UnauthorizedHeader } from "./components/elements/unauthorizedHeader/unauthorizedHeader.jsx";
import styles from "./core/styles/root.module.scss";
import { Cookies } from "react-cookie";
import { UserRoutes } from "./components/routes/UserRoutes.jsx";
import ModalProvider from "./components/ui/modal/ModalProvider.jsx";

const cookies = new Cookies();

const App = () => {
  let locale = cookies.get("locale");
  if (locale === undefined) cookies.set("locale", "ru-RU");

  return (
    <div className={styles.root}>
      <UnauthorizedHeader />
      <ModalProvider />
      <UserRoutes />
    </div>
  );
};
export default App;
