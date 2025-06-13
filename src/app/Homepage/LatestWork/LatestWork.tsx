"use client"
import React, {useState} from 'react';
import ProjectsCard from "@/app/Homepage/LatestWork/ProjectsCard";
import ProjectDetails from "@/app/Homepage/LatestWork/ProjectDetails";
import {ProjectTypes} from "@/app/Types";
import Link from "next/link";
import AnimateCon from "@/app/Wrappers/AnimateCon";

function LatestWork({projectsData}: { projectsData: ProjectTypes[] }) {
    const [state, setState] = useState<null | ProjectTypes>(null)
    const [data, setData] = useState<ProjectTypes[]>(projectsData.slice(0, 4))
    const [filteredType, setFilteredType] = useState("Show All")

    function groupedSection() {
        return Object.groupBy(projectsData, (item) => {
            return item?.["projectType"]
        })
    }

    const [dropDown, setDropDown] = useState(false)

    function filteredData(typeToFilterBy: string) {
        setFilteredType(typeToFilterBy)
        setData(typeToFilterBy == "Show All" ? projectsData : projectsData.filter((data) => {
            if (data?.["projectType"] == typeToFilterBy) {
                return data
            }
        }))
        setDropDown(false)
    }
    return (
        <>
            <AnimateCon once={false} htmlElement={"section"} hidden={{opacity: 0}}
                        visible={{opacity: 100, transition: {duration: 0.7}}}
                        className={"flex px-[20px] h-fit bg-[rgba(0,0,0,0.2)] justify-center"}>
                <div className={"py-[92px] md:py-[129px] max-w-[1170px] w-full"}>
                    <h2 className={" text-base text-center leading-[32px] uppercase tracking-[3px] text-[#EF6D58]"}>
                        Portfolio
                    </h2>
                    <h3 className={"text-center mt-[17px] sm:mt-[20px]   font-[800] text-[56px] leading-[64px] tracking-[-1px] text-white"}>
                        Latest Work
                    </h3>
                    <div className={"mt-[36px]"}>
                        <div className={"relative"}>
                            <div onClick={()=> setDropDown((prevState)=> !prevState)}
                                className={"bg-white relative  px-[16px] cursor-pointer md:hidden flex items-center justify-between rounded-[6px] w-full h-[48px]"}>
                                <div className={"  text-[rgba(57,20,0,0.64)]"}>
                                    {filteredType}
                                </div>
                                <div>
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 6L10 0H0L5 6Z" fill="#EF6D58"/>
                                    </svg>

                                </div>
                            </div>
                            <div
                                className={`absolute md:hidden ${dropDown ?  "opacity-[100%]  translate-x-0 " : "opacity-0 z-[-100] translate-x-[-700px]"} duration-500 top-[60px] transition-all rounded-[6px] overflow-hidden  z-[80] bg-white  w-full`}>
                                <ul className={`grid   grid-cols-1`}>
                                    <li onClick={() => filteredData("Show All")} className={`cursor-pointer py-[10px] ${filteredType == "Show All" ? "bg-[rgba(0,0,0,0.08)] opacity-[100%]" : "bg-[white] opacity-[70%] hover:bg-[rgba(0,0,0,0.05)]" } transition-all   flex px-[16px] items-center justify-between`}>
                                       <span className={"block"}>
                                           Show All
                                       </span>
                                        <span className={"block text-[rgba(0,0,0,0.8)]"}>
                                           {projectsData.length}
                                       </span>
                                    </li>
                                    {Object.entries(groupedSection()).map((data, key) =>
                                        <li key={key} onClick={() => filteredData(data[0])} className={`cursor-pointer py-[10px] ${filteredType == data[0] ? "bg-[rgba(0,0,0,0.08)] opacity-[100%]" : "bg-[white] opacity-[70%] hover:bg-[rgba(0,0,0,0.05)]" } transition-all   flex px-[16px] items-center justify-between`}>
                                       <span className={"block"}>
                                           {data?.[0]}
                                       </span>
                                            <span className={"block text-[rgba(0,0,0,0.8)]"}>
                                           {data?.[1]!.length}
                                       </span>
                                        </li>
                                    )}

                                </ul>
                            </div>
                        </div>

                        <ul className={"md:flex hidden justify-center gap-[20px]"}>
                            <li className={" transition-all cursor-pointer"} onClick={() => filteredData("Show All")}>
                                <p className={"flex gap-[20px] items-center"}>


                            <span
                                className={`${filteredType == "Show All" ? "text-white" : "text-[rgba(255,255,255,0.64)]"}  transition-all duration-500 block leading-[32px]  `}>
                                Show All
                            </span>
                                    <span
                                        className={"text-[14px] block leading-[24px] text-[rgba(255,255,255,0.64)]"}>
                                {projectsData.length}

                            </span>
                                </p>
                            </li>
                            {Object.entries(groupedSection()).map((data, key) => {
                                return (
                                    <li className={"cursor-pointer"} key={key}
                                        onClick={() => filteredData(data[0])}>
                                        <p className={"flex gap-[20px] items-center"}>


                            <span
                                className={` ${filteredType == data[0] ? "text-white" : "text-[rgba(255,255,255,0.64)]"}  transition-all duration-500 block leading-[32px]  `}>
                                {data[0]}
                            </span>
                                            <span
                                                className={"text-[14px] block leading-[24px] text-[rgba(255,255,255,0.64)]"}>
                                {data[1]?.length}

                            </span>
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div
                        className={`relative z-[10] grid gap-[30px]  md:grid-cols-5 w-full ${data.length > 2 ? "md:h-[864px]" : "h-fit"} justify-between mt-[30px]  `}>
                        {data.map((data, key) => {
                            return (
                                <ProjectsCard projectData={data} displayProject={setState} key={key} keyProp={key}/>
                            )
                        })}
                    </div>
                    <div className={"flex justify-center mt-[48px] sm:mt-[64px]"}>
                        <Link href={"Projects"}
                              className={"border active:bg-[rgba(255,255,255,0.5)] hover:bg-white hover:text-black transition-all duration-500 text-white  rounded-[6px] h-[48px] flex items-center justify-center px-[20px] border-[rgba(255,255,255,0.295743)]"}>
                        <span className={"  font-[900] text-[14px] leading-[14px] uppercase "}>
                            Explore More
                            </span>
                        </Link>
                    </div>
                </div>
            </AnimateCon>
            {state && <ProjectDetails closeSection={setState} projectData={state}/>}
        </>

    );
}

export default LatestWork;