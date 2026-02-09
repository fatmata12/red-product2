import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ListeHotels from "./pages/ListeHotels";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/hotels" element={<ListeHotels />} />
      </Routes>
    </div>
  );
}

export default App;
