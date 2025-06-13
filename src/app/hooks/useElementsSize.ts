"use client"
import {RefObject, useEffect, useState} from "react";
import {useInView} from "framer-motion";

export const useElementSize = (ref: RefObject<HTMLElement | null>) => {
    const [size, setSize] = useState({width: 0, height: 0});
    const inView = useInView(ref, {amount: "some"})
    useEffect(() => {
        function container() {
            const node = ref.current;
            if (!node) return;

            const observer = new ResizeObserver(([entry]) => {
                const {width, height} = entry.contentRect;
                setSize({width, height});
            });


            observer.observe(node);
            return () => observer.disconnect();

        }


        window.addEventListener("resize", container)
        container()
        return () => window.removeEventListener("resize", container)


    }, [inView, ref]);

    return {...size, inView};
};
