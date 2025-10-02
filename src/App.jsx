import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import ReplayCast from "./pages/ReplayCast";
import MyBest from "./pages/MyBest";
import Profile from "./pages/Profile";
import Cheese from "./pages/Cheese";
import Track from "./pages/Track";
import { GetEmoji } from "./components/GetEmoji";

function App() {
  const routeArray = [
    { path: "/", element: <Homepage /> },
    { path: "ReplayCast", element: <ReplayCast /> },
    { path: "MyBest", element: <MyBest /> },
    { path: "Profile", element: <Profile /> },
    { path: "Cheese", element: <Cheese /> },
    { path: "Track", element: <Track /> },
    { path: "*", element: <Page404 /> },
    { path: "getEmoji", element: <GetEmoji /> },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routeArray.map(({ path, element }) => (
            <Route path={path} key={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
