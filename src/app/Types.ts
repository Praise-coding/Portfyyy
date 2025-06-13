export type TestimonialTypes = {
    id: number
    starNo: number
    comment: string
    picture: Record<'url', string>,
    commenterName: string,
    commenterTitle: string
}

export type FAQSTypes = {
    id: number
    question: string,
    answer: string
}

export type ProjectTypes = {
    id: number,
    projectName: string,
    projectUrl: string,
    projectGitHubLink: string,
    projectImages: Record<'url', string>[],
    projectDescription: string
    projectTechStack: string[],
    projectType: string
}

export type contactInfoType = {
    contactType: string,
    contactDetails: string
}