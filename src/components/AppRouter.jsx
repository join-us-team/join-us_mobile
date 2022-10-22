import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./shared/Header";

import Home from "../pages/Home";
import JoinMatching from "../pages/JoinMatching";
import RandomMatching from "../pages/RandomMatching";
import MatchingStatus from "../pages/MatchingStatus";
import SignUp from "../pages/SignUp";
import Footer from "./shared/Footer";


function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-matching" element={<JoinMatching />} />
        <Route path="/random-matching" element={<RandomMatching />} />
        <Route path="/matching-status" element={<MatchingStatus />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;