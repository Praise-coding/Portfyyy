import React from 'react';
import Link from "next/link";
import pic from "../../../../public/picoop.png"
import Image from "next/image";
import StringShorter from "@/app/Wrappers/StringShorter";

const HeroSection = () => {
    return (
        <section className={"sm:mt-[114px] mt-[40px] flex justify-center px-[20px]"}>
            <div
                className={"max-w-[1170px] grid grid-cols-1 md:grid-cols-2  flex justify-between gap-[50px] md:gap-[87px] w-full"}>
                <div>
                    <div className={"grid gap-[20px] "}>
                        <p
                            className={" relative  leading-[32px] tracking-[3px] uppercase text-[#EF6D58]"}>
                            Syntari Studio
                        </p>

                        <h2 className={" mt-[20px] relative sm:mt-[0px] max-w-[513px] w-full   font-[800] text-[56px] leading-[64px] sm:text-[72px] sm:leading-[80px] tracking-[-1px] sm:tracking-[-2px] text-white"}>
                            <span className={"block"}>
                                Here To Build <br/>
                                Your
                                Dream Website
                            </span>
                            <span
                                className={"sm:right-[40px] block w-fit z-[-1] right-0 top-[-34px] opacity-[50%] absolute"}>
                                <svg
                                    width="148"
                                    height="146" viewBox="0 0 148 146" fill="none">
                                    <path
                                        d="M81.8809 38.3018L82.3262 40.2188L83.6123 38.7285L106.338 12.3848L97.5674 46.0527L97.0713 47.957L98.9023 47.2354L131.267 34.4707L107.855 60.207L106.531 61.6621L108.488 61.874L143.078 65.6113L110.388 77.5205L108.539 78.1934L110.173 79.29L139.062 98.6748L104.584 94.0273L102.634 93.7646L103.571 95.4951L120.142 126.084L91.7734 105.946L90.1689 104.808L90.1953 106.775L90.6523 141.562L74.8916 110.547L74 108.793L73.1084 110.547L57.3467 141.562L57.8047 106.775L57.8311 104.808L56.2266 105.946L27.8574 126.084L44.4287 95.4951L45.3662 93.7646L43.416 94.0273L8.93652 98.6748L37.8271 79.29L39.4609 78.1934L37.6123 77.5205L4.9209 65.6113L39.5117 61.874L41.4688 61.6621L40.1445 60.207L16.7324 34.4707L49.0977 47.2354L50.9287 47.957L50.4326 46.0527L41.6611 12.3848L64.3877 38.7285L65.6738 40.2188L66.1191 38.3018L74 4.41309L81.8809 38.3018Z"
                                        stroke="#6A6C8E" strokeWidth="2"/>
                                </svg>
                            </span>
                        </h2>
                        <p
                            className={"  mt-[12px] sm:mt-[0px] max-w-[470px] w-full leading-[32px] text-[rgba(255,255,255,0.64)]"}>

                            I offer end-to-end services — from design and development to strategic planning — all
                            tailored to your goals.
                        </p>
                    </div>
                    <div className={"mt-[34px]   flex gap-[46px] items-center"}>
                        <Link href={"Contact"}
                              className={"bg-[#2B00C5]  hover:bg-[rgba(13,0,197,0.8)] transition-all active:bg-[rgba(13,0,197,0.5)] rounded-[6px] w-[154px] flex justify-center items-center h-[48px]"}
                              role={"button"}>
                            <span className={" font-[900] text-[14px] leading-[14px] uppercase text-white"}>
                                how we work
                            </span>
                        </Link>
                        <Link href={""}
                              className={"text-white transition-all hover:text-[rgba(255,255,255,0.9)] active:text-[rgba(255,255,255,0.7)]"}>
                            Contact us
                        </Link>
                    </div>
                    <div className={"sm:mt-[112px]  mt-[44px] flex gap-[16px]"}>
                        <div className={"w-[48px] h-[48px]"}>
                            <Image width={48}
                                   height={48} priority src={pic} alt={"Little icon"}
                                   className={"rounded-full w-[48px] h-[48px]"}/>
                        </div>
                        <div className={"flex-1"}>
                            <StringShorter Element={"p"} once={false}
                                           word={["A good website doesn’t just look clean, it works clean. Speed, structure, and simplicity always beat fancy fluff.", "Code is cheap. Clarity is rare. Real web development is about making things work for people, not just machines.", "Your site isn’t just a page, it’s your handshake, storefront, and pitch deck. Make it count.", "Frameworks change. Devices change. Trends change. But performance, usability, and trust—those always matter."]}
                                           className={"  leading-[32px] text-[rgba(255,255,255,0.64)]"}/>

                            <p className={"  mt-[4px] sm:mt-[-4px] leading-[32px] text-white"}>
                                Syntari Inc.
                            </p>
                        </div>
                    </div>
                </div>


                <div className={"flex   max-w-[570px] w-full justify-center"}>
                    <Image width={800}
                           sizes="(max-width: 768px) 100vw, 800px"
                           height={600} className={"w-full h-max rounded-[8px]"} src={pic} priority alt={"Hero image"}/>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;