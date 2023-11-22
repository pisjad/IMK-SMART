import art from "../assets/Images/Welcoming.svg";
import fajar from "../assets/Images/fajar.png";
import { Link } from "react-router-dom";
const Profile = () => {
    return (
        <>
            <div className="w-full px-16 py-16 h-full flex font-dmsans">
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
                <div className="kontener w-10/12 mt-24">
                    <div className="bg-hijau w-full rounded-2xl text-hijauMuda flex mb-6">
                        <div className="mt-auto p-4">
                            <div className="font-bold text-2xl mb-2">
                                Welcome Back,
                            </div>
                            <div className="font-bold text-3xl mb-2">
                                Muhammad Fajar
                            </div>
                        </div>
                        <img src={art} className="w-5/12 ml-auto" />
                    </div>
                    <div className="w-full flex">
                        <div className="bg-kuning w-4/12 h-[72vh] rounded-2xl">
                            <div className="bg-hijau w-full flex items-center justify-center rounded-2xl p-6">
                                <div className="w-fit flex-col items-center justify-center mx-auto">
                                    <img src={fajar} className="w-10/12 mx-auto" />
                                    <div className="text-hijauMuda text-2xl font-bold my-4 mx-auto w-fit">
                                        Muhammad Fajar
                                    </div>
                                    <div className="w-fit px-5 mx-auto bg-hijauMuda rounded-full text-hijau flex text-center">
                                        Active
                                    </div>
                                </div>
                            </div>
                            <div className="text-xl font-semibold text-hijau flex-col text-center my-6">
                                <div className="">225150207111084</div>
                                <div className="">Merjosari, Lowokwaru</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
