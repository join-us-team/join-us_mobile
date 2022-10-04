import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./shared/Header";
import Home from "../pages/Home";
import JoinMatching from "../pages/JoinMatching";
import MatchingStatus from "../pages/MatchingStatus";
import SignUp from "../pages/SignUp";


function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<JoinMatching />} />
        <Route path="/" element={<MatchingStatus />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;