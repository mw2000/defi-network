import React from 'react'
import Image from 'next/image'
import { PartnershipModel } from '../../data/partnershipData';

const Partnership = (props: any) => {

    const partner: PartnershipModel = props.partner;

    return (
        <div>
            <Image src={partner.image} alt={partner.name} width={130} height={40} />
            <p className="text-xl font-bold font-neueMachina mt-5 mb-4">{partner.name}</p>
            <p className="text-lg">{partner.description}</p>
            <p className="text-base text-gray-400 mt-4">{partner.type}</p>
        </div>
    )
}

export default Partnership
