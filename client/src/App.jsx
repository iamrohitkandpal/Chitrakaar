import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home, CreateImage } from "./pages";
import { logopi } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between p-4 items-center bg-white sm:px-8 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logopi} alt="logo" className="w-44 object-contain"/>
        </Link>

        <Link to="/create-image" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-lg">Create</Link>
      </header>

      <main className="sm:p-8 px-4 py-2 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-image" element={<CreateImage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
