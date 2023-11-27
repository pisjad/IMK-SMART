// import arrow from "../assets/arrowdown.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Courses = () => {
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
                        <div className="group relative bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6 cursor-pointer">
                            <div className="absolute opacity-0 group-hover:opacity-100 inset-0 w-3 rounded-lg bg-hijau transition-all duration-300 ease-out group-hover:w-full "></div>
                            <span className="relative text-hijau group-hover:text-hijauMuda">
                                Profile
                            </span>
                        </div>
                    </Link>
                    <div className="bg-hijau rounded-lg py-2 text-hijauMuda font-medium mb-6">
                        <p>Courses</p>
                    </div>
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
                    className="kongtener w-10/12 h-full mt-24 flex"
                >
                    <div className="w-8/12 h-full">
                        <div className="w-full h-full bg-hijau p-4 rounded-2xl ">
                            <div className="lg:flex flex-warp">
                                <div className="text-hijauMuda text-2xl font-bold">
                                    Course Schedule
                                </div>
                                <div className="text-hijau rounded-full bg-kuning px-6 font-semibold py-1 ml-auto flex gap-4">
                                    <p>2nd Year 2023-2024</p>
                                    {/* <img src={arrow} className="" /> */}
                                </div>
                            </div>
                            <div className="h-10/1 my-auto overflow-auto pr-4 scrollbar mt-4">
                                <div className="h-[500px] flex-col">
                                    <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex">
                                        <div className="w-4/12 h-full flex-col pb-4">
                                            <div className="text-hijau font-bold pb-auto text-xl">
                                                Interaksi Manusia dan Komputer
                                            </div>
                                            <div className="text-hijau w-6/12 rounded-full bg-kuning text-center font-semibold py-0.5 mt-4">
                                                Monday
                                            </div>
                                        </div>
                                        <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                            <div className="p-10 bg-kuning w-28 h-28 text-hijau rounded-xl">
                                                F2.4
                                            </div>
                                            <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                3 <br />
                                                Credits
                                            </div>
                                            <div className="bg-hijau w-28 h-28 text-hijauMuda rounded-xl p-6">
                                                07:00 <br />
                                                08:00
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex">
                                        <div className="w-4/12 h-full flex-col pb-4">
                                            <div className="text-hijau font-bold pb-auto text-xl">
                                                Kecerdasan Buatan
                                            </div>
                                            <div className="text-hijau w-6/12 rounded-full bg-kuning text-center font-semibold py-0.5 mt-4">
                                                Tuesday
                                            </div>
                                        </div>
                                        <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                            <div className="p-10 bg-kuning w-28 h-28 text-hijau rounded-xl">
                                                F3.1
                                            </div>
                                            <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                4 <br />
                                                Credits
                                            </div>
                                            <div className="bg-hijau w-28 h-28 text-hijauMuda rounded-xl p-6">
                                                13:00 <br />
                                                05:00
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex">
                                        <div className="w-4/12 h-full flex-col pb-4">
                                            <div className="text-hijau font-bold pb-auto text-xl">
                                                Desain Analisis Algoritma
                                            </div>
                                            <div className="text-hijau w-6/12 rounded-full bg-kuning text-center font-semibold py-0.5 mt-4">
                                                Thursday
                                            </div>
                                        </div>
                                        <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                            <div className="p-10 bg-kuning w-28 h-28 text-hijau rounded-xl">
                                                F4.6
                                            </div>
                                            <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                3 <br />
                                                Credits
                                            </div>
                                            <div className="bg-hijau w-28 h-28 text-hijauMuda rounded-xl p-6">
                                                15:00 <br />
                                                17:00
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex">
                                        <div className="w-4/12 h-full flex-col pb-4">
                                            <div className="text-hijau font-bold pb-auto text-xl">
                                                Jaringan Komputer
                                            </div>
                                            <div className="text-hijau w-6/12 rounded-full bg-kuning text-center font-semibold py-0.5 mt-4">
                                                Friday
                                            </div>
                                        </div>
                                        <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                            <div className="p-10 bg-kuning w-28 h-28 text-hijau rounded-xl">
                                                F3.4
                                            </div>
                                            <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                4 <br />
                                                Credits
                                            </div>
                                            <div className="bg-hijau w-28 h-28 text-hijauMuda rounded-xl p-6">
                                                09:00 <br />
                                                11:00
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex">
                                        <div className="w-4/12 h-full flex-col pb-4">
                                            <div className="text-hijau font-bold pb-auto text-xl">
                                                Basis Data
                                            </div>
                                            <div className="text-hijau w-6/12 rounded-full bg-kuning text-center font-semibold py-0.5 mt-4">
                                                Monday
                                            </div>
                                        </div>
                                        <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                            <div className="p-10 bg-kuning w-28 h-28 text-hijau rounded-xl">
                                                F4.4
                                            </div>
                                            <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                4 <br />
                                                Credits
                                            </div>
                                            <div className="bg-hijau w-28 h-28 text-hijauMuda rounded-xl p-6">
                                                08:00 <br />
                                                10:00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full bg-hijau p-4 rounded-2xl mt-4">
                            <div className="lg:flex flex-warp">
                                <div className="text-hijauMuda text-2xl font-bold">
                                    Attendance
                                </div>
                                <div className="text-hijau rounded-full bg-kuning px-6 font-semibold py-1 ml-auto flex gap-4">
                                    <p>2nd Year 2023-2024</p>
                                    {/* <img src={arrow} className="" /> */}
                                </div>
                            </div>
                            <div className="h-10/1 my-auto overflow-auto pr-4 scrollbar mt-4">
                                <div className="h-[500px] flex-col">
                                    <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex items-center">
                                        <div className="w-4/12 h-full flex-col pb-4">
                                            <div className="text-hijau font-bold pb-auto text-xl ">
                                                Interaksi Manusia dan Komputer
                                            </div>
                                        </div>
                                        <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                            <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                Present: 10
                                            </div>
                                            <div className="bg-hijau w-28 h-28 text-hijauMuda rounded-xl p-6">
                                                Absent: 0
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex items-center mb-4">
                                        <div className="w-4/12 h-full flex-col pb-4">
                                            <div className="text-hijau font-bold pb-auto text-xl ">
                                                Kecerdasan Buatan
                                            </div>
                                        </div>
                                        <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                            <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                Present: 10
                                            </div>
                                            <div className="bg-hijau w-28 h-28 text-hijauMuda rounded-xl p-6">
                                                Absent: 0
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex items-center">
                                        <div className="w-4/12 h-full flex-col pb-4">
                                            <div className="text-hijau font-bold pb-auto text-xl ">
                                                Desain Analisis Algoritma
                                            </div>
                                        </div>
                                        <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                            <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                Present: 8
                                            </div>
                                            <div className="bg-hijau w-28 h-28 text-hijauMuda rounded-xl p-6">
                                                Absent: 2
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex items-center">
                                        <div className="w-4/12 h-full flex-col pb-4">
                                            <div className="text-hijau font-bold pb-auto text-xl ">
                                                Basis Data
                                            </div>
                                        </div>
                                        <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                            <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                Present: 9
                                            </div>
                                            <div className="bg-hijau w-28 h-28 text-hijauMuda rounded-xl p-6">
                                                Absent: 1
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex items-center">
                                        <div className="w-4/12 h-full flex-col pb-4">
                                            <div className="text-hijau font-bold pb-auto text-xl ">
                                                Jaringan Komputer
                                            </div>
                                        </div>
                                        <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                            <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                Present: 10
                                            </div>
                                            <div className="bg-hijau w-28 h-28 text-hijauMuda rounded-xl p-6">
                                                Absent: 0
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <div className="bg-hijau rounded-2xl p-4 ml-4">
                            <div className="text-hijauMuda text-2xl font-bold mb-4">
                                Credit Hours
                            </div>
                            <div className="text-center flex gap-3">
                                <div className="bg-hijauMuda p-6 w-6/12 mx-auto text-hijau rounded-2xl">
                                    <div className="text-lg">
                                        This
                                        <br />
                                        Semester
                                    </div>
                                    <div className="font-bold text-xl">
                                        16 / 24
                                    </div>
                                </div>
                                <div className="bg-ungu w-6/12 text-center p-6 mx-auto text-hijauMuda rounded-2xl">
                                    <div className="text-lg">Total</div>
                                    <div className="text-xl font-bold">
                                        54 / 144
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dosen bg-hijau rounded-2xl p-4 ml-4 flex-col mt-6">
                            <div className="text-hijauMuda text-2xl font-bold mb-4">
                                Lecturer
                            </div>
                            <div className="text-center flex-col ">
                                <div className="flex gap-4 items-center bg-hijauMuda rounded-2xl h-fit w-full mb-4">
                                    <div className="my-auto flex w-full p-4 gap-3">
                                        <svg
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            height="3em"
                                            width="3em"
                                            className="my-auto"
                                        >
                                            <path
                                                fill="#113132"
                                                fillRule="evenodd"
                                                d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                                                clipRule="evenodd"
                                            />
                                            <path
                                                fill="#113132"
                                                fillRule="evenodd"
                                                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <div className="text-hijau font-semibold my-auto text-xl">
                                            Mahardeka Tri Ananta
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center bg-hijauMuda rounded-2xl h-fit w-full mb-4">
                                    <div className="my-auto flex w-full p-4 gap-3">
                                        <svg
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            height="3em"
                                            width="3em"
                                            className="my-auto"
                                        >
                                            <path
                                                fill="#113132"
                                                fillRule="evenodd"
                                                d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                                                clipRule="evenodd"
                                            />
                                            <path
                                                fill="#113132"
                                                fillRule="evenodd"
                                                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <div className="text-hijau font-semibold my-auto text-xl">
                                            Mahendra Data
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center bg-hijauMuda rounded-2xl h-fit w-full mb-4">
                                    <div className="my-auto flex w-full p-4 gap-3">
                                        <svg
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            height="3em"
                                            width="3em"
                                            className="my-auto"
                                        >
                                            <path
                                                fill="#113132"
                                                fillRule="evenodd"
                                                d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                                                clipRule="evenodd"
                                            />
                                            <path
                                                fill="#113132"
                                                fillRule="evenodd"
                                                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <div className="text-hijau font-semibold my-auto text-xl">
                                            Ahmad Basuki
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center bg-hijauMuda rounded-2xl h-fit w-full mb-4">
                                    <div className="my-auto flex w-full p-4 gap-3">
                                        <svg
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            height="3em"
                                            width="3em"
                                            className="my-auto"
                                        >
                                            <path
                                                fill="#113132"
                                                fillRule="evenodd"
                                                d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                                                clipRule="evenodd"
                                            />
                                            <path
                                                fill="#113132"
                                                fillRule="evenodd"
                                                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <div className="text-hijau font-semibold my-auto text-xl">
                                            Achmad Ridok
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center bg-hijauMuda rounded-2xl h-fit w-full ">
                                    <div className="my-auto flex w-full p-4 gap-3">
                                        <svg
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            height="3em"
                                            width="3em"
                                            className="my-auto"
                                        >
                                            <path
                                                fill="#113132"
                                                fillRule="evenodd"
                                                d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                                                clipRule="evenodd"
                                            />
                                            <path
                                                fill="#113132"
                                                fillRule="evenodd"
                                                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <div className="text-hijau font-semibold my-auto text-xl">
                                            Fais Al Huda
                                        </div>
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

export default Courses;
