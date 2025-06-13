import React from 'react';
import FaqsRow from "@/app/Homepage/FAQS/FaqsRow";
import Link from "next/link";
import AnimateCon from "@/app/Wrappers/AnimateCon";
import StringShorter from "@/app/Wrappers/StringShorter";
import {faqData} from "@/Hygraph/HygraphConfig";

async function Faqs() {
    const faqs = await faqData()
    return (
        <section id={"FAQs"} className={"px-[20px] overflow-hidden  flex justify-center"}>
            <div className={"max-w-[1170px] gap-[20px] grid grid-cols-1 sm:grid-cols-2 justify-between w-full"}>
                <AnimateCon  once={false} htmlElement={"div"} hidden={{x: -20, opacity: 0}} visible={{x: 0, opacity: 100, transition: {duration : 0.7}}}>
                    <h3 className={"  leading-[32px] uppercase tracking-[3px] text-[#EF6D58]"}>
                        Frequently Asked Questions
                    </h3>
                    <h4 className={"mt-[17px] max-w-[448px]   font-[800] text-[40px] leading-[48px] text-white"}>
                        What You Get <br/> When You Work With Me
                    </h4>
                    <StringShorter Element={"p"} speed={50} word={["Got questions? Maybe these will help"]} className={"leading-[32px] mt-[15px] md:mt-[31px] max-w-[470px]   text-[rgba(255,255,255,0.64)]"}/>

                    <Link href={"#Contact"} className={"mt-[30px] block md:mt-[28px] text-white  "}>
                        Learn More
                    </Link>
                </AnimateCon>
                <AnimateCon persistWhileResponsive={false} responsiveInitial={{y: 20, opacity: 0}}
                             responsiveAnimation={{y: 0, opacity: 100, transition: {duration: 0.7}}} once={false} htmlElement={"div"} hidden={{x: 20, opacity: 0}} visible={{x: 0, opacity: 100, transition: {duration : 0.7}}} className={"max-w-[568.54px] mt-[36px] sm:mt-0 w-full"}>
                    {faqs.map((data, key) => {
                        return (
                            <FaqsRow data={data} length={faqs.length - 1} keyPos={key} key={key}/>
                        )
                    })}

                </AnimateCon>
            </div>
        </section>
    );
}

export default Faqs;