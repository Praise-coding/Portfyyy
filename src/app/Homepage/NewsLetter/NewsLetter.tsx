"use client"
import React, {useActionState, useEffect} from 'react';
import {addEmailNewsletter} from "@/app/Homepage/NewsLetter/addEmailNewsletter";
import StringShorter from "@/app/Wrappers/StringShorter";
import AnimateCon from "@/app/Wrappers/AnimateCon";

function NewsLetter() {
    const [formState, formAction] = useActionState(addEmailNewsletter, {
        success: false,
        message: '',
    });
    useEffect(() => {
        if (formState.message == '') return;
        console.log(formState.success ? "success" : "error", formState.message)
    }, [formState])

    return (
        <AnimateCon once={false} htmlElement={"section"} hidden={{opacity: 0}} visible={{opacity: 100, transition: {duration: 0.7}}}
                    className={"py-[80px] flex justify-center px-[20px]"}>
            <div id={"NewsLetter"} className={"max-w-[1170px] sm:flex justify-between items-center w-full"}>
                <div className="justify-between gap-[30px] md:flex items-center w-full">
                    <div>
                        <h4 className="text-[#ffffff]    text-[24px] font-bold leading-8">Newsletter</h4>
                        <StringShorter Element={"p"} speed={50}
                                       word={["Sign up to my Newsletter and be one of the first people to read my blog post"]}
                                       className="  leading-8 max-w-[430px] text-[#ffffff] opacity-[80%] mt-[3px]"/>

                    </div>
                    <div className="mt-[36px] sm:mt-[0px]">
                        <form action={formAction} className="flex flex-col sm:flex-row gap-[16px] md:gap-[26.65px]">
                            <div className="w-full">
                                <input required id={"newsletterInput"} type="email" name={"email"}
                                       className="bg-white    border border-[#2B00C5] rounded-[6px] w-full sm:w-[329px] h-[48px] px-[16px] box-border"
                                       placeholder="Your Email"/>
                            </div>
                            <div className="w-full">
                                <button
                                    className={"sm:w-[138px] w-full block cursor-pointer hover:bg-transparent hover:border-2 border-white active:bg-[rgba(0,0,0,0.8)] transition-all text-black hover:text-white h-[48px] flex justify-center items-center rounded-[6px] bg-white"}
                                    style={{boxShadow: "0px 3px 9px rgba(57, 20, 0, 0.08)"}}>
                        <span className={"  font-[900] text-[14px] leading-[14px] uppercase "}>
                            Submit
                        </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AnimateCon>
    );
}

export default NewsLetter;