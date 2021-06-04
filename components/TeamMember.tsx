import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { TeamMemberModel } from './Team';

const TeamMember = (props: any) => {
    const member: TeamMemberModel = props.member;
    return (
        <div className="flex flex-col">
            <Image src={member.image} alt={member.name} width={337} height={382} />
            <p className="text-defi-blue font-xl">{member.name}</p>
            <p>{member.role}</p>
            <div className="flex">
                <Link href="/contact">
                    <img src="/linkedIn.svg" width='16px' height='16px' alt="linked profile link" />
                </Link>
            </div>
        </div>
    )
}

export default TeamMember
