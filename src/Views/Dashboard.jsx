import art from "../assets/Images/Welcoming.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
    return (
        <>
            <div className="bg-white w-full px-16 py-10 h-full flex font-dmsans">
                <div className="sidebar hover:cursor-pointer w-2/12 pr-8 text-center text-lg flex-col pt-24">
                    <div className="bg-hijau rounded-lg py-2 text-hijauMuda font-medium mb-6">
                        <p>Dashboard</p>
                    </div>
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
                    className="kontener w-10/12 pt-24"
                >
                    <div className="bg-hijau w-full rounded-2xl text-hijauMuda flex ">
                        <div className="mt-auto p-4">
                            <div className="font-bold text-3xl mb-2">
                                Welcome Back, Mr. Budi
                            </div>
                            <div className="text-lg w-8/12">
                                Embrace the journey, cherish every
                                step, and nurture the unique magic within your
                                child
                            </div>
                        </div>
                        <img src={art} className="w-5/12 ml-auto" />
                    </div>
                    <div className="bg-hijau rounded-2xl mt-6 p-4">
                        <div className="text-hijauMuda text-2xl font-bold mb-4">
                            Announcement
                        </div>
                        <div className="w-10/1 mx-auto overflow-auto scrollbar">
                            <div className="w-[1500px] flex">
                                <div className="bg-hijauMuda text-hijau w-[300px] rounded-xl p-5 mb-6">
                                    <div className="font-bold text-lg ">
                                        Interaksi Manusia dan Komputer
                                    </div>
                                    <div className="mb-4">
                                        Mahardeka Tri Ananta
                                    </div>
                                    <div className="">
                                        Dear students, please be informed that
                                        the midterm exam for the Human-Computer
                                        Interaction course will take place next
                                        week, and more information will be
                                        provided soon.
                                    </div>
                                </div>
                                <div className="bg-hijauMuda text-hijau w-[300px] rounded-xl p-5 mb-6 ml-4">
                                    <div className="font-bold text-lg ">
                                        Kecerdasan Buatan
                                    </div>
                                    <div className="mb-4">Achmad Ridok</div>
                                    <div className="">
                                        Attention students, the Artificial
                                        Intelligence class scheduled for today
                                        has been canceled. Please be informed
                                        and plan accordingly. Stay tuned for
                                        further updates on rescheduling. Thank
                                        you for your understanding.
                                    </div>
                                </div>
                                <div className="bg-hijauMuda text-hijau w-[300px] rounded-xl p-5 mb-6 ml-4">
                                    <div className="font-bold text-lg ">
                                        Desain Analisis Algoritma
                                    </div>
                                    <div className="mb-4">Mahendra Data</div>
                                    <div className="">
                                        Dear students enrolled in the Design and
                                        Analysis of Algorithms class, we would
                                        like to inform you that there will be a
                                        quiz scheduled for tomorrow. Be prepared
                                        to demonstrate your understanding of the
                                        course material.
                                    </div>
                                </div>
                                <div className="bg-hijauMuda text-hijau w-[300px] rounded-xl p-5 mb-6 ml-4">
                                    <div className="font-bold text-lg ">
                                        Jaringan Komputer
                                    </div>
                                    <div className="mb-4">Ahmad Basuki</div>
                                    <div className="">
                                        Dear students, please be informed that
                                        the midterm exam for the Human-Computer
                                        Interaction course will take place next
                                        week, and more information will be
                                        provided soon.
                                    </div>
                                </div>
                                <div className="bg-hijauMuda text-hijau w-[300px] rounded-xl p-5 mb-6 ml-4">
                                    <div className="font-bold text-lg ">
                                        Basis Data
                                    </div>
                                    <div className="mb-4">Fais Al Huda</div>
                                    <div className="">
                                        Attention students, the Data Base class
                                        scheduled for today has been canceled.
                                        Please be informed and plan accordingly.
                                        Stay tuned for further updates on
                                        rescheduling. Thank you for your
                                        understanding.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-full flex">
                        <div className="bg-hijau rounded-2xl w-1/2 p-4">
                            <div className="text-hijauMuda text-2xl font-bold mb-4">
                                Activities
                            </div>
                            <div className="flex bg-hijauMuda rounded-xl p-4 text-hijau mb-4">
                                <div className="mr-auto">
                                    <div className="font-bold text-lg">
                                        Assignment 5
                                    </div>
                                    <div className="">
                                        25/11/2023 - 27/11/2023
                                    </div>
                                </div>
                                <div className="ml-auto font-bold mt-auto">
                                    Kecerdasan Buatan
                                </div>
                            </div>
                            <div className="flex bg-hijauMuda rounded-xl p-4 text-hijau mb-4">
                                <div className="mr-auto">
                                    <div className="font-bold text-lg">
                                        Laporan Praktikum 3
                                    </div>
                                    <div className="">
                                        19/11/2023 - 26/11/2023
                                    </div>
                                </div>
                                <div className="ml-auto font-bold mt-auto">
                                    Basis Data
                                </div>
                            </div>
                            <div className="flex bg-hijauMuda rounded-xl p-4 text-hijau mb-4">
                                <div className="mr-auto">
                                    <div className="font-bold text-lg">
                                        Laporan Praktikum 4
                                    </div>
                                    <div className="">
                                        16/11/2023 - 20/11/2023
                                    </div>
                                </div>
                                <div className="ml-auto font-bold mt-auto">
                                    Jaringan Komputer
                                </div>
                            </div>
                            <div className="flex bg-hijauMuda rounded-xl p-4 text-hijau mb-4">
                                <div className="mr-auto">
                                    <div className="font-bold text-lg">
                                        Quiz 2
                                    </div>
                                    <div className="">
                                        25/11/2023 - 27/11/2023
                                    </div>
                                </div>
                                <div className="ml-auto font-bold mt-auto">
                                    Desain Analisis Algoritma
                                </div>
                            </div>
                            <div className="flex bg-hijauMuda rounded-xl p-4 text-hijau">
                                <div className="mr-auto">
                                    <div className="font-bold text-lg">
                                        Laporan Praktikum 3
                                    </div>
                                    <div className="">
                                        19/11/2023 - 26/11/2023
                                    </div>
                                </div>
                                <div className="ml-auto font-bold mt-auto">
                                    Interaksi Manusia dan Komputer
                                </div>
                            </div>
                        </div>
                        <div className="ml-6 w-1/2">
                            <div className="text-2xl font-bold text-hijau mb-4">
                                Subject Progress
                            </div>
                            <div className="flex-col">
                                <div className="bg-hijau font-semibold text-2xl text-hijauMuda p-4 rounded-2xl flex mb-4">
                                    <div className="">
                                        Interaksi Manusia <br /> dan Komputer
                                    </div>
                                    <div className="ml-auto text-6xl">40%</div>
                                </div>
                                <div className="bg-hijau font-semibold text-2xl text-hijauMuda p-4 rounded-2xl flex mb-4">
                                    <div className="">Basis Data</div>
                                    <div className="ml-auto text-6xl">35%</div>
                                </div>
                                <div className="bg-hijau font-semibold text-2xl text-hijauMuda p-4 rounded-2xl flex mb-4">
                                    <div className="">Jaringan Komputer</div>
                                    <div className="ml-auto text-6xl">58%</div>
                                </div>
                                <div className="bg-hijau font-semibold text-2xl text-hijauMuda p-4 rounded-2xl flex mb-4">
                                    <div className="">
                                        Desain Analisis <br /> Algoritma
                                    </div>
                                    <div className="ml-auto text-6xl">50%</div>
                                </div>
                                <div className="bg-hijau font-semibold text-2xl text-hijauMuda p-4 rounded-2xl flex">
                                    <div className="">Kecerdasan Buatan</div>
                                    <div className="ml-auto text-6xl">27%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Dashboard;
