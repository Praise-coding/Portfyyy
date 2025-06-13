"use client"
import React, {useEffect, useRef, useState} from 'react';
import {useElementSize} from "@/app/hooks/useElementsSize";
import {motion} from 'framer-motion';

type elements = {
    section: HTMLElement,
    div: HTMLElement
}

function UnMounter({children, applyHeight = true, className, HtmlElement}: {
    children: React.ReactNode,
    className?: string,
    HtmlElement?: keyof elements
    applyHeight?: boolean
}) {
    const ref = useRef(null)
    const {height, inView} = useElementSize(ref)
    const Wrapper = motion?.[!HtmlElement ? "div" : HtmlElement]

    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 2000)
    }, []);
    const conditionalRender = show ? children : ""
    return ( <>
            {<Wrapper initial={{opacity: 0}} animate={{opacity: (inView && show) ? 100 : 0, transition: {duration: 0.7}}}
                      className={className} ref={ref}>
                {!applyHeight && !inView ? "" : (inView ? conditionalRender : height ?
                    <div style={{height: applyHeight ? height + "px" : "0px"}}>

                    </div> : conditionalRender)}
            </Wrapper>}
    </>

    );
}

export default UnMounter;