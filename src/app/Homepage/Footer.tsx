import React from 'react';
import Link from "next/link";

function Footer() {
    return (
        <footer className="mt-[120px] px-[20px] flex justify-center ">
            <div className="max-w-[1170px]  w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1128px] w-full"><h4
                    className="text-[24px] text-center md:text-left font-Epilogue font-bold leading-8 text-white">
                    Syntari</h4>
                    <div className="text-center md:text-left pt-[30px] md:pt-[0px]">
                        <ul className="grid justify-center ">
                            <div
                                className="text-[#EF6D58] leading-[32px] uppercase font-Epilogue tracking-[3px] mb-[16px]">MENU
                            </div>
                            <li className="text-white font-Epilogue leading-8 mt-[12px]">
                                <Link href="/About">About</Link>
                            </li>
                            <li className="text-white font-Epilogue leading-8 mt-[12px]">
                                <Link href="/Projects">Projects</Link></li>
                            <li className="text-white font-Epilogue leading-8 mt-[12px]">
                                <Link href="/#Testimonials">Testimonials</Link>
                            </li>
                            <li className="text-white font-Epilogue leading-8 mt-[12px]">
                                <Link href="/#FAQs">FAQs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left pt-[90px] md:pt-[0px]">
                        <ul className="grid justify-center ">
                            <div
                                className="text-[#EF6D58] leading-[32px] uppercase font-Epilogue tracking-[3px] mb-[16px]">
                                Other
                            </div>
                            <li className="text-white font-Epilogue leading-8 mt-[12px]">
                                <Link href="/#Contact">Contact</Link>
                            </li>
                            <li className="text-white font-Epilogue leading-8 mt-[12px]">
                                <Link
                                href="/#NewsLetter">NewsLetter</Link>
                            </li>
                            <li className="text-white font-Epilogue leading-8 mt-[12px]">
                                <Link href="/#VideoExplanation">Video Explanation</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="flex justify-end pt-[30px] md:pt-[0px]"><Link
                        className="bg-[#EF6D58] p-[16px] flex justify-center items-center h-[48px] w-[48px] rounded-full"
                        href="https://www.linkedin.com/in/okormoru-praise-137562268/">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                             className="text-white text-[20px]" height="1em" width="1em"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                        </svg>
                    </Link></div>
                </div>
                <hr className="bg-[#3A3C56] outline-none border-none text-[#ff5900] h-[1px] mt-[68px] mb-[52px]"/>
                <div className="flex justify-between mb-[52px]">
                    <div className="text-[rgba(255,255,255,0.64)] font-Epilogue leading-8">I would Like To Work With
                        You
                    </div>
                    <div><Link className="text-white font-Epilogue leading-8"
                               href="https://www.linkedin.com/in/okormoru-praise-137562268/">Hire Me</Link></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;