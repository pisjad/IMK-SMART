import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Views/Navbar";
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
import Achievement from "./Views/Achievement"


function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Courses" element={<Courses />} />
                    <Route path="/Grade" element={<Grade />} />
                    <Route path="/Tuition" element={<Tuition />} />
                    <Route path="/Career" element={<Career />} />
                    <Route path="/Achievement" element={<Achievement />} />
                </Routes>
                <FooterWeb />
            </Router>
        </>
    );
}

export default App;
