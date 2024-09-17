import React from "react";
import Home from "./components/Home";
import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import MatchDetail from "./components/MatchDetail";
import Navbar from "./components/Navbar";
import PointsTable from "./components/PointsTable";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/news",
        element: <h1>Coming soon...</h1>
      },
      {
        path: "/stats",
        element:  <h1>Coming soon...</h1>
      },
      {
        path: "/players",
        element:  <h1>Coming soon...</h1>
      },
      {
        path: "/matchDetail/:id",
        element:  <MatchDetail />
      },
      {
        path: "/pointsTable",
        element:  <PointsTable />
      },
    ]
  }
])

const App = () => {
  // return (
  //   <div className=" min-h-screen mx-auto bg-gray-900 text-white overflow-x-hidden w-full">
  //     <Routes>
  //       <Route path="/" element={<Navbar />}>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/pointsTable" element={<PointsTable />} />
  //         <Route path="/news" element={<h1>Coming soon...</h1>} />
  //         <Route path="/stats" element={<h1>Coming soon...</h1>} />
  //         <Route path="/players" element={<h1>Coming soon...</h1>} />
  //         <Route path="/matchDetail/:id" element={<MatchDetail />} />
  //       </Route>
  //     </Routes>
  //   </div>
  // );

  return (
    <RouterProvider router={router} />
  )
};

export default App;
