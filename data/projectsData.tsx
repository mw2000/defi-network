export const ProjectData: ProjectModel[] = [
    {
        id: '1',
        name: 'Musée',
        excerpt: '',
        image: '/projects/musee.png',
        projectLink: "",
        caseStudy: {
            abstract: 'At the dawn of the heroic age of cryptoart, Accursed Share is the first artist-led engine for dedicated experimentation through smart contracts. ',
            technologies: ['Frontend development', 'Backend development', 'Smart Contracts', 'Quality assurance'],
            heading1: 'Heading 1',
            heading2: 'Heading 2',
            description1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description3: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            testimonial: {
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
                employeeName: 'John',
                emloyeeRole: 'Founder'
            },
            resultDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            projectLink: '',
            images: ['/project5.png', '/project5.png', '/project5.png', '/project5.png', '/project5.png']
        }

    },
    {
        id: '2',
        name: 'DR.EV4L',
        excerpt: 'A custom NFT marketplace for Young Nudy.',
        image: '/projects/youngnudy.png',
        projectLink: "http://youngnudy.com/",
        caseStudy: {
            abstract: 'At the dawn of the heroic age of cryptoart, Accursed Share is the first artist-led engine for dedicated experimentation through smart contracts. ',
            technologies: ['Frontend development', 'Backend development', 'Smart Contracts', 'Quality assurance'],
            heading1: 'Heading 1',
            heading2: 'Heading 2',
            description1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description3: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            testimonial: {
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
                employeeName: 'John',
                emloyeeRole: 'Founder'
            },
            resultDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            projectLink: '',
            images: ['/project5.png', '/project5.png', '/project5.png', '/project5.png', '/project5.png']
        }

    },
    {
        id: '3',
        name: 'Sturna NFT Marketplace',
        excerpt: 'Euismod malesuada aliquam sapien donec. Nibh enim accumsan id ante sagittis. Lorem sit varius pharetra ultrices enim.',
        image: '/projects/saturna.png',
        projectLink: "http://nft.saturna.co/",
        caseStudy: {
            abstract: 'At the dawn of the heroic age of cryptoart, Accursed Share is the first artist-led engine for dedicated experimentation through smart contracts. ',
            technologies: ['Frontend development', 'Backend development', 'Smart Contracts', 'Quality assurance'],
            heading1: 'Heading 1',
            heading2: 'Heading 2',
            description1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description3: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            testimonial: {
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
                employeeName: 'John',
                emloyeeRole: 'Founder'
            },
            resultDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            projectLink: '',
            images: ['/project5.png', '/project5.png', '/project5.png', '/project5.png', '/project5.png']
        }
    },
    {
        id: '4',
        name: 'The Curse NFT',
        excerpt: 'Have you seen this face?',
        image: '/projects/accursed.png',
        projectLink: "https://accursedshare.art/the-curse-nft/",
        caseStudy: {
            abstract: 'At the dawn of the heroic age of cryptoart, Accursed Share is the first artist-led engine for dedicated experimentation through smart contracts. ',
            technologies: ['Frontend development', 'Backend development', 'Smart Contracts', 'Quality assurance'],
            heading1: 'Heading 1',
            heading2: 'Heading 2',
            description1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description3: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            testimonial: {
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
                employeeName: 'John',
                emloyeeRole: 'Founder'
            },
            resultDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            projectLink: '',
            images: ['/project5.png', '/project5.png', '/project5.png', '/project5.png', '/project5.png']
        }
    },
];

export interface ProjectModel {
    id: string,
    name: string,
    image: string,
    excerpt: string,
    caseStudy: CaseStudy
    projectLink: string
}


export interface CaseStudy {
    abstract: string,
    technologies: string[],
    heading1: string,
    heading2: string,
    description1: string,
    description2: string,
    description3: string,
    testimonial: Testimonial,
    resultDescription: string,
    projectLink: string,
    images: string[]
}

export interface Testimonial {
    text: string,
    employeeName: string,
    emloyeeRole: string
}