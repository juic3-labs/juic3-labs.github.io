import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import VipPage from "./VipPage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/awdd-31vip" element={<VipPage />} />
    </Routes>
  );
};
export default App;
