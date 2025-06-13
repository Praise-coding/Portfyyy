import React from 'react';
import pic from "../../../public/pic92.png"
import Image from "next/image";
import Link from "next/link";
import StringShorter from "@/app/Wrappers/StringShorter";
import AnimateCon from "@/app/Wrappers/AnimateCon";

function About() {
    return (
        <section
            className={"flex relative z-[20] justify-center px-[20px] mt-[71px] md:mt-[130px]"}>
            <div
                className={"grid grid-cols-1 md:grid-cols-2 items-center max-w-[1170px] w-full justify-between gap-[16px] md:gap-[130px]"}>
                <AnimateCon persistWhileResponsive={false} once={false} responsiveInitial={{y: 20, opacity: 0}}
                            responsiveAnimation={{y: 0, opacity: 100, transition: {duration: 0.7}}}
                            hidden={{x: -20, opacity: 0}}
                            visible={{opacity: 1, x: 0, transition: {duration: 0.7}}}
                            className={"relative max-w-[566px] w-full"}>
                    <Image sizes="(max-width: 768px) 100vw, 800px" src={pic} alt={"About image"} width={800}
                           height={600} className={"w-full"}/>
                </AnimateCon>
                <AnimateCon persistWhileResponsive={false} once={false} responsiveInitial={{y: 20, opacity: 0}}
                            responsiveAnimation={{y: 0, opacity: 100, transition: {duration: 0.7}}} hidden={{x: 20, opacity: 0}}
                            visible={{opacity: 1, x: 0, transition: {duration: 0.7}}} htmlElement={"div"}
                            className={" sm:mt-0"}>
                    <h3 className={"  leading-[32px] tracking-[3px] uppercase text-[#EF6D58]"}>
                        About
                    </h3>
                    <h2 className={"  mt-[17px] capitalize sm:mt-[20px] font-[800] text-[40px] sm:text-[56px] leading-[48px] sm:leading-[64px] tracking-[-1px] text-white"}>
                        Focused Build<br/>
                        Precise Delivery
                    </h2>
                    <h4 className={"  text-[20px] mt-[29px] sm:mt-[26px] leading-[32px] text-white"}>
                        Provide a full range of services
                    </h4>
                    <p className={"mt-[18px] block   leading-[32px] text-[rgba(255,255,255,0.64)]"}>
                        <StringShorter speed={50} Element={"span"}
                                       word={["From frontend to backend, I provide full-stack web development services with an emphasis on clean design, performance, and real business value"]}/>

                    </p>
                    <Link href={"/About"}
                          className={"w-[138px] hover:bg-transparent hover:border-2 border-white active:bg-[rgba(0,0,0,0.8)] transition-all text-black hover:text-white  mt-[32px] sm:mt-[34px] h-[48px] flex justify-center items-center rounded-[6px] bg-white"}
                          style={{boxShadow: "0px 3px 9px rgba(57, 20, 0, 0.08)"}}>
                        <span className={"  font-[900] text-[14px] leading-[14px] uppercase "}>
                            About
                        </span>
                    </Link>
                </AnimateCon>
            </div>
        </section>
    );
}

export default About;