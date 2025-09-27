import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import ReplayCast from "./pages/ReplayCast";
import MyBest from "./pages/MyBest";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="ReplayCast" element={<ReplayCast />} />
          <Route path="MyBest" element={<MyBest />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
