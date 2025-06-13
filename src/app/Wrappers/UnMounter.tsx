"use client"
import React from 'react';
import AnimateCon from "@/app/Wrappers/AnimateCon";

type elements = {
    section: HTMLElement,
    div: HTMLElement
}

function UnMounter({children, className, HtmlElement}: {
    children: React.ReactNode,
    className?: string,
    HtmlElement?: keyof elements
}) {

    return (<>
            <AnimateCon once={false} className={className} htmlElement={HtmlElement} hidden={{opacity: 0}}
                        visible={{opacity: 1, transition: {duration: 0.7}}}>
                {children}
            </AnimateCon>
        </>

    );
}

export default UnMounter;