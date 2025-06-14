import React from 'react';
import Link from "next/link";

function HelpingHand() {
    return (
        <section className=" mt-[132px]  flex justify-center">
            <div
                className="max-w-[1170px] gap-[86px] bg-[rgba(2,9,23,0.4)] items-center text-center justify-center rounded-[6px] sm:py-[94px] py-[60px] px-[28px] sm:px-[100px] w-full  sm:flex-row flex-col flex justify-between">
                <div className="">
                    <h3
                        className=" tracking-[-1px]  font-extrabold text-[40px] sm:text-[56px] leading-[40px] sm:leading-[64px]  text-white">
                        Ready to Create <br/> Something Amazing?
                    </h3>
                    <p
                        className="mt-[28px] text-[#d3d3d3] flex justify-center leading-[32px]   w-full">
                        <span className={"max-w-[470px] w-full"}>
                            Ready to build your dream project from the ground up? Whether you need a new site or a refresh, I&#39;m here to make it happen for you.

                        </span>
                    </p>
                    <div className={"flex justify-center"}>
                        <Link href="/#Contact"
                              className={"mt-[34px]  w-[154px] flex items-center justify-center h-[48px] rounded-[6px] bg-white"}>
                        <span
                            className="text-[14px] leading-[14px]  text-black">Contact
                            Me
                        </span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HelpingHand;