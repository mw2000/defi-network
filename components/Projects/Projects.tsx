import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { ProjectData, ProjectModel } from '../../data/projectsData';
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
        <div id="projects" className="mt-32 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto">
            <p className={"font-bold " + (isProjectRoute ? 'text-5xl mb-12' : 'text-2xl mb-8')}>{isProjectRoute ? 'All' : 'Past'} Projects</p>
            {
                groupedProjects.map(
                    (groupProj: ProjectModel[], index: number) => {
                        return <ProjectGroup key={index} projectGroup={groupProj}></ProjectGroup>
                    }
                )
            }
            {!isProjectRoute && <div className="mt-32 text-xl font-semibold">
                <Link href="/projects"><a>View all projects ↗</a></Link>
            </div>}
        </div>
    )
}



export default Projects
