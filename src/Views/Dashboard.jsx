import Navbar from "./Navbar";
import FooterWeb from "./FooterWeb";
import art from "../assets/Images/Welcoming.svg";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="w-full px-16 py-16 h-full flex font-dmsans">
                <div className="sidebar w-2/12 pr-8 text-center text-lg flex-col pt-24">
                    <div className="bg-hijau rounded-lg py-2 text-hijauMuda font-medium mb-6">
                        <p>Dashboard</p>
                    </div>
                    <div className="bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6 hover:bg-hijau duration-300 hover:text-hijauMuda cursor-pointer">
                        <p>Profile</p>
                    </div>
                    <div className="bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6 hover:bg-hijau duration-300 hover:text-hijauMuda cursor-pointer">
                        <p>Course</p>
                    </div>
                    <div className="bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6 hover:bg-hijau duration-300 hover:text-hijauMuda cursor-pointer">
                        <p>Grade</p>
                    </div>
                    <div className="bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6 hover:bg-hijau duration-300 hover:text-hijauMuda cursor-pointer">
                        <p>Tuition</p>
                    </div>
                    <div className="bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6 hover:bg-hijau duration-300 hover:text-hijauMuda cursor-pointer">
                        <p>Career</p>
                    </div>
                    <div className="bg-hijauMuda rounded-lg py-2 text-hijau font-medium my-6 hover:bg-hijau duration-300 hover:text-hijauMuda cursor-pointer">
                        <p>Achivement</p>
                    </div>
                </div>
                <div className="kontener w-10/12 pt-24">
                    <div className="bg-hijau w-full rounded-2xl text-hijauMuda flex ">
                        <div className="mt-auto p-4">
                            <div className="font-bold text-3xl mb-2">
                                Welcome Back, Fajar!
                            </div>
                            <div className="text-lg">
                                {`Remember, tough times don't last, `}
                                <br /> but tough students do!
                            </div>
                        </div>
                        <img src={art} className="w-5/12 ml-auto" />
                    </div>
                    <div className="bg-hijau rounded-2xl mt-6 p-4">
                        <div className="text-hijauMuda  text-2xl font-bold mb-4">
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
                                    Basis Data
                                </div>
                            </div>
                        </div>
                        <div className="ml-6 w-1/2">
                            <div className="text-2xl pt-4 font-bold text-hijau mb-4">
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
                                    <div className="">
                                        Basis Data
                                    </div>
                                    <div className="ml-auto text-6xl">35%</div>
                                </div>
                                <div className="bg-hijau font-semibold text-2xl text-hijauMuda p-4 rounded-2xl flex mb-4">
                                    <div className="">
                                        Jaringan Komputer
                                    </div>
                                    <div className="ml-auto text-6xl">58%</div>
                                </div>
                                <div className="bg-hijau font-semibold text-2xl text-hijauMuda p-4 rounded-2xl flex">
                                    <div className="">
                                        Desain Analisis <br /> Algoritma
                                    </div>
                                    <div className="ml-auto text-6xl">50%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterWeb />
        </>
    );
};

export default Dashboard;
