import React from 'react'
import { ServiceModel } from './Services';

const Service = (props: any) => {
    const service: ServiceModel = props.service;
    return (
        <div>
            <div className="w-4 h-4 rounded-full bg-defi-blue"></div>
            <p className="text-2xl text-defi-blue pt-4 pb-5">{service.name}</p>
            <p>{service.description}</p>
        </div>
    )
}

export default Service
