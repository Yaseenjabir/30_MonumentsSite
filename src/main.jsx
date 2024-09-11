import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainComp from "./_components/Main/Main.jsx";
import Spirographs from "./_components/Main/Spirograph/Spirographs.jsx";
import InstrumentFrameDrags from "./_components/Main/InstrumentFrameDrags/InstrumentFrameDrags.jsx";
import TapeLoops from "./_components/Main/TapeLoops/TapeLoops.jsx";
import SelfPortrait from "./_components/Main/SelfPortrait/SelfPortrait.jsx";
import Objects from "./_components/Main/Objects/Objects.jsx";
import { ContextProvider } from "../context-Api/ContextAPI.jsx";
import Profile from "./_components/Main/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <App />
      </ContextProvider>
    ),
    children: [
      { path: "/", element: <MainComp /> },
      { path: "/spirographs", element: <Spirographs /> },
      { path: "/Instrument-frame-drags", element: <InstrumentFrameDrags /> },
      { path: "/tape-loops", element: <TapeLoops /> },
      { path: "/self-portrait", element: <SelfPortrait /> },
      { path: "/objects", element: <Objects /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
