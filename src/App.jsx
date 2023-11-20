import "./App.css";
import Navbar from "./Views/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Views/Dashboard";
import Login from "./Views/Login";
import Register from "./Views/Register";
import FooterWeb from "./Views/FooterWeb";
import Profile from "./Views/Profile"
import Career from "./Views/Career"
import Courses from "./Views/Courses"
import Grade from "./Views/Grade"
import LandingPage from "./Views/LandingPage"
import Tuition from "./Views/Tuition"

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/" element={<LandingPage />} />
                </Routes>
                <FooterWeb />
            </Router>
        </>
    );
}

export default App;
