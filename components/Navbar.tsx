import { useEffect, useState } from "react";
import Link from 'next/link'


const Navbar = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const [showContactOnNavbar, setShowContactOnNavbar] = useState(false)
    // const debounce = (callback, wait) => {
    //     let timeoutId = null;
    //     return (...args) => {
    //         window.clearTimeout(timeoutId);
    //         timeoutId = window.setTimeout(() => {
    //             callback.apply(null, args);
    //         }, wait);
    //     };
    // }

    // const handleScroll = debounce(() => {
    //     window.scrollY > 0 ? setShowContactOnNavbar(true) : setShowContactOnNavbar(false);
    // }, 25);

    // useEffect(() => {
    //     if (window.innerWidth >= 600) {
    //         setShowContactOnNavbar(true);
    //     }
    // }, []);

    // useEffect(() => {
    //     if (window.innerWidth < 600) {
    //         setIsSmallScreen(true);
    //         window.addEventListener('scroll', handleScroll)
    //         return () => {
    //             window.removeEventListener('scroll', handleScroll)

    //         }
    //     }
    // })
    // + (!showContactOnNavbar ? 'flex items-center' : '')
    return (
        <nav className={"bg-vert-blue p-4 fixed inset-x-0 top-0 z-50 bg-white"} style={{ height: isSmallScreen ? '72px' : 'auto' }}>
            {/* lg:max-w-screen-xl  xl:mx-auto */}
            <div className=" flex justify-between items-center px-4">
                <span role="link" tabIndex={1}>
                    <Link href="/" aria-role="home" >
                        <img src="./logo.svg" width="200px" alt="brand logo" />
                    </Link>
                </span>
                <div className="flex-1 justify-center items-center  font-bold px-20 hidden lg:flex mx-12">
                    <div className="flex-1 text-center">
                        <a href="/#how">Projects</a>
                    </div>
                    <div className="flex-1 text-center">
                        <a href="/#who">Services</a>
                    </div>
                    <div className="flex-1 text-center">
                        <a href="/#why">Technologies</a>
                    </div>
                    <div className="flex-1 text-center">
                        <a href="/#why">Team</a>
                    </div>
                    <div className="flex-1 text-center">
                        <a href="/#why">Partnerships</a>
                    </div>
                    <div className="flex-1 text-center">
                        <a href="/#why">FAQ</a>
                    </div>

                </div>
                <div className="border-solid border-2 px-3 py-2 text-defi-blue border-defi-blue text-sm font-bold">
                    <Link href="/contact" >
                        Get in touch
                </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
