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
import Recipie from "./components/Projects/RecipieRecommendation/Recipie";
import Datatable from "./components/Datatable";
import Blog from "./components/Projects/Blog";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/project/1" element={<Recipie />} />
        <Route exact path="/datatable" element={<Datatable />} />

        <Route exact path="/blogs" element={<Blogs />} />

        {/* Dynamic Blog route with a parameter */}
        <Route exact path="/blog/:id" element={<Blog />} />

        <Route path="/*" element={<Navigate to={"/home"} />} />
      </Routes>
    </Router>
  );
}

export default App;
