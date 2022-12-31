import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import "./components/assets/css/style.css";
import Blogs from "./components/Blogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/blogs" element={<Blogs />} />

        <Route path="/*" element={<Navigate to={"/home"} />} />
      </Routes>
    </Router>
  );
}

export default App;
