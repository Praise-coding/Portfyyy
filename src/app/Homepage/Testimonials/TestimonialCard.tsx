"use client"
import React from 'react';
import Image from "next/image";
import {useScreenWidth} from "@/app/hooks/useScreenWidth";
import {TestimonialTypes} from "@/app/Types";

function TestimonialCard({currKey, data, isLeft, screenWidth}: { currKey: number, data: TestimonialTypes, isLeft: boolean, screenWidth: number }) {
    const borderRadiusClass = screenWidth > 700
        ? !isLeft
            ? (currKey === 0 ? 'rounded-tr-md' : 'rounded-br-md')
            : (currKey === 0 ? 'rounded-tl-md' : 'rounded-bl-md')
        : 'rounded-md';

    const borderWidthClass = screenWidth > 700
        ? !isLeft
            ? (currKey === 0 ? 'border-t border-r' : 'border')
            : (currKey === 0 ? 'border-t border-r border-l' : 'border')
        : 'border';

    const className = `${borderRadiusClass} ${borderWidthClass}`;
    return (
        <article
            className={`group hover:bg-[white] transition-all duration-500 cursor-pointer ${className} py-[47px] px-[28px] sm:px-[49px] border-[rgba(255,255,255,0.43)]`}>
            <div className={"flex items-center gap-[7.97px]"}>
                {Array(data?.["starNo"]).fill(null).map((_, key)=>{
                    return (
                        <svg key={key} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5764 18L4.54708 21.7082L5.88956 13.8541L0.202717 8.2918L8.06175 7.1459L11.5764 0L15.0911 7.1459L22.9501 8.2918L17.2633 13.8541L18.6057 21.7082L11.5764 18Z" fill="#F6D021"/>
                        </svg>
                    )
                })}


            </div>
            <p className={"mt-[36px] transition-all duration-500 group-hover:text-black text-[rgba(255,255,255,0.64)]"}>
                {data?.["comment"]}
            </p>
            <div className={"mt-[31px] flex items-center"}>
                <div className={"w-[80px] h-[80px]  relative"}>
                    <Image width={80} height={80} src={data?.["picture"]?.url} alt={""}
                           className={"object-cover  w-full h-full rounded-full"}/>
                </div>
                <div className={"ml-[23px] flex-1"}>
                    <h4 className={" transition-all duration-500 group-hover:text-black font-[700] text-[24px] leading-[32px] text-white"}>
                        {data?.["commenterName"]}

                    </h4>
                    <p className={"mt-[3px] transition-all duration-500 group-hover:text-black text-white"}>
                        {data?.["commenterTitle"]}
                    </p>
                </div>
            </div>
        </article>

    );
}

export default function TestimonialCardsCon({testimonialData}: { testimonialData: TestimonialTypes[] }) {
    const screenWidth = useScreenWidth()

    return (
        <section className={"grid sm:grid-cols-2"}>
            <div>
                {testimonialData.slice(0, 2).map((data, key) => {
                    return (
                        <TestimonialCard data={data} screenWidth={screenWidth} currKey={key} key={key} isLeft={true}/>

                    )
                })}
            </div>
            <div>
                {testimonialData.slice(2, 4).map((data, key) => {
                    return (
                        <TestimonialCard data={data} screenWidth={screenWidth} currKey={key} key={key} isLeft={false}/>
                    )
                })}
            </div>
        </section>
    )
}