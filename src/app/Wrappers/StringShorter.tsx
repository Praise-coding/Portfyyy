"use client"
import React, {useRef} from 'react';
import {useTextReducer} from "@/app/hooks/useTextReducer";

type tagsType = {
    div: HTMLDivElement,
    span: HTMLElement,
    h1: HTMLElement,
    h2: HTMLElement,
    h3: HTMLElement,
    h4: HTMLElement,
    h5: HTMLElement,
    h6: HTMLElement,
    p: HTMLElement,
    strong: HTMLElement,
    section: HTMLElement
}



function StringShorter({word, speed = 100, delay = 5000, once = true, Element, className}: {
    word: Array<string>,
    Element?: keyof tagsType,
    className?: string,
    once?: boolean,
    speed?: number,
    delay?: number
}) {
    const ref = useRef<HTMLElement>(null)
    const text = useTextReducer(word, once, ref, speed, delay)
    const Wrapper = !Element ? 'section' : Element
    return (
        // @ts-expect-error ref is buggin
        <Wrapper ref={ref} className={className}>
            {text}.
        </Wrapper>
    );
}

export default StringShorter;