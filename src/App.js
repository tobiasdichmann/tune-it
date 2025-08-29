import { Routes, Route } from "react-router-dom";

// STYLES
import "./styles/app.scss";
import "./styles/header.scss";

// PAGES
import Home from "./components/pages/Home";
import Book from "./components/pages/Book";
import Singers from "./components/pages/Singers";
import Songs from "./components/pages/Songs";
import About from "./components/pages/About";

// COMPONENTS
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/singers" element={<Singers />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
