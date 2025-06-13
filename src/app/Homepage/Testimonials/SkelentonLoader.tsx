import React from 'react';

async function TestimonialLoader() {

    return (
        <section id={"Testimonials"} className={"flex px-[20px] justify-center"}>
            <div className={"py-[92px] md:py-[150px] max-w-[1170px] w-full"}>
                <h2 className={"  text-center leading-[32px] uppercase tracking-[3px] text-[#EF6D58]"}>
                    Testimonials
                </h2>
                <h3 className={"text-center mt-[17px] sm:mt-[20px]   font-[800] text-[56px] leading-[64px] tracking-[-1px] text-white"}>
                    What Our <br/>
                    Clients Saying
                </h3>
                <div className={"mt-[35px] md:mt-[64px]"}>
                    <section className={"grid sm:grid-cols-2"}>
                        {Array(4).fill("").map((value, key) => {
                            return (
                                <article key={key}
                                         className={`group rounded-md  transition-all duration-500 cursor-pointer border py-[47px] px-[28px] sm:px-[49px] border-[rgba(255,255,255,0.43)]`}>
                                    <div className={"flex items-center gap-[7.97px]"}>
                                        {Array(5).fill(null).map((_, key) => {
                                            return (
                                                <svg className={"bg-[]  animate-pulse"} key={key} width="23" height="22"
                                                     viewBox="0 0 23 22" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.5764 18L4.54708 21.7082L5.88956 13.8541L0.202717 8.2918L8.06175 7.1459L11.5764 0L15.0911 7.1459L22.9501 8.2918L17.2633 13.8541L18.6057 21.7082L11.5764 18Z"
                                                        fill="rgba(255,255,255,0.37)"/>
                                                </svg>
                                            )
                                        })}


                                    </div>

                                    <div
                                        className={"mt-[36px] grid gap-[4px] transition-all duration-500 group-hover:text-black text-[rgba(255,255,255,0.64)]"}>

                                        <div
                                            className={"rounded-full bg-[rgba(255,255,255,0.37)]  animate-pulse  h-[20px]  transition-all duration-500 group-hover:text-black font-[700] text-[24px] leading-[32px] text-white"}>

                                        </div>
                                        <div
                                            className={"rounded-full bg-[rgba(255,255,255,0.37)]  animate-pulse  h-[20px]  transition-all duration-500 group-hover:text-black font-[700] text-[24px] leading-[32px] text-white"}>

                                        </div>
                                        <div
                                            className={"rounded-full bg-[rgba(255,255,255,0.37)]  animate-pulse  h-[20px]  transition-all duration-500 group-hover:text-black font-[700] text-[24px] leading-[32px] text-white"}>

                                        </div>
                                        <div
                                            className={"rounded-full bg-[rgba(255,255,255,0.37)] w-[50%] animate-pulse  h-[20px]  transition-all duration-500 group-hover:text-black font-[700] text-[24px] leading-[32px] text-white"}>

                                        </div>
                                    </div>
                                    <div className={"mt-[31px] flex items-center"}>
                                        <div
                                            className={"w-[80px] h-[80px] rounded-full bg-[rgba(255,255,255,0.37)]  animate-pulse  relative"}>

                                        </div>
                                        <div className={"ml-[23px] flex-1"}>
                                            <div
                                                className={"rounded-full bg-[rgba(255,255,255,0.37)]  animate-pulse h-[24px] w-[50px] transition-all duration-500 group-hover:text-black font-[700] text-[24px] leading-[32px] text-white"}>

                                            </div>
                                            <p className={"mt-[3px] bg-[rgba(255,255,255,0.37)]  animate-pulse h-[24px] rounded-full w-[100px]  transition-all duration-500 group-hover:text-black text-white"}>

                                            </p>
                                        </div>
                                    </div>
                                </article>

                            )
                        })}

                    </section>


                </div>

                <div className={"flex justify-center mt-[64px]"}>
                    <div
                        className={"w-[200px] duration-500 bg-[rgba(255,255,255,0.37)] text-white animate-pulse  rounded-[6px] h-[48px] flex items-center justify-center px-[20px] "}>
                        <span className={"  font-[900] text-[14px] leading-[14px] uppercase "}>

                            </span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default TestimonialLoader;