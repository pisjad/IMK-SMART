import { Link } from "react-router-dom";
const Career = () => {
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
                    <div className="bg-hijau rounded-lg py-2 text-hijauMuda font-medium mb-6">
                        <p>Career</p>
                    </div>
                    <Link to="/Achievement">
                        <div className="group relative bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6  cursor-pointer">
                            <div className="absolute opacity-0 group-hover:opacity-100 inset-0 w-3 rounded-lg bg-hijau transition-all duration-300 ease-out group-hover:w-full "></div>
                            <span className="relative text-hijau group-hover:text-hijauMuda">
                                Achievement
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="kongtener w-10/12 h-full flex  mt-24">
                    <div className="flex-col">
                        <div className="flex">
                            <div className="w-full h-auto bg-hijau rounded-2xl p-4">
                                <div className="text-2xl text-hijauMuda font-semibold flex-col">
                                    Succes Rate
                                </div>
                                <div className="bg-kuning w-full h-auto rounded-2xl mt-2 p-4">
                                    <div className="flex">
                                        <div className="text-5xl font-bold text-hijau">
                                            87%
                                        </div>
                                        <div className="bg-hijau w-7/12  rounded-full ml-auto">
                                            <div className="text-hijauMuda text-xl text-center font-semibold ">
                                                Multimedia <br />
                                                Stream
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-hijau">
                                        success rate
                                    </div>
                                    <div className="bg-ungu rounded-lg text-hijauMuda mt-2 p-2">
                                        Based on your grade in Interaksi Manusia
                                        dan Komputer
                                    </div>
                                </div>
                                <div className="bg-kuning w-full h-auto rounded-2xl mt-4 p-4">
                                    <div className="flex">
                                        <div className="text-5xl font-bold text-hijau">
                                            76%
                                        </div>
                                        <div className="bg-hijau w-7/12  rounded-full ml-auto">
                                            <div className="text-hijauMuda text-xl text-center font-semibold ">
                                                Data Science <br />
                                                Stream
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-hijau">
                                        success rate
                                    </div>
                                    <div className="bg-ungu rounded-lg text-hijauMuda mt-2 p-2">
                                        Based on your grade in Interaksi Manusia
                                        dan Komputer
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-full h-auto bg-hijau rounded-2xl p-4 mt-6">
                                <div className="text-2xl text-hijauMuda font-semibold flex-col">
                                    Finished Lesson
                                </div>
                                <div className="bg-kuning w-full h-auto rounded-2xl mt-2 flex p-4">
                                    <div className="text-hijau font-semibold text-xl">
                                        Pemrograman <br /> Dasar
                                    </div>
                                    <div className="bg-ungu w-auto h-auto rounded-lg flex ml-auto">
                                        <div className="text-hijauMuda text-5xl font-semibold p-4">
                                            A+
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-kuning w-full h-auto rounded-2xl mt-4 flex p-4">
                                    <div className="text-hijau font-semibold text-xl">
                                        Arsitektur dan <br /> Organisasi <br />
                                        Komputer
                                    </div>
                                    <div className="bg-ungu w-auto h-auto rounded-lg flex ml-auto">
                                        <div className="text-hijauMuda text-5xl font-semibold p-4">
                                            B+
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-kuning w-full h-auto rounded-2xl mt-4 flex p-4">
                                    <div className="text-hijau font-semibold text-xl">
                                        Arsitektur dan <br /> Sains Data
                                    </div>
                                    <div className="bg-ungu w-auto h-auto rounded-lg flex ml-auto">
                                        <div className="text-hijauMuda text-5xl font-semibold p-4">
                                            A+
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-7/12 h-fit ml-6 rounded-2xl bg-hijau p-4 ">
                        <div className="text-2xl text-hijauMuda font-semibold flex-col">
                            Career Recomendation and Roadmap
                        </div>
                        <div className="bg-hijauMuda w-full h-auto rounded-2xl mt-2 p-4">
                            <div className="flex">
                                <div className="bg-ungu w-7/12  rounded-3xl mr-auto">
                                    <div className="text-hijauMuda text-xl text-center font-semibold ">
                                        Video Game Developer
                                    </div>
                                </div>
                            </div>
                            <div className="text-hijau text-xs ml-4 mt-4">
                                need to complete:
                            </div>
                            <div className="flex">
                                <div className="bg-hijau mt-4 ml-4 w-3 h-3 rounded-full"></div>

                                <div className=" text-hijau text-sm mt-1 font-semibold  p-2">
                                    Pemrograman Dasar
                                </div>
                            </div>
                            <div className="flex">
                                <div className="bg-hijau mt-4 ml-4 w-3 h-3 rounded-full"></div>

                                <div className=" text-hijau text-sm mt-1 font-semibold  p-2">
                                    Grafika Komputer
                                </div>
                            </div>
                            <div className="flex">
                                <div className="bg-hijau mt-4 ml-4 w-3 h-3 rounded-full"></div>

                                <div className=" text-hijau text-sm mt-1 font-semibold  p-2">
                                    Application and Game Product Design
                                </div>
                            </div>
                        </div>
                        <div className="bg-hijauMuda w-full h-auto rounded-2xl mt-4 p-4">
                            <div className="flex">
                                <div className="bg-ungu w-7/12  rounded-3xl mr-auto">
                                    <div className="text-hijauMuda text-xl text-center font-semibold ">
                                        Full Stack Developer
                                    </div>
                                </div>
                            </div>
                            <div className="text-hijau text-xs ml-4 mt-4">
                                need to complete:
                            </div>
                            <div className="flex">
                                <div className="bg-hijau mt-4 ml-4 w-3 h-3 rounded-full"></div>

                                <div className=" text-hijau text-sm mt-1 font-semibold  p-2">
                                    Interaksi Manusia dan Komputer
                                </div>
                            </div>
                            <div className="flex">
                                <div className="bg-hijau mt-4 ml-4 w-3 h-3 rounded-full"></div>

                                <div className=" text-hijau text-sm mt-1 font-semibold  p-2">
                                    Algoritma dan Struktur Data
                                </div>
                            </div>
                            <div className="flex">
                                <div className="bg-hijau mt-4 ml-4 w-3 h-3 rounded-full"></div>

                                <div className=" text-hijau text-sm mt-1 font-semibold  p-2">
                                    Pemrograman Web
                                </div>
                            </div>
                        </div>
                        <div className="bg-hijauMuda w-full h-auto rounded-2xl mt-4 p-4">
                            <div className="flex">
                                <div className="bg-ungu w-auto px-5  rounded-3xl mr-auto">
                                    <div className="text-hijauMuda text-xl text-center font-semibold ">
                                        Data Engineer
                                    </div>
                                </div>
                            </div>
                            <div className="text-hijau text-xs ml-4 mt-4">
                                need to complete:
                            </div>
                            <div className="flex">
                                <div className="bg-hijau mt-4 ml-4 w-3 h-3 rounded-full"></div>

                                <div className=" text-hijau text-sm mt-1 font-semibold  p-2">
                                    Algoritma dan Struktur Data
                                </div>
                            </div>
                            <div className="flex">
                                <div className="bg-hijau mt-4 ml-4 w-3 h-3 rounded-full"></div>

                                <div className=" text-hijau text-sm mt-1 font-semibold  p-2">
                                    Basis Data
                                </div>
                            </div>
                            <div className="flex">
                                <div className="bg-hijau mt-4 ml-4 w-3 h-3 rounded-full"></div>

                                <div className=" text-hijau text-sm mt-1 font-semibold  p-2">
                                    Analisis Big Data
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Career;
