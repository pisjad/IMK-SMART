import { Link } from "react-router-dom";
import arrow from "../assets/arrowdown.svg";
const Grade = () => {
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

                    <div className="bg-hijau rounded-lg py-2 text-hijauMuda font-medium mb-6">
                        <p>Grade</p>
                    </div>

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
                <div className="kongtener w-10/12 h-full mt-24 flex-col">
                    <div className="flex">
                        <div className="w-8/12 h-full">
                            <div className="w-full h-full bg-hijau p-4 rounded-2xl ">
                                <div className="lg:flex flex-warp">
                                    <div className="text-hijauMuda text-2xl font-bold">
                                        Summary of Course Grades
                                    </div>
                                    <div className="text-hijau rounded-full bg-kuning px-6 font-semibold py-1 ml-auto flex gap-4">
                                        <p>2nd Year 2023-2024</p>
                                        <img src={arrow} className="" />
                                    </div>
                                </div>
                                <div className="my-auto overflow-auto pr-4 scrollbar mt-4">
                                    <div className="h-[500px] flex-col">
                                        <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex">
                                            <div className="w-4/12 h-full flex-col pb-4">
                                                <div className="text-hijau font-bold pb-auto text-xl">
                                                    Interaksi Manusia dan
                                                    Komputer
                                                </div>
                                            </div>
                                            <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                                <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                    3 <br />
                                                    Credits
                                                </div>
                                                <div className="bg-hijau w-28 h-28 text-4xl text-hijauMuda rounded-xl">
                                                    <div className="flex my-auto items-center justify-center h-full w-full">
                                                        A
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex">
                                            <div className="w-4/12 h-full flex-col pb-4">
                                                <div className="text-hijau font-bold pb-auto text-xl">
                                                    Desain dan Analisis
                                                    Algoritma
                                                </div>
                                            </div>
                                            <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                                <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                    3 <br />
                                                    Credits
                                                </div>
                                                <div className="bg-hijau w-28 h-28 text-4xl text-hijauMuda rounded-xl p-6">
                                                    <div className="flex my-auto items-center justify-center h-full w-full">
                                                        B+
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex">
                                            <div className="w-4/12 h-full flex-col pb-4">
                                                <div className="text-hijau font-bold pb-auto text-xl">
                                                    Basis Data
                                                </div>
                                            </div>
                                            <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                                <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                    4 <br />
                                                    Credits
                                                </div>
                                                <div className="bg-hijau w-28 h-28 text-4xl text-hijauMuda rounded-xl p-6">
                                                    <div className="flex my-auto items-center justify-center h-full w-full">
                                                        A
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex">
                                            <div className="w-4/12 h-full flex-col pb-4">
                                                <div className="flex  text-hijau font-bold h-full text-xl">
                                                    <div className="flex my-auto items-center justify-center ">
                                                        Jaringan Komputer
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                                <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                    4 <br />
                                                    Credits
                                                </div>
                                                <div className="bg-hijau w-28 h-28 text-4xl text-hijauMuda rounded-xl p-6">
                                                    <div className="flex my-auto items-center justify-center h-full w-full">
                                                        A
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full bg-hijauMuda p-4 rounded-2xl mt-4 flex">
                                            <div className="w-4/12 h-full flex-col pb-4">
                                                <div className="text-hijau font-bold pb-auto text-xl">
                                                    Pancasila
                                                </div>
                                            </div>
                                            <div className="flex ml-auto text-lg text-center font-semibold gap-2">
                                                <div className="bg-ungu p-6 w-28 h-28 text-hijauMuda rounded-xl">
                                                    2 <br />
                                                    Credits
                                                </div>
                                                <div className="bg-hijau w-28 h-28 text-4xl text-hijauMuda rounded-xl p-6 ">
                                                    <div className="flex my-auto items-center justify-center h-full w-full">
                                                        A
                                                    </div>
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
                            <div className="bg-hijauMuda rounded-2xl p-4 ml-4 mt-6">
                                <div className="text-hijau text-2xl font-bold mb-4">
                                    GPA Summary
                                </div>
                                <div className="text-center flex-col gap-3">
                                    <div className="bg-kuning p-4 w-full flex mx-auto text-hijau rounded-2xl">
                                        <div className="text-lg font-semibold mr-auto">
                                            GPA per semester
                                        </div>
                                        <div className="font-bold text-2xl">
                                            3.4
                                        </div>
                                    </div>
                                    <div className="bg-ungu p-4 text-center flex px-auto mx-auto text-hijauMuda rounded-2xl mt-2">
                                        <div className="text-lg font-semibold mr-auto">
                                            GPA
                                        </div>
                                        <div className="text-2xl font-bold">
                                            3.7
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-12/12 h-full bg-hijau rounded-2xl mt-6 p-8 flex">
                        <div className="flex-col ml-8">
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                height="8em"
                                width="8em"
                                className="mx-auto my-8"
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
                            <div className="text-hijauMuda font-semibold text-xl ">
                                Mahardeka Tri Ananta
                            </div>
                        </div>
                        <div className=" w-8/12 flex-col ml-auto">
                            <div className="text-hijauMuda font-semibold text-xl">
                                Student Review by Academic Advisor
                            </div>
                            <div className="bg-hijauMuda text-hijau rounded-xl p-3 text-sm mt-3">
                                I am delighted to provide an evaluation of
                                Muhammad Fajar, an <br /> exceptional student
                                who consistently excels in their academic
                                pursuits. <br />
                                Muhammad Fajar has consistently achieved top
                                grades, displayed <br /> exemplary leadership,
                                and actively contributed to class discussions
                                and <br />
                                extracurricular activities. His commitment to
                                personal and academic <br />
                                growth is truly commendable. I have every
                                confidence that Muhammad <br /> Fajar will
                                continue to thrive academically and make a
                                significant impact in <br />
                                their future endeavors.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Grade;
