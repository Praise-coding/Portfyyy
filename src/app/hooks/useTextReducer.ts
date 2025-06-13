"use client"
import {RefObject, useEffect, useRef, useState} from "react";
import {useInView} from "framer-motion";

export function useTextReducer(words: string[], once: boolean, textCon: RefObject<HTMLElement | HTMLParagraphElement | null>, speed: number, delay: number) {
    const [currentWord, setCurrentWord] = useState(0)
    const [index, setIndex] = useState(0)
    const [sliced, setSliced] = useState("")
    const [isDeleting, setIsDeleting] = useState(false);
    const [pause, setPause] = useState(false)
    const inView = useInView(textCon)
    const ref = useRef<NodeJS.Timeout | null>(null)
    const [stop, setStop] = useState(false)
    useEffect(() => {
        if (stop || !inView) {
            return
        }
        if (pause) {
            ref.current = setTimeout(() => {
                setPause(false)
            }, delay)
            return () => clearTimeout(ref.current!)
        }
        ref.current = setInterval(() => {
            const word = words[currentWord]
            const nextIndex = isDeleting ? (word[index] == "" ? index - 2 : index - 1) : (word[index] == "" ? index + 2 : index + 1)
            const doneDeleting = isDeleting && (nextIndex < 0)
            const doneTyping = !isDeleting && (nextIndex > (word.length))
            if (doneDeleting) {
                setCurrentWord((prev) => (prev + 1) % words.length)
                setIsDeleting(false)
            } else if (doneTyping) {
                if (once && currentWord == (words.length - 1)) {
                    setStop(true);
                    return;
                }
                setIsDeleting(true)
                setPause(true)
            } else {
                setIndex(nextIndex)
                setSliced(word.slice(0, nextIndex))
            }
        }, speed)

        return () => clearInterval(ref.current!)


    }, [currentWord, index, pause, isDeleting, words, inView, stop, once, speed, delay])

    return sliced
}