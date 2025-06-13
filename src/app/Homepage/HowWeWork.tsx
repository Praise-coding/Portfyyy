import React from 'react';
import Link from "next/link";
import StringShorter from "@/app/Wrappers/StringShorter";
import AnimateCon from "@/app/Wrappers/AnimateCon";

function ListItem({data, keyProp}: { data: string, keyProp: number }) {
    return (
        <AnimateCon persistWhileResponsive={true} once={false} responsiveInitial={{y: 20, opacity: 0}}
                    responsiveAnimation={{y: 0, opacity: 100, transition: {duration: 0.7}}} hidden={{x: 20, opacity: 0}}
                    visible={{x: 0, opacity: 1, transition: {duration: 0.7, delay: keyProp / 8}}}
                    className={`flex ${keyProp > 0 ? "mt-[32px]" : "0px"} items-center gap-[38px] md:gap-[54px] `}>
                                    <span
                                        className={"min-w-[47px]  font-[800]   text-[72px] leading-[80px]  text-[#3700FF]   "}>
                                        {keyProp + 1}
                                    </span>

            <span
                className={"block     text-[24px] leading-[32px] font-[700] text-white"}>
                                        {data}

                                    </span>
        </AnimateCon>
    )
}

function HowWeWork() {
    const data = ["Full-Service Execution", "Technical Meets Visual", "Built with Your Goals in Mind"]
    return (
        <section className={"flex px-[20px] overflow-hidden mt-[95px] md:mt-[140px] justify-center"}>
            <div className={"max-w-[1170px] md:flex items-center justify-between gap-[130px] w-full"}>
                <AnimateCon  once={false} hidden={{x: -50, opacity: 0}}
                            visible={{x: 0, opacity: 1, transition: {duration: 0.7}}}>
                    <h3 className={"  leading-[32px] uppercase tracking-[3px] text-[#EF6D58]"}>
                        How We Work
                    </h3>
                    <h4 className={"mt-[17px] max-w-[448px]   font-[800] text-[40px] leading-[48px] text-white"}>
                        Making Your Projects <br/> Look and Work Awesome

                    </h4>
                    <StringShorter Element={"p"} speed={50}
                                   word={["I combine technical skills, design thinking, and business understanding to deliver websites that feel custom-built for your goals."]}
                                   className={"leading-[32px] mt-[15px] md:mt-[31px] max-w-[470px]   text-[rgba(255,255,255,0.64)]"}/>


                    <Link href={"#Contact"} className={"mt-[30px] block md:mt-[28px] text-white  "}>
                        Learn More
                    </Link>
                </AnimateCon>
                <div className={"sm:mt-0 mt-[72px]"}>
                    <ul className={"flex flex-col grid-cols-1"}>
                        {data.map((data, key) => {
                            return (
                                <ListItem data={data} key={key} keyProp={key}/>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </section>
    );
}

export default HowWeWork;