export const ServicesData: ServiceModel[] = [
    {
        name: 'Smart Contracts',
        description: 'We develop smart contracts for your blockchain project.'
    },
    {
        name: 'Auditing',
        description: 'Want to get your smart contracts audited? Contact us.'
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

export interface ServiceModel {
    name: string,
    description: string
}
