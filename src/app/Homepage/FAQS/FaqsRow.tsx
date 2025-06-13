"use client"
import React, {useRef, useState} from "react";
import {FAQSTypes} from "@/app/Types";
const FaqsRow = ({keyPos, data, length}: { keyPos: number, length: number, data: FAQSTypes }) => {
    const className = `
  ${keyPos != length ? "border-t border-r border-l" : ""}
  ${keyPos == 0 ? "rounded-t-md" : keyPos == length ? "rounded-b-md" : ""}
  shadow-[0px_32px_64px_rgba(57,20,0,0.04)]
`;
    const [open, setOpen] = useState(false)
    const containerRef = useRef<HTMLElement>(null)
    const [height, setHeight] = useState(0)

    function toggle() {
        setOpen((prev) => !prev)
        const current2 = containerRef.current
        if (!current2) {
            return;
        }
        if (open) {
            setHeight(0)
            return
        }
        setHeight(current2.scrollHeight)
    }


    return (
        <div
            onClick={() => toggle()}
            className={`${open && "bg-white"}  cursor-pointer transition-all  duration-500 border ${className.trim()} py-[41px] gap-[15px] sm:py-[44px] px-[28px] sm:px-[49px] border-[rgba(255,255,255,0.43)]`}
        >

            <dl>
                <dt className={"flex gap-[10px] items-center justify-between"}>
                                        <span
                                            className={`${open ? "text-black" : "text-white"} transition-all duration-500  font-[700] block text-[24px] leading-[32px] `}>
                                           {data?.["question"]}
                                        </span>
                    <span className={"block"}>
                                            <svg
                                                 className={`${open ? "rotate-180" : "rotate-0"} transition-all duration-500`}
                                                 width="33" height="32" viewBox="0 0 33 32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
<ellipse cx="16.1282" cy="16" rx="15.959" ry="16" fill="#2B00C5"/>
<path fillRule="evenodd" clipRule="evenodd"
      d="M15.3771 10.8595L10.5934 16.3405C10.0289 16.9875 10.4877 17.9995 11.3445 17.9995H20.9119C21.3036 17.9999 21.6592 17.7704 21.821 17.4128C21.9829 17.0553 21.9211 16.6359 21.663 16.3405L16.8793 10.8605C16.6899 10.6432 16.4161 10.5186 16.1282 10.5186C15.8404 10.5186 15.5666 10.6432 15.3771 10.8605V10.8595Z"
      fill="white"/>
</svg>

                                        </span>
                </dt>

                <dd style={{height: height + "px"}}
                           className={` overflow-hidden  transition-all leading-[32px] `}>
                    <span ref={containerRef} className={"block pt-[36px] text-[rgba(57,20,0,0.64)]"}>{data?.["answer"]}</span>
                </dd>


            </dl>
        </div>
    )
}

export default FaqsRow

