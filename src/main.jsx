/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

// import App from "./App.jsx";
// import Layout from "./components/Layout/Layout.jsx";
// import Projet from "./components/Projet/Projet.jsx";
// import Contact from "./components/Contact/Contact.jsx";
// import About from "./components/About/About.jsx";
// import Experience from "./components/Experience/Experience.jsx";

const App = React.lazy(() => import("./App"));
const About = React.lazy(() => import("./components/About/About.jsx"));
const Experience = React.lazy(() =>
  import("./components/Experience/Experience.jsx")
);
const Projet = React.lazy(() => import("./components/Projet/Projet.jsx"));
const Contact = React.lazy(() => import("./components/Contact/Contact.jsx"));
const Layout = React.lazy(() => import("./components/Layout/Layout.jsx"));

const AppLayout = () => {
  return (
    <Layout>
      <React.Suspense fallback={<h1 className="text-white">Loading ... </h1>}>
        <Outlet />
      </React.Suspense>
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "about", element: <About /> },
      { path: "experience", element: <Experience /> },
      { path: "projets", element: <Projet /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
