"use client"
import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";

function NavBarScroll({setDisplay}: { setDisplay: (value: (((prevState: boolean) => boolean) | boolean)) => void }) {
    const [showNavBar, setShowNavBar] = useState(false)
    const ref = useRef<HTMLElement>(null)
    const navMenus = ["About", "Projects", "Testimonials", "FAQs"]

    useEffect(() => {
        function navDisplay() {
            if (typeof window != "undefined" && window.scrollY > 100) {
                setShowNavBar(true)
                return;
            }
            setShowNavBar(false)
        }

        window.addEventListener("scroll", navDisplay)
        navDisplay()

        return () => {
            window.removeEventListener("scroll", navDisplay);
        };
    }, [])
    return (
        <>
            <nav ref={ref}
                 className={"flex  py-[20px] w-full fixed top-0 px-[20px] items-center z-[50] transition-all justify-center"}
                 style={{
                     backgroundColor: "rgba(0,0,0,0.7)",
                     transform: `translateY(${showNavBar ? "0px" : "-100px"})`
                 }}>
                <div className={"max-w-[1170px]   w-full justify-between flex items-center"}>
                    <div className={"w-[200px]"}>
                        <Link href={"/"} className={"flex gap-[14px] items-center"}>
                            <div>
                                <svg width="49" height="48" viewBox="0 0 49 48" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M43.9797 17.5381L36.385 40.916H11.803L4.20728 17.5381L24.094 3.08984L43.9797 17.5381Z"
                                        stroke="#2B00C5" strokeWidth="5"/>
                                    <path d="M23.594 14L32.629 20.5643L29.178 31.1857H18.01L14.559 20.5643L23.594 14Z"
                                          fill="#2B00C5"/>
                                </svg>
                            </div>
                            <h1 className={"  font-[700] text-[24px]  sm:leading-[32px] text-white"}>
                                Syntari
                            </h1>
                        </Link>

                    </div>
                    <div className={"max-w-[515px] hidden md:flex items-center w-full"}>
                        <ul className={"w-full flex item-center justify-between"}>
                            {navMenus.map((data, key) => {
                                return (
                                    <li key={key}>
                                        {["Testimonials", "FAQs"].includes(data) ?
                                            <a href={"#" + data}
                                               className={"  hover:text-[#525252] transition-all leading-[32px] text-white"}>
                                                {data}
                                            </a> :
                                            <Link href={data}
                                                  className={"  hover:text-[#525252] transition-all  leading-[32px] text-white"}>
                                                {data}
                                            </Link>}

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={"w-[200px] md:flex hidden justify-end"}>
                        <Link href={"Contact"}
                              className={"flex hover:bg-white active:bg-[#e3e3e3] hover:text-black transition-all duration-500 text-white items-center justify-center border border-[rgba(255,255,255,0.295743)] rounded-[6px] w-[138px] h-[48px]"}>
                        <span className={"  font-[900] uppercase text-[14px] leading-[14px]"}>
                            Contact
                        </span>
                        </Link>
                    </div>

                    <div onClick={() => setDisplay((prevState) => !prevState)}
                         className="p-[16px] border relative z-[5000]  border-white rounded-[6px] flex md:hidden">
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H1C0.447715 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H1Z"
                                  fill="white"/>
                        </svg>

                    </div>

                </div>
            </nav>

        </>

    );
}

export default NavBarScroll;