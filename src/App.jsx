import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Hero from "./features/Hero";
import Projects from "./features/Projects";
import About from "./features/About";
import Connect from "./features/Connect";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Router>
      <main className="bg-black min-h-screen">
        {/* Navbar is always visible */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <About />
                <Connect />
              </>
            }
          />

          {/* About Me Page */}
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
