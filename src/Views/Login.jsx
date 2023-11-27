import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Eye from "../assets/Images/Eye.svg";

const Login = () => {
    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="w-[480px] bg-hijau rounded-xl font-dmsans p-8 flex flex-col items-center gap-3 mx-auto width: 100% position: fixed top: 0 left: 0"
                >
                    <div className="w-full text-left mb-4">
                        <span className="text-hijauMuda text-left text-3xl font-bold font-dmsans">
                            Login
                        </span>
                    </div>

                    <div className="w-full text-left">
                        <span className="text-hijauMuda text-lg font-normal">
                            Email
                        </span>
                    </div>
                    <input
                        placeholder="example@gmail.com"
                        className="w-full h-[30px] text-hijau  bg-hijauMuda rounded-full pl-4 mb-8 flex justify-between outline-none"
                    ></input>

                    <div className="w-full text-left">
                        <span className="text-hijauMuda text-lg font-normal">
                            Password
                        </span>
                    </div>
                    <div className="w-full h-[30px] bg-hijauMuda rounded-full pl-4 mb-5 flex justify-between ">
                        <input
                            type="password"
                            placeholder="Input your password"
                            className="text-hijau bg-transparent w-full outline-none"
                        />
                        <img
                            src={Eye}
                            className="w-[7.0%] h-[41.0%]"
                            alt="Eye Logo"
                            style={{ position: "absolute", right: 6, top: 9 }}
                        />
                    </div>

                    <div className="w-full text-right mb-5">
                        <span className="text-hijauMuda font-normal">
                            Don’t have account?{" "}
                        </span>
                        <Link to="/Register">
                            <span className="text-hijauMuda hover:text-lime-300 duration-300 font-bold">
                                Register
                            </span>
                        </Link>
                    </div>

                    <Link to="/Dashboard">
                        <button className="bg-zinc-900 text-hijauMuda rounded-full px-10 py-1 text-lg mx-auto flex justify-center font-semibold hover:bg-hijauMuda hover hover:scale-110 focus:scale-90 hover:text-hijau duration-300 ease-in-out">
                            Login
                        </button>
                    </Link>
                </motion.div>
            </div>
        </>
    );
};

export default Login;
