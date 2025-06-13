"use client"
import React, {useState} from 'react';
import ProjectDetails from "@/app/Homepage/LatestWork/ProjectDetails";
import {ProjectTypes} from "@/app/Types";

function ProjectLoader() {
    const [state, setState] = useState<null | ProjectTypes>(null)


    return (
        <>
            <section className={"flex px-[20px] h-fit  justify-center"}>
                <div className={" max-w-[1170px] w-full"}>
                    <div>
                        <div
                            className={"bg-[rgba(255,255,255,0.37)]  animate-pulse  px-[16px] my-[48px] md:hidden flex items-center justify-between rounded-[6px] w-full h-[48px]"}>

                        </div>
                        <ul className={"md:flex hidden my-[48px] justify-center gap-[20px]"}>
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
                        className={`  bg-[rgba(255,255,255,0.37)]  w-full md:h-[720px] relative  rounded-lg  h-[416px]  w-full animate-pulse`}>
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

                    <div
                        className={` grid gap-[30px] mt-[30px] h-fit  md:grid-cols-2 grid-cols-1 w-full md:h-[864px] justify-between   `}>

                        {Array(4).fill("").map((data, key) => {
                            return (
                                <div key={key}
                                     className={`  bg-[rgba(255,255,255,0.37)] relative  rounded-lg md:h-auto h-[416px]  w-full animate-pulse`}>
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