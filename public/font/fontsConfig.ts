import {Epilogue, Raleway} from "next/font/google";
import localFont from "next/font/local";



export const epilogue = Epilogue({
    variable: "--font-epilogue",
    subsets: ["latin"],
    preload: true,
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})


export const Helvetica = localFont({
    src: "./helvetica-255/Helvetica-Bold.ttf",
    preload: true,
    variable: "--font-helvetica"
})

export const raleway = Raleway({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    preload: true,
    subsets: ["latin"],

    variable: "--font-raleway"
})

export const ClashGreek = localFont({
    src: [{
        path: "./ClashGrotesk/fonts/ClashGrotesk-Regular.ttf",
        weight: "400"
    }, {
        path: "./ClashGrotesk/fonts/ClashGrotesk-Medium.ttf",
        weight: "500"
    }, {
        path: "./ClashGrotesk/fonts/ClashGrotesk-Semibold.ttf",
        weight: "600"
    }, {
        path: "./ClashGrotesk/fonts/ClashGrotesk-Bold.ttf",
        weight: "700"
    }],
    preload: true,
    variable: "--font-clashGreek"
})

