import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddReview from "./pages/AddReview";
import ExploreColleges from "./pages/ExploreColleges";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addreview" element={<AddReview />} />
        <Route path="/explore" element={<ExploreColleges />} />
      </Routes>
    </Router>
  );
}

export default App;
