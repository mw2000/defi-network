import React from 'react'
import Service from './Service'

const Services = () => {

    const services: ServiceModel[] = [
        {
            name: 'Strategy',
            description: ''
        },
        {
            name: 'Smart Contracts',
            description: 'We develop smart contracts for your blockchain project.'
        },
        {
            name: 'Auditing',
            description: ''
        },
        {
            name: 'Development',
            description: 'We develop anything from landing pages to a full functioning website.'
        },
        {
            name: 'Web3 Integration',
            description: 'Integrating blockchain smart contracts seamlessly to the front end.'
        },
        {
            name: 'UI/UX Design',
            description: 'We develop wireframes, UI/UX mockups for your application.'
        },
        {
            name: 'and much more!',
            description: 'We offer other software services too. Contact us below.'
        },
    ]



    return (
        <div className="mt-32 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto ">
            <h2 className="text-lg">Services</h2>
            <p className="text-4xl font-bold my-5">We build modern <br className="hidden lg:inline-block" /> experiences</p>
            <p className="text-lg">Do you need a complete project developed? Maybe you just need some extra manpower for <br className="hidden lg:inline-block" /> select services? We offer different services for different needs.</p>

            <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-20">
                {
                    services.map(
                        (service: ServiceModel, index: number) => {
                            return <Service service={service} key={index} />
                        }
                    )
                }
            </div>

        </div>
    )
}

export interface ServiceModel {
    name: string,
    description: string
}

export default Services
