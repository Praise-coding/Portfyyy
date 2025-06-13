"use client"
import {useEffect, useState} from "react";

export const useScreenWidth = (stop?: boolean) => {
    const [width, setWidth] = useState(0)
    useEffect(() => {
        if(stop){
            return;
        }
        function widthListener() {
            if (typeof window != 'undefined') {
                setWidth(window.innerWidth)
            }
        }

        window.addEventListener("resize", widthListener)
        window.addEventListener("load", widthListener)
        widthListener()

        return () => {
            window.removeEventListener("resize", widthListener)
            window.removeEventListener("load", widthListener)
        }
    }, [stop])
    return width
}