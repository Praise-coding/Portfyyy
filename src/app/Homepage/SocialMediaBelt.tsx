import React from 'react';
import Link from "next/link";
import AnimateCon from "@/app/Wrappers/AnimateCon";


function SocialMediaBelt() {
    return (
        <div>
            <div
                className={"flex backdrop-blur-xs bg-[rgba(2,8,23,0.58)] mt-[56px] px-[20px]  relative py-[49px] justify-center"}>
                <ul className={"flex flex-wrap gap-[60px] sm:gap-[100px] items-center justify-center w-full max-w-[1068px]"}>
                    {["LinkedIn", "Fiverr", "UpWork", "GitHub", "Behance"].map((data, key) => {
                        return (
                            <AnimateCon once={false} hidden={{opacity: 0}}
                                        visible={{opacity: 0.4, transition: {duration: 0.7}}} htmlElement={"li"}
                                        key={key}
                                        className={"w-fit hover:opacity-100 active:opacity-80 transition-all opacity-[0.4]"}>
                                <Link href={data}>
                                    <p className={"font-helvetica scale-x-110 text-[25px] sm:text-[30px] font-[700] tracking-[0.3px] text-white "}>
                                        {data}
                                    </p>
                                </Link>
                            </AnimateCon>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SocialMediaBelt;