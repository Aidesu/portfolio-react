import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./views/layouts/Header";
import Footer from "./views/layouts/Footer";
import HomeView from "./views/home/HomeView";
import About from "./views/about/About";
import Projects from "./views/projects/Projects";
import Skills from "./views/skills/Skills";
import Contact from "./views/contact/Contact";
import OneProject from "./views/projects/OneProject";
import NotFound from "./views/notFound/notFound";

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
                <Route path="/project/:id" element={<OneProject />} />
                <Route path="/project/:id" element={<OneProject />} />
                <Route path="/*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
