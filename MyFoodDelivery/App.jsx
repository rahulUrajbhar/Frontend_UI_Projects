import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import CardList from "./components/CardList";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import {Error}  from "./components/Error";

export default function App() {
  return (
    <>
      <Header />
      <Outlet/>
    </>                                                                                                                                                                                            
  );
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <CardList/>
      },
      {
        path:"/About-Us",
        element: <About/>
      },
      {
        path:"/Contact-Us",
        element: <About/>
      },

    ],
    errorElement: <Error />
  },

])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
