import React, { useEffect } from 'react'
let heroStyle = {};
const Hero = () => {

    return (
        <div className="mt-24 lg:mt-44 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto ">
            <h1 className="text-4/5xl leading-tight lg:text-6xl px-4 lg:px-0  
            bg-clip-text text-transparent bg-gradient-to-l from-defi-purple  to-defi-blue hero-line-height">
                We’re The Defi Network. <br ></br> We build digital products <br className="hidden lg:inline-block"></br> & apps on the blockchain.
            </h1>
            <p className="text-xl pt-3 px-4 lg:px-0">The Defi Network is a global blockchain product team.</p>
        </div>
    )
}

export default Hero
