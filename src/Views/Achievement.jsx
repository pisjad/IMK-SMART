import { Link } from "react-router-dom";
import art2 from "../assets/Images/art2.svg";
const Achievement = () => {
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
                    <div className="bg-hijau rounded-lg py-2 text-hijauMuda font-medium mb-6">
                        <p>Achievement</p>
                    </div>
                </div>
                <div className="kontener w-10/12 flex-col mt-24">
                    <div className="bg-kuning flex-col w-full rounded-2xl p-4">
                        <div className="text-2xl mb-4 text-hijau font-bold">
                            Achievement Showcase
                        </div>
                        <div className="flex w-full">
                            <div className="bg-hijau flex w-6/12 mr-4 rounded-2xl">
                                <div className="w-6/12 ml-4 mb-4 flex mt-auto mr-auto text-hijauMuda font-bold text-2xl">{`Fajar's Portfolio`}</div>
                                <div className="w-6/12">
                                    <img src={art2} className="" />
                                </div>
                            </div>
                            <div className="bg-hijau flex-col w-3/12 rounded-2xl mr-4 p-4">
                                <div className="bg-kuning px-5 text-hijau font-bold text-lg w-fit rounded-full">
                                    1st Place
                                </div>
                                <div className="bg-black">
                                    <div className="text-hijauMuda font-bold text-2xl">
                                        DEFCON Capture The Flag 2022
                                    </div>
                                    <div className="text-hijauMuda font-medium">
                                        Las Vegas, USA
                                    </div>
                                </div>
                            </div>
                            <div className="bg-hijau flex-col rounded-2xl w-3/12"></div>
                        </div>
                    </div>
                    <div className="w-full flex">
                        <div className="w-6/12 flex-col"></div>
                        <div className="w-6/12 flex-col"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Achievement;
