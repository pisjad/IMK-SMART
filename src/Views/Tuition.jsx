import { Link } from "react-router-dom";
import art from "../assets/Images/Welcoming.svg";
import History from "../assets/history.svg";
import { motion } from "framer-motion";
import Arrow from "../assets/Arrow.svg";

const Tuition = () => {
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
                    <Link to="/Profile">
                        <div className="group relative bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6  cursor-pointer">
                            <div className="absolute opacity-0 group-hover:opacity-100 inset-0 w-3 rounded-lg bg-hijau transition-all duration-300 ease-out group-hover:w-full "></div>
                            <span className="relative text-hijau group-hover:text-hijauMuda">
                                Profile
                            </span>
                        </div>
                    </Link>

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

                    <div className="bg-hijau rounded-lg py-2 text-hijauMuda font-medium mb-6">
                        <p>Tuition</p>
                    </div>
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
                    <div className="w-full flex gap-6">
                        <div className="bg-hijau w-full rounded-2xl text-hijauMuda flex mb-6">
                            <div className="mt-auto p-4">
                                <div className="font-bold text-2xl mb-2">
                                    Tuition Fee
                                </div>
                                <div className="font-bold text-3xl mb-2">
                                    Rp20.000.000
                                </div>
                            </div>
                            <img src={art} className="w-7/12 ml-auto" />
                        </div>

                        <a
                            href="https://selma.ub.ac.id/tata-cara-pembayaran/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer hover:bg-kuning bg-hijauMuda w-4/12 rounded-2xl text-hijau flex mb-6 p-4 flex-col duration-300"
                        >
                            <img
                                src={Arrow}
                                className="w-5/12 bg-hijau rounded-full ml-2 group-hover:rotate-90 duration-300 p-4"
                            />
                            <div className="font-bold text-hijau text-2xl mt-auto">
                                Download <br /> Payment Guide
                            </div>
                        </a>
                    </div>
                    <div className="bg-hijau h-auto w-full rounded-2xl text-hijauMuda flex-col mb-auto p-4">
                        <div className="w-full text-2xl font-bold mb-4">
                            Payment History
                        </div>
                        <div className="h-[520px] overflow-auto scrollbar pr-4">
                            <div className="bg-hijauMuda w-full rounded-2xl text-hijau flex p-6 mb-6 items-center">
                                <img
                                    src={History}
                                    className="justify-items-center flex "
                                />
                                <div className="text-right flex ml-auto flex-col">
                                    <div className="font-bold text-xl">
                                        Paid the tuition fee for Semester 5
                                    </div>
                                    <div className="pt-2 text-lg">
                                        23/12/2023
                                    </div>
                                </div>
                            </div>
                            <div className="bg-hijauMuda w-full rounded-2xl text-hijau flex p-6 mb-6 items-center">
                                <img
                                    src={History}
                                    className="justify-items-center flex "
                                />
                                <div className="text-right flex ml-auto flex-col">
                                    <div className="font-bold text-xl">
                                        Paid the tuition fee for Semester 4
                                    </div>
                                    <div className="pt-2 text-lg">
                                        23/01/2023
                                    </div>
                                </div>
                            </div>
                            <div className="bg-hijauMuda w-full rounded-2xl text-hijau flex p-6 mb-6 items-center">
                                <img
                                    src={History}
                                    className="justify-items-center flex "
                                />
                                <div className="text-right flex ml-auto flex-col">
                                    <div className="font-bold text-xl">
                                        Paid the tuition fee for Semester 3
                                    </div>
                                    <div className="pt-2 text-lg">
                                        23/12/2022
                                    </div>
                                </div>
                            </div>
                            <div className="bg-hijauMuda w-full rounded-2xl text-hijau flex p-6 mb-6 items-center">
                                <img
                                    src={History}
                                    className="justify-items-center flex "
                                />
                                <div className="text-right flex ml-auto flex-col">
                                    <div className="font-bold text-xl">
                                        Paid the tuition fee for Semester 2
                                    </div>
                                    <div className="pt-2 text-lg">
                                        23/01/2022
                                    </div>
                                </div>
                            </div>
                            <div className="bg-hijauMuda w-full rounded-2xl text-hijau flex p-6 items-center">
                                <img
                                    src={History}
                                    className="justify-items-center flex "
                                />
                                <div className="text-right flex ml-auto flex-col">
                                    <div className="font-bold text-xl">
                                        Paid the tuition fee for Semester 1
                                    </div>
                                    <div className="pt-2 text-lg">
                                        23/12/2021
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

export default Tuition;
