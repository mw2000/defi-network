import React from 'react'
import { TeamData, TeamMemberModel } from '../../data/teamData';
import TeamMember from './TeamMember'

const Team = () => {

    const teamMembers: TeamMemberModel[] = TeamData;

    return (
        <div id="team" className="mt-32 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto px-4 lg:px-0">
            <h2 className="text-lg">Team</h2>
            <p className="text-4/5xl lg:text-5xl leading-tight font-medium font-neueMachina my-5">Aliquam neque <br className="hidden lg:inline-block" /> pharetris</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 mt-12">
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

export default Team
