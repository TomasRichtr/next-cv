"use client";

import {
  ReactNode,
  useEffect,
} from "react";
import {
  Provider,
} from "react-redux";

import {
  store,
} from "@/store";
import {
  useAppDispatch,
} from "@/store/hooks";
import {
  setCurrentPath,
} from "@/store/slices/appSlice";


const ReduxInitializer = ({
  children,
}: {
  children: ReactNode;
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
  children: ReactNode;
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
