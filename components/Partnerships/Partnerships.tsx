import Link from 'next/link';
import React from 'react'
import { PartnershipData, PartnershipModel } from '../../data/partnershipData';
import Partnership from './Partnership';

const Partnerships = () => {

    const partnerships: PartnershipModel[] = PartnershipData;


    return (
        <div id="partnerships" className="mt-32 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto ">
            <h2 className="text-lg">Partnerships</h2>
            <p className="text-5xl font-bold my-5">Some of our <br className="hidden lg:inline-block" /> partners & clients.</p>

            <div className="mt-24 grid md:grid-cols-3 gap-16">
                {
                    partnerships.map(
                        (partner: PartnershipModel, index: number) => {
                            return <Partnership key={index} partner={partner} />

                        }
                    )
                }
            </div>
            <p className="text-2xl mt-20">Interested in partnering? <Link href="/contact"> Get in touch ↗</Link></p>
        </div>
    )
}

export default Partnerships
