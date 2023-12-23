import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DashPage from "./Pages/DashPage";
import ShopPage from "./Pages/ShopPage";
import BoardPage from "./Pages/BoardPage";

function App() {
  return (
    <Routes>
      <Route path="/reactPractice/" element={<HomePage />} />
      <Route path="/reactPractice/Dash" element={<DashPage />} />
      <Route path="/reactPractice/Shop" element={<ShopPage />} />
      <Route path="/reactPractice/Board" element={<BoardPage />} />
    </Routes>
  );
}

export default App;
