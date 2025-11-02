import { Route, Routes, Link } from "react-router";
import "./App.css";
import Header from "./views/layouts/Header";
import HomeView from "./views/home/HomeView";
import About from "./views/about/About";
import Projects from "./views/projects/Projects";
import Skills from "./views/skills/Skills";
import Contact from "./views/contact/Contact";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
