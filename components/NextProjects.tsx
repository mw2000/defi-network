import React from 'react'
import { ProjectModel } from '../data/projectsData'
import Image from 'next/image'
import Link from 'next/link';

const NextProjects = (props: any) => {

    const projects: ProjectModel[] = props.projects;

    return (
        <div className="mb-36 mt-36">
            <h2 className="text-5xl font-medium">What’s next?</h2>
            <div className="grid gap-36 lg:grid-cols-2 ">
                {
                    projects.map(
                        (project: ProjectModel, index: number) => {
                            return <div key={index} className={index === 0 ? 'mt-24' : ''}>
                                {(index === 1) && <div className="bg-gray-200">
                                    <div className="pl-2 pt-2 lg:pl-8 lg:pt-8 flex">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={498}
                                            height={570}
                                            objectFit="cover"
                                        />
                                    </div>
                                </div>}
                                {
                                    (index === 0) && <div>
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={497}
                                            height={380}
                                            objectFit="cover"
                                        />
                                    </div>
                                }
                                <h2 className="text-2xl font-bold mt-4">{project.name} —</h2>
                                <p className={"mt-2 " + (index === 4 ? 'w-1/2' : 'w-full')}>{project.excerpt}</p>
                                <div className="mt-8 text-xl font-medium font-neueMachina">
                                    <Link href={`/case-study/${encodeURIComponent(project.id)}`}><a>View case study ↗</a></Link>
                                </div>
                            </div>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default NextProjects
