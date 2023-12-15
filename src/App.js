import React from "react";
import Welcome from "./components/Welcome";
import NewPage from "./components/NewPage";
import NewPage2 from "./components/NewPage2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/1" element={<NewPage />} />
        <Route path="/2" element={<NewPage2 />} />
      </Routes>
    </Router>
  );
};

export default App;
