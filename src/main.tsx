import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/global.css";
import "remixicon/fonts/remixicon.css";

// Pages
import LoginSection from "./pages/auth/LoginSection.tsx";
import RegisterSection from "./pages/auth/RegisterSection.tsx";
import HomePages from "./pages/home/index.tsx";
import CreatePostingans from "./services/CreatePostingan.tsx";
import EditPostingans from "./services/EditPostingan.tsx";

// Redux
import { store } from "./store/Store.ts";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <LoginSection />,
  },
  {
    path: "/auth/register",
    element: <RegisterSection />,
  },
  {
    path: "/",
    element: <HomePages />,
  },
  { path: "/edit-postingan", element: <EditPostingans /> },
  {
    path: "/buat-postingan",
    element: <CreatePostingans />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
