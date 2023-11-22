const FooterWeb = () => {
    return (
        <>
            {/* <div className=" bg-white  py-6 flex justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <a
                        href="#"
                        className="font-dmsans max-w-sm text-lg bg-hijau text-hijauMuda py-8 mx-4 rounded-tl-xl rounded-tr-xl"
                    >
                        <span className="link-underline link-underline-black text-black">
                            © 2023 <strong className="font-bold">SMART</strong>.
                            All rights reserved.
                        </span>
                    </a>
                </div>
            </div> */}
            <div className="group bg-white">
                <footer className=" bg-hijau text-hijauMuda font-dmsans py-8 mx-4 rounded-tl-xl rounded-tr-xl cursor-default">
                    <div className="text-center ">
                    <a
                        className="font-dmsans max-w-sm text-lg bg-hijau text-hijauMuda py-8 mx-4 rounded-tl-xl rounded-tr-xl"
                    >
                        <span className="link-underline link-underline-black text-hijauMuda">
                            © 2023 <strong className="font-bold">SMART</strong>.
                            All rights reserved.
                        </span>
                    </a>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default FooterWeb;
