import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "./views/about";
import { Game } from "./views/game";
import { Home } from "./views/home";
import { Stats } from "./views/stats";

export const App = () => {
  const location = useLocation();

  const locationArr = location.pathname?.split("/") ?? [];
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={locationArr[1]}>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Game />} />
        <Route path="/about" element={<About />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/*" element={<h1>404!</h1>} />
      </Routes>
    </AnimatePresence>
  );
};
