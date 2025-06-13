import React, {Suspense} from "react";
import Header from "@/app/Homepage/Header/Header";
import Contact from "@/app/Homepage/Contact/Contact";
import Footer from "@/app/Homepage/Footer";
import dynamic from "next/dynamic";
import GradientBackgrounds from "@/app/Homepage/BackgroundStuff/BackgroundColors";
import ProjectLoader from "@/app/Homepage/LatestWork/Loader";
import TestimonialLoader from "@/app/Homepage/Testimonials/SkelentonLoader";
import {Metadata} from "next";
import About from "@/app/Homepage/About";
import Experience from "@/app/Homepage/Experience";
import HowWeWork from "@/app/Homepage/HowWeWork";
import VideoReel from "@/app/Homepage/VideoReel";
import NewsLetter from "@/app/Homepage/NewsLetter/NewsLetter";
import HelpingHand from "@/app/Homepage/HelpingHand";

const Testimonials = dynamic(() => import("@/app/Homepage/Testimonials/Testimonials"))
const MyProjects = dynamic(() => import("@/app/Homepage/LatestWork/MyProjects"))
const FAQS = dynamic(() => import("@/app/Homepage/FAQS/FAQS"))


export const metadata: Metadata = {
    title: 'Syntari',
    description: 'Full stack web developer',
}

export default function Home() {
    return (
        <>
            <Header/>
            <main className={""}>
                <About/>
                <Experience/>
                <HowWeWork/>
                <hr className={"mx-[20px] border-none md:mx-[48px] mt-[71px] md:mt-[108px]  h-[1px] bg-[rgba(255,255,255,0.43)] "}/>
                <VideoReel/>
                <Suspense fallback={<ProjectLoader/>}>
                    <MyProjects/>
                </Suspense>
                <Suspense fallback={<TestimonialLoader/>}>
                    <Testimonials/>
                </Suspense>
                <Suspense fallback={<div>Loading</div>}>
                    <FAQS/>
                </Suspense>

                <hr className={"mx-[20px] border-none md:mx-[48px] mt-[71px] md:mt-[108px]  h-[1px] bg-[rgba(255,255,255,0.43)] "}/>
                <NewsLetter/>
                <hr className={"mx-[20px] border-none md:mx-[48px] mb-[71px]   h-[1px] bg-[rgba(255,255,255,0.43)] "}/>
                <Contact/>
                <HelpingHand/>
            </main>

            <GradientBackgrounds/>
            <Footer/>


        </>
    );
}
