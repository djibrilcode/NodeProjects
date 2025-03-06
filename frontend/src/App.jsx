import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePage from "./pages/Create";
import HomePage from "./pages/Home";
import { Box } from "@chakra-ui/react";

function App() {

  return (
    <Box >
      <Navbar/>
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
    
  )
}

export default App
