import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
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
                    className="w-[450px] bg-hijau rounded-xl font-dmsans p-8 flex flex-col items-center gap-3 mx-auto width: 100% position: fixed top: 0 left: 0"
                >
                    <div className="w-full text-left mb-4">
                        <span className="text-hijauMuda text-left text-3xl font-bold">
                            Register
                        </span>
                    </div>

                    <div className="w-full flex flex-col flex-wrap ">
                        <span className="text-hijauMuda text-g font-normal">
                            Full Name
                        </span>
                        <div className="w-full h-[30px] bg-hijauMuda rounded-full pl-4 mb-1 flex justify-content: center align-items: center">
                            <input
                                type="text"
                                placeholder="Your name"
                                style={{
                                    background: "none",
                                    outline: "none",
                                    color: "black",
                                    width: "100%",
                                }}
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-col mb-2">
                        <span className="text-hijauMuda text-g font-normal">
                            Student ID
                        </span>
                        <div className="w-full h-[30px] bg-hijauMuda pl-4 rounded-full flex justify-content: center align-items: center">
                            <input
                                type="text"
                                placeholder="Student ID"
                                style={{
                                    background: "none",
                                    outline: "none",
                                    color: "black",
                                    width: "100%",
                                }}
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-col mb-2">
                        <span className="text-hijauMuda text-g font-normal">
                            Email
                        </span>
                        <div className="w-full h-[30px] bg-hijauMuda rounded-full backdrop-blur-[12px] pl-4 mb-1 flex justify-content: center align-items: center">
                            <input
                                type="email"
                                placeholder="example@gmailcom"
                                style={{
                                    background: "none",
                                    outline: "none",
                                    color: "black",
                                    width: "100%",
                                }}
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-col mb-2">
                        <span className="text-hijauMuda text-g font-normal">
                            Password
                        </span>
                        <div className="w-full h-[30px] bg-hijauMuda rounded-full backdrop-blur-[12px] pl-4 mb-1 flex justify-content: center align-items: center">
                            <input
                                type="password"
                                placeholder="Password"
                                style={{
                                    background: "none",
                                    outline: "none",
                                    color: "black",
                                    width: "100%",
                                }}
                            />
                        </div>
                    </div>

                    <div className="w-full text-right mb-4">
                        <span className="text-hijauMuda  font-normal">
                            Already have an account?{" "}
                        </span>
                        <Link to="/Login">
                            <span className="text-hijauMuda hover:text-lime-300 duration-300 font-bold">
                                Login
                            </span>
                        </Link>
                    </div>

                    <button
                        className="bg-zinc-900 text-hijauMuda rounded-full px-10 py-1 text-lg mx-auto flex justify-center font-semibold hover:bg-hijauMuda hover hover:scale-110 focus:scale-90 hover:text-hijau duration-300 ease-in-out"
                        onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                        }
                    >
                        Register
                    </button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box bg-hijau text-hijauMuda">
                            <h3 className="font-bold text-lg">
                                Register Complete!
                            </h3>
                            <p className="py-4">
                                Thank you for registering. Welcome to SMART, To
                                get started, click the login button below to
                                access the website
                            </p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <Link to="/Login">
                                        <button className=" btn rounded-full px-6 py-1">
                                            Login
                                        </button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </motion.div>
            </div>
        </>
    );
};

export default Register;
