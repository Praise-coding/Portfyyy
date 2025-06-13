import React from 'react';
import Link from "next/link";
import AnimateCon from "@/app/Wrappers/AnimateCon";

function MenuPopUp({display}: { display: boolean }) {
    const navMenus = ["About", "Projects", "Testimonials", "FAQs", "Contacts"]

    return (
        <div
            className={`fixed md:hidden ${display ? "z-[30] opacity-[100%]" : "z-[-1] opacity-0"}  transition-all duration-500 flex items-center justify-center top-0 w-full h-screen backdrop-blur-[20px] `}
            style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
            <ul className={"grid gap-[20px] grid-cols-1 w-fit h-fit"}>
                {navMenus.map((data, key) =>
                    <AnimateCon once={false} htmlElement={"li"} hidden={{x: !display ? 0 : -60}} visible={{x: display ? 0 : -60, transition: {delay : key / 10} }} className={"w-full"} key={key}>
                        <Link href={""} className={"text-white text-center text-[24px]"}>
                            {data}
                        </Link>
                    </AnimateCon>
                )}



            </ul>
        </div>

    );
}

export default MenuPopUp;