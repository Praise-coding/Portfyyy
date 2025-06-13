import React from "react";

export const TagTemp = ({title, techType}: { title: string, techType: string }) => {
    return (
        <div
            className={"bg-[rgba(0,0,0,0.4)] hover:opacity-0 duration-500 transition-all flex items-end pb-[51px] pl-[29px] md:pl-[49px] absolute top-0 left-0 w-full  h-full"}>
            <div>
                <div
                    className={"bg-white rounded-full w-fit px-[15px] h-[40px] flex items-center justify-center"}>
                    <p className={"leading-none font-[clashGreek] font-[500]"}>
                        {techType}
                    </p>
                </div>
                <div className={"mt-[24px]"}>
                    <h4 className={"  font-[800] text-[40px] leading-[48px] text-white"}>
                        {title}
                    </h4>
                </div>
            </div>

        </div>

    )
}