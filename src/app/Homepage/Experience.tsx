"use client"
import React, {useRef} from 'react';
import {useScreenWidth} from "../hooks/useScreenWidth";
import {useCounter} from "@/app/hooks/useCounter";
import StringShorter from "@/app/Wrappers/StringShorter";
import AnimateCon from "@/app/Wrappers/AnimateCon";

function Experience() {
    const width = useScreenWidth()
    const data = [{
        number: 5,
        writeUp: "Years of experience"
    }, {
        number: 20,
        writeUp: "Project Completed"
    }, {
        number: 10,
        writeUp: "Technology mastered"
    }]

    return (
        <AnimateCon once={false} htmlElement={"div"} hidden={{opacity: 0}} visible={{opacity: 100, transition:{duration : 0.7}}} className={"mt-[112px] sm:mt-[160px] px-[20px] flex justify-center"}>
            <div className={"max-w-[1170px]  border rounded-[6px] border-[rgba(255,255,255,0.43)] w-full"}>
                <div className={"grid sm:grid-cols-3"}>
                    {data.map((data, key) => {
                        return (
                            <ExperienceSections data={data} width={width} keyProp={key} key={key}/>

                        )

                    })}
                </div>
            </div>
        </AnimateCon>
    );
}

export default Experience;


function ExperienceSections({data, width, keyProp}: {
    data: Record<string, string | number>,
    width: number,
    keyProp: number
}) {
    const ref = useRef(null)
    const number = useCounter(Number(data?.["number"]), ref, 3000)

    return (
        <div
            className={`${(width > 640 ? (keyProp != 0) : (keyProp != 2)) && "sm:border-b-0 border-b sm:border-l"}  py-[45px] border-[rgba(255,255,255,0.43)]`}>
            <article className={"pl-[48px]"}>
                <h3 ref={ref} className={"  font-extrabold text-[40px] leading-[48px] text-white"}>
                    {number}+
                </h3>
                <StringShorter word={[String(data?.writeUp)]} Element={"p"}
                               className={"mt-[13px]   text-[20px] leading-[32px] text-white"}/>

            </article>
        </div>
    )
}