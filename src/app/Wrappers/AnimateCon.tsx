"use client"
import {HTMLMotionProps, motion, MotionProps, TargetAndTransition, useInView} from 'framer-motion'
import React, {useRef} from 'react'
import {useScreenWidth} from "@/app/hooks/useScreenWidth";

type motionType = keyof typeof motion
type AnimateConProps<generic extends motionType> = MotionProps & {
    htmlElement?: generic,
    children: React.ReactNode,
    responsiveInitial?: TargetAndTransition
    responsiveAnimation?: TargetAndTransition
    persistWhileResponsive?: boolean
    className?: string,
    refProp?: React.RefObject<HTMLElement | null>,
    once?: boolean,
    hidden: TargetAndTransition,
    visible: TargetAndTransition,
}
type tagsType = {
    div: HTMLElement,
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

export default function AnimateCon<T extends motionType>({
                                                             children,
                                                             htmlElement,
                                                             className,
                                                             refProp,
                                                             responsiveAnimation,
                                                             responsiveInitial,
                                                             once = true,
                                                             persistWhileResponsive = true,
                                                             hidden, visible,
                                                             ...MotionSvgProps

                                                         }: AnimateConProps<T>) {
    const ref = useRef<HTMLElement>(null)
    const inView = useInView(refProp ? refProp : ref, {once: once, amount: "some"})
    const Container = (motion?.[htmlElement || "div"]) as React.ForwardRefExoticComponent<
        HTMLMotionProps<keyof tagsType>
    >;
    const screenWidth = useScreenWidth(persistWhileResponsive)
    const isDesktop = screenWidth > 700
    console.log(isDesktop, screenWidth)
    return (
        <Container
            ref={refProp ? refProp : ref}
            className={className}
            {...MotionSvgProps}
            initial={!persistWhileResponsive ? (isDesktop ? hidden : responsiveInitial) : hidden}
            animate={!persistWhileResponsive ? (isDesktop ? (inView ? visible : hidden) : inView ? responsiveAnimation : responsiveInitial) : (inView ? visible : hidden)}
        >
            {children}
        </Container>
    );
}

