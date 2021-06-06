import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { ProjectData, ProjectModel } from '../../data/projectsData';
import Meta from '../Meta';
import ProjectGroup from './ProjectGroup';

const Projects = () => {

    const router = useRouter();

    const isProjectRoute = router.pathname === '/projects' ? true : false;

    const projects: ProjectModel[] = ProjectData;

    let chunk = 5;

    const [groupedProjects, setGroupedProjects] = useState<ProjectModel[][]>([]);


    useEffect(() => {
        let tempProjects: ProjectModel[][] = [];
        for (let i = 0; i < projects.length; i += chunk) {
            tempProjects = [...tempProjects, projects.slice(i, i + chunk)];
        }


        if (!isProjectRoute) {
            setGroupedProjects([tempProjects[0]]);
        } else {
            setGroupedProjects(tempProjects);
        }

    }, [])






    return (
        <>
            <Meta title={'Projects of The Defi Network LLC'} />
            <div id="projects" className="mt-32 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto">
                <h2 className={"font-bold pl-4 lg:pl-0 " + (isProjectRoute ? 'text-5xl mb-12' : 'text-2xl mb-8')}>{isProjectRoute ? 'All' : 'Past'} Projects</h2>
                {
                    groupedProjects.map(
                        (groupProj: ProjectModel[], index: number) => {
                            return <ProjectGroup key={index} projectGroup={groupProj}></ProjectGroup>
                        }
                    )
                }
                {!isProjectRoute && <div className="mt-32 text-2xl font-medium font-neueMachina pl-4 lg:pl-0">
                    <Link href="/projects"><a>View all projects ↗</a></Link>
                    <div className="bg-gray-100 h-0.5 mt-8"></div>

                </div>}
            </div>
        </>
    )
}



export default Projects
