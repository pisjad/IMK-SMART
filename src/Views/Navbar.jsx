import bulbIcon from "../assets/Images/bulb.svg";
// import notification from "../assets/Images/notif.svg";
// import profile from "../assets/Images/profile.svg";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 text-lg font-dmsans flex ${
                scrolling ? "bg-transparent " : "bg-transparent"
            } transition duration-300 ease-in-out`}
        >
            <div
                className={`ml-16 gap-2 flex justify-center items-start text-center rounded-lg px-5 text-2xl py-2 my-8 font-bold bg-hijauMuda text-hijau
        ${
            scrolling ? "scale-125 shadow-xl" : "scale-100 mt-8"
        } transition duration-500 ease-in-out`}
            >
                <img src={bulbIcon} className="w-3/12" />
                <div className="my-auto">SMART</div>
            </div>
        </nav>
    );
};

{
    /* <nav className="fixed top-0 w-full z-50 px-16 py-6 flex transition duration-300 ease-in-out justify-between bg-white shadow-lg">
                <div className="group relative text-3xl font-dmsans font-bold px-8 py-3 bg-hijauMuda text-hijau rounded-lg flex items-center shadow-lg overflow-hidden">
                    <div className="relative mx-auto">
                        <img src={bulbIcon} className="w-8/12" />
                    </div>
                    <div className="relative mx-auto">SMART</div>
                </div>
                <div className="flex items-center space-x-4 px-auto">
                    <div className="flex hover:bg-slate-200 rounded-full items-center justify-center duration-300">
                        <img src={notification} className="w-8/12" />
                    </div>
                    <div className="flex hover:bg-slate-200 rounded-full items-center justify-center duration-300">
                        <img src={profile} className="w-8/12" />
                    </div>
                </div>
            </nav> */
}

export default Navbar;
