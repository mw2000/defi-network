import React from 'react'
import TeamMember from './TeamMember'

const Team = () => {

    const teamMembers: TeamMemberModel[] = [
        {
            name: 'string',
            image: '/public/gridImage1.png',
            role: 'string',
            linkedIn: 'string',
            twitter: 'string',
            github: 'string'
        },
        {
            name: 'string',
            image: '/public/gridImage1.png',
            role: 'string',
            linkedIn: 'string',
            twitter: 'string',
            github: 'string'
        }
    ]

    return (
        <div className="mt-32 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto ">
            <h2 className="text-lg">Team</h2>
            <p className="text-4xl font-bold my-5">Aliquam neque <br className="hidden lg:inline-block" /> pharetris</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    teamMembers.map(
                        (member: TeamMemberModel, index: number) => {
                            return <TeamMember member={member} key={index} />
                        }
                    )
                }
            </div>
        </div>
    )
}

export interface TeamMemberModel {
    name: string,
    image: string,
    role: string,
    linkedIn: string,
    twitter: string,
    github: string
}

export default Team
