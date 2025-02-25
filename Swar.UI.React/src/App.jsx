import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "react-hot-toast";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Library from "./pages/Library";
import Playlist from "./pages/Playlist";
import Landing from "./pages/Landing";

import { PlayerProvider } from "./contexts/PlayerContext";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate}>
      <SkeletonTheme baseColor="#6B7280" highlightColor="#4B5563">
        <PlayerProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="/player" element={<Player />} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/library" element={<Library />} />
                <Route path="/playlist/:id" element={<Playlist />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Toaster
              toastOptions={{
                style: {
                  background: "#5c5470",
                  color: "#fff",
                },
              }}
            />
          </Layout>
        </PlayerProvider>
      </SkeletonTheme>
    </HeroUIProvider>
  );
};

export default App;
