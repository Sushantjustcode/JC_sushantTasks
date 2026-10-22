import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/General/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles/new" element={<Home />} />
        <Route path="/profiles/:id" element={<Home />} />
        <Route path="/profiles/:id/edit" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
