"use client"
import {motion} from 'framer-motion';
import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';
const ToastContext = createContext<null | ((status: string, message: string) => void)>(null)


export function ToastContainer({children}: { children: React.ReactNode }) {
    const [display, setDisplay] = useState(false)
    const [info, setInfo] = useState({
        status: "",
        message: ""
    })

    const showToaster = useCallback((status: string, message: string) => {
        setInfo(() => {
            return {
                status: status,
                message: message
            }
        })
        setDisplay(true)
    }, [])

    useEffect(() => {
        if (!display) return;
        setTimeout(() => {
            setDisplay(false)
        }, 2000)
    }, [display])

    const toastStyles = {

        boxShadow: "4px 4px 8px rgba(0,0,0,0.8)",
        borderColor: info.status === 'success'
            ? '#01E17B'
            : info.status === 'error'
                ? '#F04349' : "#01E17B",
        backgroundColor:
            info.status === 'success'
                ? '#E5FCF1'
                : info.status === 'error'
                    ? '#FDECEC'
                    : 'rgba(14,0,58,0.7)',
    };
    return (
        <ToastContext.Provider value={showToaster}>
            <motion.div initial={{y: -200}} animate={{y: display ? 0 : -200}} transition={{
                type: "spring",
                bounce: 1,
                duration: 0.2
            }}
                        className={"fixed flex top-[50px] px-[20px] justify-center items-center h-[56px] transition-all duration-500 z-[2000] w-full left-0"}>
                <div style={toastStyles}
                     className={"max-w-[350px] border rounded h-[56px] px-[10px] sm:px-[30px] w-full flex items-center"}>
                    <div className={" h-fit"}>
                        {info.status == "success" ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2004_13)">
                                <rect width="24" height="24" rx="6" fill="#01E17B"/>
                                <path
                                    d="M16.281 9.21996C16.3508 9.28962 16.4061 9.37234 16.4438 9.46339C16.4816 9.55443 16.501 9.65203 16.501 9.75059C16.501 9.84915 16.4816 9.94675 16.4438 10.0378C16.4061 10.1288 16.3508 10.2116 16.281 10.2812L11.031 15.5312C10.9614 15.6009 10.8787 15.6563 10.7876 15.694C10.6966 15.7318 10.599 15.7512 10.5004 15.7512C10.4019 15.7512 10.3043 15.7318 10.2132 15.694C10.1222 15.6563 10.0394 15.6009 9.96979 15.5312L7.71979 13.2812C7.57906 13.1405 7.5 12.9496 7.5 12.7506C7.5 12.5516 7.57906 12.3607 7.71979 12.22C7.86052 12.0792 8.05139 12.0002 8.25042 12.0002C8.44944 12.0002 8.64031 12.0792 8.78104 12.22L10.5004 13.9403L15.2198 9.21996C15.2894 9.15023 15.3722 9.09491 15.4632 9.05717C15.5543 9.01943 15.6519 9 15.7504 9C15.849 9 15.9466 9.01943 16.0376 9.05717C16.1287 9.09491 16.2114 9.15023 16.281 9.21996Z"
                                    fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2004_13">
                                    <rect width="24" height="24" rx="6" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>:
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2004_85)">
                            <rect width="24" height="24" rx="6" fill="#F04349"/>
                            <path d="M11.25 12.75V7.5C11.25 7.30109 11.329 7.11032 11.4697 6.96967C11.6103 6.82902 11.8011 6.75 12 6.75C12.1989 6.75 12.3897 6.82902 12.5303 6.96967C12.671 7.11032 12.75 7.30109 12.75 7.5V12.75C12.75 12.9489 12.671 13.1397 12.5303 13.2803C12.3897 13.421 12.1989 13.5 12 13.5C11.8011 13.5 11.6103 13.421 11.4697 13.2803C11.329 13.1397 11.25 12.9489 11.25 12.75ZM13.125 16.125C13.125 16.3475 13.059 16.565 12.9354 16.75C12.8118 16.935 12.6361 17.0792 12.4305 17.1644C12.225 17.2495 11.9988 17.2718 11.7805 17.2284C11.5623 17.185 11.3618 17.0778 11.2045 16.9205C11.0472 16.7632 10.94 16.5627 10.8966 16.3445C10.8532 16.1262 10.8755 15.9 10.9606 15.6945C11.0458 15.4889 11.19 15.3132 11.375 15.1896C11.56 15.066 11.7775 15 12 15C12.2984 15 12.5845 15.1185 12.7955 15.3295C13.0065 15.5405 13.125 15.8266 13.125 16.125Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2004_85">
                            <rect width="24" height="24" rx="6" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        }

                    </div>
                    <div className={"font-[500] font-raleway leading-none ml-[12px]"}>
                        {info?.["message"]}
                    </div>
                </div>
            </motion.div>
            {children}
        </ToastContext.Provider>

    );
}

export function useDisplayToaster() {
    const showToaster = useContext(ToastContext)
    return {showToaster}
}

