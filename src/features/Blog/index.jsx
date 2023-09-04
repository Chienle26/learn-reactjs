import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

BlogFeature.propTypes = {};

function BlogFeature(props) {
  return (
    <Box pt={4}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Box>
  );
}

export default BlogFeature;
