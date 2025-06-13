// import {ProjectTypes} from "@/app/Types";
//
// export const DemoProjectData = (): Promise<ProjectTypes[]> => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data = [
//                 {
//                     id: 1,
//                     projectDescription: "Boba etiam ut bulla tea est potus dilectus singulari compositione saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba refert ad pilas masticas tapiocas in fundo potus inventas, quae typice lacte tea nigro sapiuntur. Boba phaenomenon. See More....",
//                     projectName: "BeatStore",
//                     projectUrl: "https://beatstore.dev",
//                     projectGitHubLink: "https://github.com/youruser/beatstore",
//                     projectImages: [
//                         {url: "https://cdn.dribbble.com/userupload/16467699/file/still-66b588da559b992bf1a388f31d96a7bb.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/14912901/file/original-54f35b2c851a539d2c2bf4ffe7d12379.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/15023899/file/original-f1d09c3fec6bb0b54841951f7dc43d47.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/16375464/file/still-8a506de1920568d6720f63b130eadc6b.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/43304355/file/still-eee8c10fc04b17fe48e411c3ad6a98a3.png?format=webp&resize=640x480&vertical=center"}
//                     ],
//                     projectTechStack: ["Next.js", "TailwindCSS", "Stripe", "SQLite"],
//                     projectType: "Desktop App"
//                 },
//                 {
//                     id: 2,
//                     projectDescription: "A dynamic beat selling platform for producers. Offers secure payment integration and easy track management with modern UI/UX for music professionals.",
//                     projectName: "SoundWaves",
//                     projectUrl: "https://soundwaves.dev",
//                     projectGitHubLink: "https://github.com/youruser/soundwaves",
//                     projectImages: [
//                         {url: "https://cdn.dribbble.com/userupload/16467699/file/still-66b588da559b992bf1a388f31d96a7bb.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/14912901/file/original-54f35b2c851a539d2c2bf4ffe7d12379.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/15023899/file/original-f1d09c3fec6bb0b54841951f7dc43d47.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/16375464/file/still-8a506de1920568d6720f63b130eadc6b.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/43304355/file/still-eee8c10fc04b17fe48e411c3ad6a98a3.png?format=webp&resize=640x480&vertical=center"}
//                     ],
//                     projectTechStack: ["Next.js", "TailwindCSS", "PayPal", "PostgreSQL"],
//                     projectType: "Mobile App"
//                 },
//                 {
//                     id: 3,
//                     projectDescription: "A portfolio website template tailored for music producers. Built with blazing fast tech, optimized for SEO and conversions.",
//                     projectName: "ProducerFolio",
//                     projectUrl: "https://producerfolio.dev",
//                     projectGitHubLink: "https://github.com/youruser/producerfolio",
//                     projectImages: [
//                         {url: "https://cdn.dribbble.com/userupload/16467699/file/still-66b588da559b992bf1a388f31d96a7bb.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/14912901/file/original-54f35b2c851a539d2c2bf4ffe7d12379.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/15023899/file/original-f1d09c3fec6bb0b54841951f7dc43d47.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/16375464/file/still-8a506de1920568d6720f63b130eadc6b.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/43304355/file/still-eee8c10fc04b17fe48e411c3ad6a98a3.png?format=webp&resize=640x480&vertical=center"}
//                     ],
//                     projectTechStack: ["Next.js", "Chakra UI", "Vercel", "MongoDB"],
//                     projectType: "Website"
//                 },
//                 {
//                     id: 4,
//                     projectDescription: "Minimal CMS for managing beat store content. Secure login, markdown editor, asset management, and full CRUD.",
//                     projectName: "CMS4Beats",
//                     projectUrl: "https://cms4beats.dev",
//                     projectGitHubLink: "https://github.com/youruser/cms4beats",
//                     projectImages: [
//                         {url: "https://cdn.dribbble.com/userupload/16467699/file/still-66b588da559b992bf1a388f31d96a7bb.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/14912901/file/original-54f35b2c851a539d2c2bf4ffe7d12379.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/15023899/file/original-f1d09c3fec6bb0b54841951f7dc43d47.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/16375464/file/still-8a506de1920568d6720f63b130eadc6b.png?format=webp&resize=640x480&vertical=center"},
//                         {url: "https://cdn.dribbble.com/userupload/43304355/file/still-eee8c10fc04b17fe48e411c3ad6a98a3.png?format=webp&resize=640x480&vertical=center"}
//                     ],
//                     projectTechStack: ["Next.js", "TailwindCSS", "SQLite", "JWT Auth"],
//                     projectType: "Others"
//                 }
//             ];
//
//             resolve(data)
//         }, 10000)
//     })
// }