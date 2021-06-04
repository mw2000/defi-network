import React from 'react'
import { ProjectModel } from './Projects';
import Image from 'next/image'
import Link from 'next/link';

const ProjectGroup = (props: any) => {
    const projects = props.projectGroup;
    return (
        <div className="grid gap-36 grid-cols-2 ">
            {
                projects.map(
                    (project: ProjectModel, index: number) => {
                        return <div key={index} className={index === 3 ? '-mt-48' : ''} style={{ gridColumn: index === 4 ? 'span 2' : 'span 1' }}>
                            {(index === 0 || index === 3) && <div className="bg-gray-200">
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
                                (index === 1 || index === 2) && <div>
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        width={497}
                                        height={380}
                                        objectFit="cover"
                                    />
                                </div>
                            }
                            {
                                (index === 4) && <div>
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        width={955}
                                        height={600}
                                        objectFit="cover"
                                    />
                                </div>
                            }
                            <h2 className="text-2xl font-bold mt-4">{project.name}</h2>
                            <p className={"mt-2 " + (index === 4 ? 'w-1/2' : 'w-full')}>{project.excerpt}</p>
                            <div className="mt-8 text-xl font-semibold">
                                <Link href="/projects">View case study ↗</Link>
                            </div>
                        </div>
                    }
                )
            }

        </div>
    )
}
// style={{ gridColumn: 'span 2' }}

export default ProjectGroup
