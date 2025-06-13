"use client"
import React from 'react';
import Image from "next/image";
import {TagTemp} from "@/app/Homepage/LatestWork/TagTemp";
import {ProjectTypes} from "@/app/Types";

function ProjectsCard({projectData, displayProject}: { keyProp: number, projectData : ProjectTypes, displayProject:  React.Dispatch<React.SetStateAction<null | ProjectTypes>> }) {

    return (
        <article
            onClick={()=> {
                displayProject(projectData)
            }}
            className={`relative cursor-pointer md:h-auto h-[416px] overflow-hidden rounded-[8px]`}>
            <Image width={800} sizes="(max-width: 768px) 100vw, 800px"
                   height={600} src={projectData?.["projectImages"]?.[0]?.url} className={"object-cover object-top-left h-full"} alt={projectData?.["projectName"] + " image"}/>
            <TagTemp title={projectData?.["projectName"]} techType={projectData?.["projectType"]}/>


        </article>
    );
}

export default ProjectsCard;