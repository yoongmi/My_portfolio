import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
