import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
                    className="kontener w-10/12 flex-col mt-24"
                >
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
                            <div className="bg-hijau flex flex-col w-3/12 rounded-2xl mr-4 p-4">
                                <div className="bg-kuning px-5 text-hijau font-bold text-lg w-fit rounded-full">
                                    1st Place
                                </div>
                                <div className="flex mt-auto self-stretch text-hijauMuda font-bold text-2xl ">
                                    DEFCON Capture The Flag 2022
                                </div>
                                <div className="text-hijauMuda font-medium">
                                    Las Vegas, USA
                                </div>
                            </div>
                            <div className="bg-hijau flex flex-col w-3/12 items-start rounded-2xl overflow-hidden p-4">
                                <div className="bg-kuning px-5 text-hijau font-bold text-lg w-fit rounded-full">
                                    3rd Place
                                </div>
                                <p className="flex mt-auto self-stretch  font-bold text-hijau-muda text-2xl text-hijauMuda ">
                                    Google Online Marketing Challenge 2023
                                </p>
                                <div className="text-hijauMuda self-stretch font-medium text-hijau-muda text-lg ">
                                    Leipzig, German
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex mt-6">
                        <div className="w-6/12 flex-col">
                            <div className="bg-hijau p-4 w-full flex-col rounded-2xl">
                                <p className="text-hijauMuda text-2xl font-bold mb-4">
                                    License & Certificates
                                </p>
                                <div className="bg-hijauMuda flex-col text-hijau p-4 rounded-2xl mb-4">
                                    <div className="font-bold text-xl">
                                        CompTIA A+
                                    </div>
                                    <div className="font-medium text-lg">
                                        Issued Sep 2022
                                    </div>
                                </div>
                                <div className="bg-ungu flex-col text-hijauMuda p-4 rounded-2xl mb-4">
                                    <div className="font-bold text-xl">
                                        Cisco Certified Network Associate (CCNA)
                                    </div>
                                    <div className="font-medium text-lg">
                                        Issued Jul 2022
                                    </div>
                                </div>
                                <div className="bg-hijauMuda flex-col text-hijau p-4 rounded-2xl mb-4">
                                    <div className="font-bold text-xl">
                                        Certified Information Systems Security
                                        Professional (CISSP)
                                    </div>
                                    <div className="font-medium text-lg">
                                        Issued May 2022
                                    </div>
                                </div>
                                <div className="bg-kuning flex-col text-hijau p-4 rounded-2xl mb-4">
                                    <div className="font-bold text-xl">
                                        AWS Certified Solutions Architect
                                    </div>
                                    <div className="font-medium text-lg">
                                        Issued Aug 2022
                                    </div>
                                </div>
                                <div className="bg-ungu flex-col text-hijauMuda p-4 rounded-2xl">
                                    <div className="font-bold text-xl">
                                        Cisco Certified Network Associate (CCNA)
                                    </div>
                                    <div className="font-medium text-lg">
                                        Issued Jul 2022
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-ungu rounded-2xl p-4 flex-col mt-6">
                                <div className="text-hijauMuda font-bold text-2xl mb-4">
                                    Finished Project
                                </div>
                                <div className="bg-hijau flex-col text-hijauMuda p-4 rounded-2xl mb-4">
                                    <div className="font-bold text-xl">
                                        CyberSentinel
                                    </div>
                                    <div className="font-medium text-lg">
                                        Antivirus
                                    </div>
                                </div>
                                <div className="bg-hijau flex-col text-hijauMuda p-4 rounded-2xl mb-4">
                                    <div className="font-bold text-xl">
                                        CryptoFrame
                                    </div>
                                    <div className="font-medium text-lg">
                                        Image Encryption
                                    </div>
                                </div>
                                <div className="bg-hijau flex-col text-hijauMuda p-4 rounded-2xl">
                                    <div className="font-bold text-xl">
                                        Recovolution
                                    </div>
                                    <div className="font-medium text-lg">
                                        Lost Data Retrieval
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-6/12 flex-col ml-6">
                            <div className="bg-hijau w-full p-4 rounded-2xl flex-col">
                                <div className="text-hijauMuda w-full font-bold text-2xl mb-4">
                                    Upcoming Competitions
                                </div>
                                <div className="text-hijau font-bold text-xl max-w-full rounded-2xl bg-hijauMuda p-4 mb-4">
                                    ACM International Collegiate Programming
                                    Contest (ICPC)
                                </div>
                                <div className="text-hijau font-bold text-xl max-w-full rounded-2xl bg-hijauMuda p-4">
                                    Cyber Security Capture The Flag (CTF)
                                </div>
                            </div>
                            <div className="bg-hijau w-full p-4 rounded-2xl flex-col mt-6">
                                <div className="text-hijauMuda font-bold text-2xl mb-4">
                                    Skills
                                </div>
                                <div className="bg-kuning flex-col text-hijau p-4 rounded-2xl mb-4">
                                    <div className="font-bold text-xl">C++</div>
                                    <div className="font-medium text-lg">
                                        Expert
                                    </div>
                                </div>{" "}
                                <div className="bg-kuning flex-col text-hijau p-4 rounded-2xl mb-4">
                                    <div className="font-bold text-xl">
                                        HTML & CSS
                                    </div>
                                    <div className="font-medium text-lg">
                                        Novice
                                    </div>
                                </div>{" "}
                                <div className="bg-kuning flex-col text-hijau p-4 rounded-2xl mb-4">
                                    <div className="font-bold text-xl">
                                        Python
                                    </div>
                                    <div className="font-medium text-lg">
                                        Expert
                                    </div>
                                </div>{" "}
                                <div className="bg-kuning flex-col text-hijau p-4 rounded-2xl mb-4">
                                    <div className="font-bold text-xl">AWS</div>
                                    <div className="font-medium text-lg">
                                        Expert
                                    </div>
                                </div>
                                <div className="bg-kuning flex-col text-hijau p-4 rounded-2xl mb-4">
                                    <div className="font-bold text-xl">
                                        Adobe Photoshop
                                    </div>
                                    <div className="font-medium text-lg">
                                        Novice
                                    </div>
                                </div>
                                <div className="bg-kuning flex-col text-hijau p-4 rounded-2xl ">
                                    <div className="font-bold text-xl">
                                        Figma
                                    </div>
                                    <div className="font-medium text-lg">
                                        Novice
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

export default Achievement;
