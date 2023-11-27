import art from "../assets/Images/Welcoming.svg";
import artKotak from "../assets/Images/art2.svg";
import fajar from "../assets/Images/fajar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import profile from "../assets/Images/profile.svg";
// import * as React from "react";
const Profile = () => {
    return (
        <>
            <div className="bg-white w-full px-16 py-10 h-full flex font-dmsans">
                <div className="sidebar hover:cursor-pointer w-2/12 pr-8 text-center text-lg flex-col pt-24">
                    <Link to="/Dashboard">
                        <div className="group relative bg-hijauMuda rounded-lg py-2 text-hijau font-medium mb-6 cursor-pointer">
                            <div className="absolute opacity-0 group-hover:opacity-100 inset-0 w-3 rounded-lg bg-hijau transition-all duration-300 ease-out group-hover:w-full "></div>
                            <span className="relative text-hijau group-hover:text-hijauMuda">
                                Dashboard
                            </span>
                        </div>
                    </Link>
                    <div className="bg-hijau rounded-lg py-2 text-hijauMuda font-medium mb-6">
                        <p>Profile</p>
                    </div>

                    <Link to="/Courses">
                        <div className="group relative bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6  cursor-pointer">
                            <div className="absolute opacity-0 group-hover:opacity-100 inset-0 w-3 rounded-lg bg-hijau transition-all duration-300 ease-out group-hover:w-full "></div>
                            <span className="relative text-hijau group-hover:text-hijauMuda">
                                Courses
                            </span>
                        </div>
                    </Link>
                    <Link to="/Grade">
                        <div className="group relative bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6  cursor-pointer">
                            <div className="absolute opacity-0 group-hover:opacity-100 inset-0 w-3 rounded-lg bg-hijau transition-all duration-300 ease-out group-hover:w-full "></div>
                            <span className="relative text-hijau group-hover:text-hijauMuda">
                                Grade
                            </span>
                        </div>
                    </Link>

                    <Link to="/Tuition">
                        <div className="group relative bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6  cursor-pointer">
                            <div className="absolute opacity-0 group-hover:opacity-100 inset-0 w-3 rounded-lg bg-hijau transition-all duration-300 ease-out group-hover:w-full "></div>
                            <span className="relative text-hijau group-hover:text-hijauMuda">
                                Tuition
                            </span>
                        </div>
                    </Link>
                    <Link to="/Career">
                        <div className="group relative bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6  cursor-pointer">
                            <div className="absolute opacity-0 group-hover:opacity-100 inset-0 w-3 rounded-lg bg-hijau transition-all duration-300 ease-out group-hover:w-full "></div>
                            <span className="relative text-hijau group-hover:text-hijauMuda">
                                Career
                            </span>
                        </div>
                    </Link>
                    <Link to="/Achievement">
                        <div className="group relative bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6  cursor-pointer">
                            <div className="absolute opacity-0 group-hover:opacity-100 inset-0 w-3 rounded-lg bg-hijau transition-all duration-300 ease-out group-hover:w-full "></div>
                            <span className="relative text-hijau group-hover:text-hijauMuda">
                                Achievement
                            </span>
                        </div>
                    </Link>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 75 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: "spring",
                            duration: 3.0,
                            damping: 15,
                            stiffness: 100,
                        },
                    }}
                    className="kontener w-10/12 mt-24"
                >
                    <div className="bg-hijau w-full rounded-2xl text-hijauMuda flex mb-6">
                        <div className="mt-auto p-4">
                            <div className="font-bold text-2xl mb-2">
                                Welcome Back,
                            </div>
                            <div className="font-bold text-3xl mb-2">
                                Mr. Fajar Sr.
                            </div>
                        </div>
                        <img src={art} className="w-5/12 ml-auto" />
                    </div>
                    <div className="w-full flex gap-6">
                        <div className="bg-kuning w-4/12 h-full rounded-2xl">
                            <div className="bg-hijau w-full flex items-center justify-center rounded-2xl p-6">
                                <div className="w-fit flex-col items-center justify-center mx-auto">
                                    <img
                                        src={fajar}
                                        className="w-10/12 mx-auto"
                                    />
                                    <div className="text-hijauMuda text-2xl font-bold my-4 mx-auto w-fit">
                                        Muhammad Fajar
                                    </div>
                                    <div className="w-fit px-5 mx-auto text-lg bg-hijauMuda rounded-full text-hijau flex text-center">
                                        Active
                                    </div>
                                </div>
                            </div>
                            <div className="text-xl font-semibold text-hijau flex-col flex items-center text-center my-6">
                                <div className="mb-2 flex items-center gap-3">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                    >
                                        <path d="M6.012 18H21V4a2 2 0 00-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z" />
                                    </svg>
                                    <div className="">225150207111084</div>
                                </div>
                                <div className="mb-2 flex items-center gap-3">
                                    <svg
                                        viewBox="0 0 384 512"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                    >
                                        <path d="M384 192c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0s192 86 192 192z" />
                                    </svg>
                                    <div className="">Merjosari, Lowokwaru</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-hijauMuda w-3/12 rounded-2xl flex items-center justify-center">
                            <div className="rounded-2xl flex-col mx-auto flex items-center justify-center w-full h-full">
                                <img src={artKotak} className="mb-auto" />
                                <div className="font-bold mb-4 text-hijau text-xl text-center mx-4">
                                    Faculty of Computer Science
                                </div>
                                <div className="mb-3 text-lg text-hijau font-medium bg-kuning rounded-full px-6 py-0.5 text-center mx-auto">
                                    Informatics Engineering
                                </div>
                                <div className="mb-auto font-semibold text-hijau">
                                    Batch 2022
                                </div>
                            </div>
                        </div>
                        <div className="w-5/12">
                            <div className="bg-kuning rounded-2xl p-4">
                                <h1 className="text-hijau text-2xl mb-2 font-bold">
                                    Soft Skill
                                </h1>
                                <div className="bg-hijau text-hijauMuda px-4 py-2 font-semibold text-xl rounded-full mb-2">
                                    Communication
                                </div>
                                <div className="bg-hijau text-hijauMuda px-4 py-2 font-semibold text-xl rounded-full mb-2">
                                    Problem Solving
                                </div>
                                <div className="bg-hijau text-hijauMuda px-4 py-2 font-semibold text-xl rounded-full mb-2">
                                    Teamwork
                                </div>
                                <div className="bg-hijau text-hijauMuda px-4 py-2 font-semibold text-xl rounded-full mb-2">
                                    Leadership
                                </div>
                                <div className="bg-hijau text-hijauMuda px-4 py-2 font-semibold text-xl rounded-full mb-2">
                                    Organization
                                </div>
                            </div>
                            <div className="bg-hijau rounded-2xl mt-4 p-4">
                                <p className="text-2xl font-bold text-hijauMuda mb-6">
                                    Academic Advisor
                                </p>
                                <div className="flex gap-4 items-center pb-4">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        height="3em"
                                        width="3em"
                                    >
                                        <path
                                            fill="#C0DDAB"
                                            fillRule="evenodd"
                                            d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                                            clipRule="evenodd"
                                        />
                                        <path
                                            fill="#C0DDAB"
                                            fillRule="evenodd"
                                            d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <div className="text-hijauMuda font-medium text-xl">
                                        Mahardeka Tri Ananta
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Profile;
