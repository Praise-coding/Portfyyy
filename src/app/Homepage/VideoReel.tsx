import React from 'react';
import Image from "next/image";
import pic from "../../../public/StockCake-Vintage Railway Station_1743294296.jpg"
import AnimateCon from "@/app/Wrappers/AnimateCon";
import StringShorter from "@/app/Wrappers/StringShorter";

function VideoReel() {
    return (
        <section className={"my-[63px] md:my-[127px] px-[20px] flex justify-center"}>
            <div id={"VideoExplanation"}
                className={"max-w-[1170px] grid grid-cols-1 md:grid-cols-2  justify-between gap-[24px] sm:gap-[130px] items-center w-full"}>
                <AnimateCon  responsiveInitial={{y: 20, opacity: 0}}
                             responsiveAnimation={{y: 0, opacity: 100, transition: {duration: 0.7}}} htmlElement={"div"} once={false} hidden={{opacity: 0}}
                            visible={{opacity: 100, transition: {duration: 0.7}}}
                            className={"w-full rounded-[8px] overflow-hidden relative h-[212px] md:h-[368px]"}>
                    <Image width={800} height={600} src={pic} className={"object-cover h-full"} alt={"lil info"}/>
                    <div
                        className={"bg-[rgba(0,0,0,0.5)] z-[20] pt-[2px] flex items-center justify-center backdrop-blur-[0.24] rounded-[6px] w-[47px]  absolute sm:bottom-[20px] bottom-[15px] left-[15px] sm:left-[20px]"}>
                        <div className={"  leading-[32px] text-white"}>
                            1:45
                        </div>
                    </div>
                    <div
                        className={"absolute bg-[rgba(0,0,0,0.5)] top-0 left-0 w-full h-full flex items-center justify-center"}>
                        <div
                            className={"border cursor-pointer flex items-center justify-center rounded-full w-[148px] h-[148px]  border-[rgba(255,255,255,0.503821)]"}>
                            <svg width="21" height="30" viewBox="0 0 21 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.776 13.3825C20.8742 14.1812 20.8742 15.8188 19.776 16.6175L3.17634 28.6899C1.8544 29.6513 0 28.707 0 27.0725V2.92754C0 1.29297 1.8544 0.348658 3.17634 1.31007L19.776 13.3825Z"
                                    fill="white"/>
                            </svg>
                        </div>
                    </div>

                </AnimateCon>
                <AnimateCon  responsiveInitial={{x: 10, opacity: 0}}
                             responsiveAnimation={{x: 0, opacity: 100, transition: {duration: 0.7}}}  once={false} htmlElement={"div"} hidden={{x: 20, opacity: 0}} visible={{x: 0, opacity: 100, transition: {duration: 0.7}}}>
                    <h3 className={"  leading-[32px] uppercase tracking-[3px] text-[#EF6D58]"}>
                        Video Explanation
                    </h3>
                    <h4 className={"mt-[17px] max-w-[448px]   font-[800] text-[40px] leading-[48px] text-white"}>
                        Crafting Projects <br/> That Stand Out
                    </h4>
                    <StringShorter speed={50} Element={"p"} word={["See How We Combine Design, Development, and Strategy to Deliver Projects That Truly Make an Impact."]} className={"leading-[32px] mt-[15px] md:mt-[31px] max-w-[470px]   text-[rgba(255,255,255,0.64)]"}/>

                </AnimateCon>
            </div>
        </section>
    );
}

export default VideoReel;