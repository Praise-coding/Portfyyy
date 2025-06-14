'use cache'
import {GraphQLClient} from 'graphql-request';
import {FAQSTypes, ProjectTypes, TestimonialTypes} from "@/app/Types";

const customFetch: typeof fetch = (url, options = {}) => {
    return fetch(url, {
        ...options,
        next: {revalidate: 0},
    });
};

const hygraph = new GraphQLClient("https://eu-west-2.cdn.hygraph.com/content/cmbp4rnno02vu08w2vute9nzu/master", {fetch: customFetch});

const GET_PROJECTS = `
  query GetProjects {
    projects (where: { projectName_not: null }) {
    id
    projectName
    projectDescription
    projectGitHubLink
    projectUrl
    projectType
    projectTechStack
    projectImages {
      url
    }
  }
}
`;

const GET_Testimonials = `
query GetTestimonials {
  testimonial (where : {commenterName_not : null}) {
    id
    starNo
    commenterTitle
    commenterName
    picture {
        url
    }
    comment
  }
}
`;

const GET_FAQS = `
  query GetFaqs {
    faqs (where: { question_not: null }) {
        id
        answer
        question
    }
  }
`;

export async function projectData(): Promise<ProjectTypes[]> {
    const {projects} = await hygraph.request<{ projects: ProjectTypes[] }>(GET_PROJECTS);
    console.log(projects)
    return projects
}

export async function testimonialData(): Promise<TestimonialTypes[]> {
    const {testimonial} = await hygraph.request<{ testimonial: TestimonialTypes[] }>(GET_Testimonials);
    return testimonial
}

export async function faqData(): Promise<FAQSTypes[]> {
    const {faqs} = await hygraph.request<{ faqs: FAQSTypes[] }>(GET_FAQS);
    return faqs
}

