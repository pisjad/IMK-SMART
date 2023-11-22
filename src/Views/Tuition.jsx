import { Link } from "react-router-dom";
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
            </div>
        </>
    );
};

export default Tuition;
