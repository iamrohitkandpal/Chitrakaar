import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home, CreateImage } from "./pages";
import { logopi } from "./assets";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { Footer } from "./components";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-dark-900">
        <BrowserRouter>
          <header className="w-full flex justify-between items-center px-4 sm:px-8 py-4 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 sticky top-0 z-50 transition-all duration-300">
            <Link to="/" className="group">
              <img 
                src={logopi} 
                alt="Chitrakaar logo" 
                className="w-44 object-contain transition-all duration-300 group-hover:scale-105 logo-invert"
              />
            </Link>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link 
                to="/create-image" 
                className="font-inter font-medium bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 dark:from-primary-500 dark:to-primary-600 dark:hover:from-primary-600 dark:hover:to-primary-700 text-white px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow dark:hover:shadow-glow-dark focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800"
              >
                Create
              </Link>
            </div>
          </header>

          <main className="sm:p-8 px-4 py-8 w-full bg-gray-50 dark:bg-dark-900 min-h-[calc(100vh-81px)] transition-colors duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-image" element={<CreateImage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
