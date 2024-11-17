import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./main/auth/LoginPage.tsx";
import RegisterPage from "./main/auth/RegisterPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./providers/AuthProvider.tsx";
import App from "./main/app/App.tsx";
import HomePage from "./main/app/home/HomePage.tsx";
import FilesPage from "./main/app/files/FilesPage.tsx";
import SharedPage from "./main/app/shared-with-me/SharedPage.tsx";
import RecentPage from "./main/app/recent/RecentPage.tsx";
import TrashPage from "./main/app/trash/TrashPage.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/files",
        element: <FilesPage />,
      },
      {
        path: "/shared",
        element: <SharedPage />,
      },
      {
        path: "/recent",
        element: <RecentPage />,
      },
      {
        path: "/files/trash",
        element: <TrashPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </QueryClientProvider>,
);
