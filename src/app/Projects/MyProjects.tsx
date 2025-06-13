import React from 'react';
import LatestWork from "./LatestWork";
import {projectData} from "@/Hygraph/HygraphConfig";

async function MyProjects() {
    const data = await projectData()
    return (
        <>
            <LatestWork projectsData={data}/>
        </>
    );
}

export default MyProjects;