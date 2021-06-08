export const TeamData: TeamMemberModel[] = [
    {
        name: 'John Doe',
        image: '/user.png',
        role: 'string',
        linkedIn: 'string',
        twitter: 'string',
        github: 'string'
    },
    {
        name: 'John Doe',
        image: '/user.png',
        role: 'string',
        linkedIn: 'string',
        twitter: 'string',
        github: 'string'
    }
];

export interface TeamMemberModel {
    name: string,
    image: string,
    role: string,
    linkedIn: string,
    twitter: string,
    github: string
}
