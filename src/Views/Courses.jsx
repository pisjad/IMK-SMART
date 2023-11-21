import arrow from "../assets/arrowdown.svg";
import { Link } from "react-router-dom";
const Courses = () => {
    return (
        <>
            <div className="w-full px-16 py-16 h-full flex font-dmsans">
                <div className="sidebar w-2/12 pr-8 text-center text-lg flex-col pt-24">
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
                <div className="kongtener w-10/12 h-full mt-24 flex">
                    <div className="w-8/12 h-full">
                        <div className="w-full h-full bg-hijau p-4 rounded-2xl ">
                            <div className="lg:flex flex-warp">
                                <div className="text-hijauMuda text-2xl font-bold">
                                    Course Schedule
                                </div>
                                <div className="text-hijau rounded-full bg-kuning px-6 font-semibold py-1 ml-auto flex gap-4">
                                    <p>2nd Year 2023-2024</p>
                                    <img src={arrow} className="" />
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
                                </div>
                            </div>
                        </div>
                        <div className=""></div>
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
                                    <div className="text-xl font-bold">54 / 144</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;
