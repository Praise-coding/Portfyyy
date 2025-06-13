"use client"
import React, {useState} from 'react';
import ProjectDetails from "@/app/Homepage/LatestWork/ProjectDetails";
import {ProjectTypes} from "@/app/Types";

function ProjectLoader() {
    const [state, setState] = useState<null | ProjectTypes>(null)


    return (
        <>
            <section className={"flex px-[20px] h-fit bg-[rgba(0,0,0,0.2)] justify-center"}>
                <div className={"py-[92px] md:py-[129px] max-w-[1170px] w-full"}>
                    <h2 className={" text-base text-center leading-[32px] uppercase tracking-[3px] text-[#EF6D58]"}>
                        Portfolio
                    </h2>
                    <h3 className={"text-center mt-[17px] sm:mt-[20px]   font-[800] text-[56px] leading-[64px] tracking-[-1px] text-white"}>
                        Latest Work
                    </h3>
                    <div className={"mt-[36px]"}>
                        <div
                            className={"bg-[rgba(255,255,255,0.37)]  animate-pulse  px-[16px] md:hidden flex items-center justify-between rounded-[6px] w-full h-[48px]"}>

                        </div>
                        <ul className={"md:flex hidden justify-center gap-[20px]"}>
                            {Array(4).fill("").map((data, key) => {
                                return (
                                    <li className={"cursor-pointer w-[80px] h-[30px] bg-[rgba(255,255,255,0.37)] animate-pulse rounded-full "}
                                        key={key}>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div
                        className={` grid gap-[30px] h-fit  md:grid-cols-5 grid-cols-1 w-full md:h-[864px] justify-between mt-[30px]  `}>
                        {Array(4).fill("").map((data, key) => {
                            return (
                                <div key={key} className={`
                                 ${(key == 0 || key == 3) ? "md:col-span-2" : "md:col-span-3"}  bg-[rgba(255,255,255,0.37)] relative  rounded-lg md:h-auto h-[416px]  w-full animate-pulse`}>
                                    <div
                                        className={" flex items-end pb-[51px] pl-[29px] md:pl-[49px] absolute top-0 left-0 w-full  h-full"}>
                                        <div>
                                            <div
                                                className={"w-[70px] h-[30px] rounded-full  bg-[rgba(255,255,255,0.67)] "}>

                                            </div>
                                            <div
                                                className={"mt-[24px]   font-[800] text-[40px] w-[100px] h-[30px] rounded-full bg-[rgba(255,255,255,0.67)] leading-[48px] text-white"}>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={"flex justify-center mt-[48px] sm:mt-[64px]"}>
                        <div
                              className={"w-[200px] duration-500 bg-[rgba(255,255,255,0.37)] text-white animate-pulse  rounded-[6px] h-[48px] flex items-center justify-center px-[20px] "}>
                        <span className={"  font-[900] text-[14px] leading-[14px] uppercase "}>

                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {state && <ProjectDetails closeSection={setState} projectData={state}/>}
        </>

    );
}

export default ProjectLoader;