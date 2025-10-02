import { useState } from "react";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import UserDetails from "./pages/UserDetails.jsx";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
