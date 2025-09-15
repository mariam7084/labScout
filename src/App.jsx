// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Internships from "./pages/Internships";
import About from "./pages/About";

export default function App() {
  return (
    <>
      {/* <Analytics /> */}
      <Box minH="100vh" display="flex" flexDirection="column" bgGradient="linear(to-r, gray.900, purple.900)" color="white">
        <Header />
        <Box as="main" flex="1" py={6}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
