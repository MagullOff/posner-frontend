import { Home } from "@mui/icons-material";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Game } from "./views/game";
import { Stats } from "./views/stats";

export const App = () => {
  const location = useLocation();

  const locationArr = location.pathname?.split("/") ?? [];
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={locationArr[1]}>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Game />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </AnimatePresence>
  );
};
