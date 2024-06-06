import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { lazyImport } from "src/utils/lazyImport";
import { MainLayout } from "src/components/layout/MainLayout";

import "./style.scss";
import { ROUTES } from "src/utils/constants";

const { Home } = lazyImport(() => import("src/pages/Home/"), "Home");

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "",
    element: <App />,
    children: [
      { path: ROUTES.PROTECTED.HOME.INDEX, element: <Home /> },
      {
        path: ROUTES.PROTECTED.FILE_DRIVER.INDEX,
        children: [
          {
            path: ROUTES.PROTECTED.FILE_DRIVER.UPLOAD,
            element: <div>upload file</div>,
          },
        ],
      },
      { path: ROUTES.PROTECTED.DASHBOARD.INDEX, element: <div>dashboard</div> },
    ],
  },
  {
    path: ROUTES.PRIVATE.LOGIN.INDEX,
    element: <Navigate to={`/${ROUTES.PROTECTED.HOME.INDEX}`} />,
  },
];
