import React from 'react';
import TestimonialCardsCon from "@/app/Homepage/Testimonials/TestimonialCard";
import Link from "next/link";
import AnimateCon from "@/app/Wrappers/AnimateCon";
import {testimonialData} from "@/Hygraph/HygraphConfig";

async function Testimonials() {
    const testimonials = await testimonialData()
    return (

        <AnimateCon once={false} htmlElement={"section"} hidden={{opacity: 0}} visible={{opacity: 100, transition:{duration : 0.7}}} className={"flex overflow-hidden px-[20px] justify-center"}>
            <div id={"Testimonials"} className={"py-[92px] md:py-[150px] max-w-[1170px] w-full"}>
                <h2 className={" text-base text-center leading-[32px] uppercase tracking-[3px] text-[#EF6D58]"}>
                    Testimonials
                </h2>
                <h3 className={"text-center mt-[17px] sm:mt-[20px]   font-[800] text-[56px] leading-[64px] tracking-[-1px] text-white"}>
                    What Our <br/>
                    Clients Saying
                </h3>
                <div className={"mt-[35px] md:mt-[64px]"}>
                    <TestimonialCardsCon testimonialData={testimonials}/>
                </div>
                <div className={"mt-[65px] flex justify-center"}>
                    <Link href={"Contact"}
                          className={"border active:bg-[rgba(255,255,255,0.5)] hover:bg-white hover:text-black transition-all duration-500 text-white  rounded-[6px] h-[48px] flex items-center justify-center px-[20px] border-[rgba(255,255,255,0.295743)]"}>
                        <span className={"  font-[900] text-[14px] leading-[14px] uppercase "}>
                                                     Contact Me

                            </span>
                    </Link>
                </div>
            </div>
        </AnimateCon>
    );
}

export default Testimonials;