import { Link } from "react-router-dom";
import Eye from "../assets/Images/Eye.svg";

const Register = () => {
    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="w-[450px] bg-hijau rounded-xl font-dmsans p-8 flex flex-col items-center gap-3 mx-auto width: 100% position: fixed top: 0 left: 0">
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
                                    background: "#c0ddab",
                                    outline: "none",
                                    color: "black",
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
                                    background: "#c0ddab",
                                    outline: "none",
                                    color: "black",
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
                                    background: "#c0ddab",
                                    outline: "none",
                                    color: "black",
                                    width: "90%",
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
                                    background: "#c0ddab",
                                    outline: "none",
                                    color: "black",
                                }}
                            />
                            <img
                                src={Eye}
                                className="w-[7.0%] h-[41.0%]"
                                alt="Eye Logo"
                                style={{
                                    position: "absolute",
                                    right: 6,
                                    top: 9,
                                }}
                            />
                        </div>
                    </div>

                    <div className="w-full text-right mb-4">
                        <span className="text-hijauMuda text-g font-normal">
                            Already have an account?{" "}
                        </span>
                        <Link to="/Login">
                            <span className="text-hijauMuda text-g font-bold">
                                Login
                            </span>
                        </Link>
                    </div>

                    <Link to="/Dashboard">
                        <button className="bg-zinc-900 text-hijauMuda rounded-full px-10 py-1 text-lg mx-auto flex justify-center font-semibold hover:bg-hijauMuda hover hover:scale-110 focus:scale-90 hover:text-hijau duration-300 ease-in-out">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Register;
