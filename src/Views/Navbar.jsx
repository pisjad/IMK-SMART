import bulbIcon from "../assets/Images/bulb.svg";
import notification from "../assets/Images/notif.svg";
import profile from "../assets/Images/profile.svg";

const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 w-full z-50 px-16 py-6 flex transition duration-300 ease-in-out justify-between bg-white shadow-lg">
                <div className="group relative text-3xl font-dmsans font-bold px-8 py-3 bg-hijauMuda text-hijau rounded-lg flex items-center shadow-lg overflow-hidden">
                    <div className="relative mx-auto">
                        <img src={bulbIcon} className="w-8/12" />
                    </div>
                    <div className="relative mx-auto">SMART</div>
                </div>
                <div className="flex items-center">
                    <div>
                        <img src={notification} className="w-8/12" />
                    </div>
                    <div>
                        <img src={profile} className="w-8/12" />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
