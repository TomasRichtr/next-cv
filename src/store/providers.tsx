"use client";

import {
  useEffect,
} from "react";
import {
  Provider,
} from "react-redux";

import {
  useAppDispatch,
} from "./hooks";
import {
  setCurrentPath,
} from "./slices/appSlice";

import {
  store,
} from "./index";

const ReduxInitializer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const currentPathCookie = cookies.find((cookie) => cookie.startsWith("currentPath="));
    if (currentPathCookie) {
      const currentPath = currentPathCookie.split("=")[1];
      dispatch(setCurrentPath(decodeURIComponent(currentPath)));
    }
  }, [dispatch]);

  return (
    <>
      {children}
    </>
  );
};

export const ReduxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Provider
      store={store}
    >
      <ReduxInitializer>
        {children}
      </ReduxInitializer>
    </Provider>
  );
};

export default ReduxProvider;
