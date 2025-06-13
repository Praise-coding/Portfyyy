import React from 'react';
import NavBar from "@/app/Homepage/Header/NavBar";
import Image from "next/image";
import pic from "../../../../public/photo-1605379399642-870262d3d051.jpeg"

function Header() {
    return (
        <header className={"bg-[rgba(0,0,0,0.6)] pb-[66px] relative"}>

            <NavBar/>
            <div className={"mt-[80px] px-[20px] sm:mt-[100px]"}>
                <h2 className={"font-[800] text-[56px] sm:text-[72px] leading-[64px] sm:leading-[80px] text-center tracking-[-1px] sm:tracking-[-2px] text-white"}>
                    Projects
                </h2>

                <p className={"leading-[32px] text-[rgba(255,255,255,0.64)] flex justify-center text-center mt-[12px] sm:mt-[24px]"}>
                    <span className={" max-w-[570px] w-full"}>
                    Agency provides a full service range including technical skills, design, business understanding.

                    </span>
                </p>
            </div>
            <div className={"absolute top-0 left-0 w-full h-full z-[-1]"}>
                <Image src={pic} alt={""} className={"object-cover w-full h-full"}/>
            </div>
        </header>
    );
}

export default Header;