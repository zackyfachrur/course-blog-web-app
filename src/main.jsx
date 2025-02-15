import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/Input.css";
import "./css/Output.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPages from "./Views/LoginPage";
import RegisterPages from "./Views/RegisterPage";
import HomePages from "./Views/HomePage";
import CreatePostingans from "./Service/CreatePostingan";
import EditPostingans from "./Service/EditPostingan";
import "../node_modules/remixicon/fonts/remixicon.css";
import { store } from "./Store/Store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "/register",
    element: <RegisterPages />,
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
