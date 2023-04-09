import React, { useState } from "react";
import Menubar from "../components/Menubar";
import Dashboard from "./Dashboard";

export default function MainApp() {
  const [page, setPage] = useState("dashboard");
  const [pages, setPages] = useState([
    "dashboard",
    "courses",
    "discussion",
    "payment",
  ]);
  return (
    <>
      <Menubar page={page} setPage={setPage} pages={pages} />
      <div className="main-app-wrapper">
        <Dashboard />
      </div>
    </>
  );
}
