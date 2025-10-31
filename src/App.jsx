import { Route, Routes, Link } from "react-router";
import "./App.css";
import Header from "./views/layouts/Header";
import HomeView from "./views/home/HomeView";
import About from "./views/about/About";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;
