import Link from 'next/link';
import React from 'react'
import ProjectGroup from './ProjectGroup';

const Projects = () => {

    const projects = [
        {
            name: 'Musee —',
            excerpt: 'Euismod malesuada aliquam sapien donec. Nibh enim accumsan id ante sagittis. Lorem sit varius pharetra ultrices enim.',
            image: '/project1.png'
        },
        {
            name: 'Musee —',
            excerpt: 'Euismod malesuada aliquam sapien donec. Nibh enim accumsan id ante sagittis. Lorem sit varius pharetra ultrices enim.',
            image: '/project2.png'
        },
        {
            name: 'Musee —',
            excerpt: 'Euismod malesuada aliquam sapien donec. Nibh enim accumsan id ante sagittis. Lorem sit varius pharetra ultrices enim.',
            image: '/project1.png'
        },
        {
            name: 'Musee —',
            excerpt: 'Euismod malesuada aliquam sapien donec. Nibh enim accumsan id ante sagittis. Lorem sit varius pharetra ultrices enim.',
            image: '/project2.png'
        },
        {
            name: 'Musee —',
            excerpt: 'Euismod malesuada aliquam sapien donec. Nibh enim accumsan id ante sagittis. Lorem sit varius pharetra ultrices enim.',
            image: '/project5.png'
        },
    ];

    let chunk = 5;
    let groupedProjects: any[] = [];
    for (let i = 0; i < projects.length; i += chunk) {
        groupedProjects = [...groupedProjects, projects.slice(i, i + chunk)];
    }
    console.log(groupedProjects);



    return (
        <div className="mt-32 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto ">
            <p className="text-2xl font-bold mb-8">Past Projects</p>
            {
                groupedProjects.map(
                    (groupProj: ProjectModel, index: number) => {
                        return <ProjectGroup key={index} projectGroup={groupProj}></ProjectGroup>
                    }
                )
            }
            <div className="mt-32 text-xl font-semibold">
                <Link href="/projects">View all projects ↗</Link>
            </div>
        </div>
    )
}

export interface ProjectModel {
    name: string;
    image: string;
    excerpt: string;
}

export default Projects
