import React, {Suspense} from 'react';
import Header from "./Header/Header";
import MyProjects from "@/app/Projects/MyProjects";
import ProjectLoader from "@/app/Projects/Loader";
import Footer from "@/app/Homepage/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Some project i have done',
}

function Page() {

    return (
        <>
            <Header/>

            <main>
                <Suspense fallback={<ProjectLoader/>}>
                    <MyProjects/>
                </Suspense>
            </main>

            <Footer/>
        </>
    );
}

export default Page;