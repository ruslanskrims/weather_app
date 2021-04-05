import React from "react";
import { Provider } from "react-redux";
import { store } from "./init/store";
import * as dayjs from "dayjs";
import { Main } from "./views/Main";
import "dayjs/locale/ru";
dayjs.locale("ru");

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
