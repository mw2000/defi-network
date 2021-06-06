import { useEffect, useState } from "react";
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const [showContactOnNavbar, setShowContactOnNavbar] = useState(false)

    const [showNavLinks, setShowNavLinks] = useState(false);

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

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setShowNavLinks(true);
        }
    }, []);

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
        <nav className={"relative p-4 inset-x-0 top-0 z-50 bg-white"} style={{ height: isSmallScreen ? '72px' : 'auto' }}>
            {/* md:max-w-screen-xl  xl:mx-auto */}
            <div className="flex justify-between items-center px-0 md:px-4">
                <span role="link" className="cursor-pointer">
                    <Link href="/" aria-role="home" >
                        <a>
                            <Image src="/logo.svg" alt="brand logo" width={202} height={48} />
                        </a>
                    </Link>
                </span>

                <button className="md:hidden flex justify-center items-center" onClick={() => setShowNavLinks(!showNavLinks)}>
                    <Image src="/menu.svg" width={24} height={24} alt="mobile menu" />
                </button>
                <div className={`pb-12 md:pb-0 flex absolute left-0 right-0 top-24 md:top-0 bg-white gap-4 md:gap-0 
                md:flex flex-col md:flex-row md:relative flex-1 justify-center items-center font-medium xl:px-20 md:mx-12 ` +
                    (showNavLinks ? 'opacity-1' : 'opacity-0')}>
                    <div className="flex-1 text-center">
                        <a href="/#projects">Projects</a>
                    </div>
                    <div className="flex-1 text-center">
                        <a href="/#services">Services</a>
                    </div>
                    <div className="flex-1 text-center">
                        <a href="/#technologies">Technologies</a>
                    </div>
                    <div className="flex-1 text-center">
                        <a href="/#team">Team</a>
                    </div>
                    <div className="flex-1 text-center">
                        <a href="/#partnerships">Partnerships</a>
                    </div>
                    <div className="flex-1 text-center">
                        <a href="/#faq">FAQ</a>
                    </div>
                </div>

                <div className="cursor-pointer hidden md:block border-solid border-2 px-3 py-2 text-defi-blue transition duration-500 ease-in-out hover:bg-defi-blue hover:text-white border-defi-blue text-sm font-bold">
                    <Link href="/#contact" >
                        <a className="hover:text-white">
                            Get in touch
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
