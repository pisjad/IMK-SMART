import { Link } from "react-router-dom";
import bulbLogo from "../assets/Images/bulbLogo.svg";
import { motion } from "framer-motion";

const LandingPage = () => {
    return (
        <>
            <div className="bg-white w-screen h-screen p-4 flex items-center justify-center font-dmsans">
                <div className="bg-hijau h-full rounded-lg w-full my-auto flex">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.0,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="flex-col flex mx-auto justify-center text-center items-center w-5/12"
                    >
                        <img src={bulbLogo} className="mb-12" />
                        <div className="text-hijauMuda font-bold text-5xl mb-4">
                            Get Started with SMART
                        </div>
                        <div className="text-center text-hijauMuda mx-auto mb-16">{`SMART is a comprehensive educational platform designed to strengthen the connection between parents, teachers, and students. Our mission is to empower parents with the tools to monitor their child's academic progress and facilitate seamless communication with teachers.`}</div>
                        <Link to="/Dashboard">
                            <button className="bg-zinc-900 text-hijauMuda rounded-full px-10 py-1 text-lg mx-auto flex justify-center font-semibold hover:bg-hijauMuda hover hover:scale-110 focus:scale-90 hover:text-hijau duration-300 ease-in-out">
                                Login
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
