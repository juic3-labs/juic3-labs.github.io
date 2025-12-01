import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AwddVipPage from "./AwddVipPage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/awdd-31vip" element={<AwddVipPage />} />
    </Routes>
  );
};
export default App;
