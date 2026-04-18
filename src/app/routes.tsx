import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Checklist } from "./pages/Checklist";
import { Assistant } from "./pages/Assistant";
import { Profile } from "./pages/Profile";
import { Help } from "./pages/Help";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "dashboard", Component: Dashboard },
      { path: "checklist", Component: Checklist },
      { path: "assistant", Component: Assistant },
      { path: "profile", Component: Profile },
      { path: "help", Component: Help },
    ],
  },
]);