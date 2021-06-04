import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'

const Layout = (props: any) => {
    const { children } = props;
    return (
        <div className="font-avenir">
            <Navbar></Navbar>
            {children}
            <footer className="grid grid-cols-3 text-sm py-3 px-4 sm:px-0 max-w-sm md:max-w-md mx-auto lg:justify-start lg:max-w-screen-lg lg:mx-40 ">
                <span className="col-span-1 ">{new Date().getFullYear()}&#169;Vertrical</span>
                <div className="col-span-2 lg:justify-start flex justify-between">
                    <div className="pl-12 lg:pl-24 ">
                        <Link href="/privacy">Privacy Policy</Link>
                    </div>
                    <div className="lg:pl-36">
                        <Link href="/legal">Legal Disclosure</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
