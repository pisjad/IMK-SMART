import { Link } from "react-router-dom";
const LandingPage = () => {
    return (
        <>
            <Link to="/Dashboard">
                
                <div className="p-6 h-screen bg-hijau items-center flex">
                    ini Landing ke Dashboard
                </div>
            </Link>
        </>
    );
};

export default LandingPage;
