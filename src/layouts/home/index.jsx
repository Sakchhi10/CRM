import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HomeLayout = () => (
  <Box
    overflow="hidden"
    sx={{
      flexGrow: 1,
      overflow: "auto",
      minHeight: "100vh",
    }}
  >
    <Navbar />
    <Outlet />
    <Footer />
  </Box>
);

export default HomeLayout;
