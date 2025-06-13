"use client"
import React, {useMemo} from 'react';
import {useScreenWidth} from "../../hooks/useScreenWidth";
import {contactInfoType} from "@/app/Types";
import useSWR from "swr";
import {DemoData} from "@/app/Homepage/Contact/DemoData";
import Link from "next/link";


const ContactCard = ({keyPos, screenWidth, contactInfo}: {
    keyPos: number,
    contactInfo: contactInfoType,
    screenWidth: number
}) => {
    const baseClasses = screenWidth > 768
        ? keyPos === 2
            ? "border rounded-r-md"
            : keyPos === 0
                ? "border-t border-b border-l rounded-l-md"
                : "border-t border-b border-l"
        : keyPos === 2
            ? "border rounded-b-md"
            : keyPos === 0
                ? "border-t border-r border-l rounded-t-md"
                : "border-t border-r border-l";

    const getHref = () => {
        if (contactInfo?.["contactType"] === "Email") {
            return `mailto:${contactInfo?.contactDetails}`;
        }
        if (contactInfo?.["contactType"] === "WhatsApp") {
            // make sure contactDetails is phone number without + or spaces
            return `https://wa.me/${contactInfo?.contactDetails}`;
        }
        if (contactInfo?.["contactType"] === "Telegram") {
            return `https://t.me/${contactInfo?.contactDetails}`;
        }
        // fallback to https if it's a URL
        return contactInfo?.contactDetails.startsWith('http')
            ? contactInfo.contactDetails
            : `https://${contactInfo.contactDetails}`;
    };
    return (
        <article id={"Contact"} key={keyPos} className={`py-[38px]
         
         ${baseClasses}
         
         
         border-[rgba(255,255,255,0.43)] px-[28px] md:px-[48px]`}>
            <div className={"flex gap-[24px] items-center"}>
                <div className={"flex justify-center items-center w-[64px] h-[64px] rounded-full bg-[#2B00C5]"}>
                    {contactInfo?.["contactType"] == "WhatsApp" ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.82812 0.765296C3.35902 0.235151 4.09188 -0.0416708 4.84066 0.0050961C5.58945 0.051863 6.28217 0.417722 6.743 1.00981L9.43541 4.46897C9.92889 5.10349 10.1029 5.93003 9.9079 6.71007L9.08742 9.99522C9.00114 10.3413 9.10245 10.7073 9.35441 10.9598L13.0398 14.6454C13.2925 14.8979 13.6592 14.9993 14.0058 14.9124L17.2892 14.0919C18.0691 13.8969 18.8953 14.0711 19.5301 14.5644L22.989 17.2555C24.2324 18.2231 24.3464 20.0607 23.2335 21.1722L21.6825 22.7233C20.5726 23.8333 18.9136 24.3209 17.3672 23.7763C13.4091 22.3836 9.81531 20.1174 6.85249 17.146C3.88152 14.1834 1.61557 10.5899 0.222699 6.63206C-0.320284 5.08699 0.167201 3.42642 1.27717 2.31637L2.82812 0.765296Z" fill="white"/>
                        </svg>
                        : contactInfo?.["contactType"] == "Telegram" ?
                            <svg
                                width="26" height="26"  viewBox="0 0 24 24" version="1.1">
                                <title>telegram_line</title>
                                <g id="页面-1" stroke="none" strokeWidth="3" fill="none" fillRule="evenodd">
                                    <g id="Brand" transform="translate(-672.000000, -0.000000)">
                                        <g id="telegram_line" transform="translate(672.000000, 0.000000)">
                                            <path
                                                d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                                id="MingCute"
                                                fillRule="nonzero">

                                            </path>
                                            <path
                                                d="M21.8394,6.05639 C22.0315,4.8917 20.8652,3.97177 19.7773,4.42984 L2.67703,11.63 C1.48461,12.132 1.42351,13.8558 2.67788,14.3758 C3.60596,14.7605 5.02633,15.3246 6.45085,15.7943 C7.61932,16.1795 8.8931,16.5371 9.91353,16.6383 C10.1929,16.9725 10.5445,17.2935 10.9017,17.5872 C11.4487,18.0371 12.1074,18.5012 12.7873,18.9455 C14.1489,19.8352 15.6597,20.6865 16.678,21.2396 C17.8949,21.9006 19.3517,21.1395 19.5705,19.8131 L21.8394,6.05639 Z M4.59485,12.9925 L19.7186,6.62459 L17.6009,19.4649 C16.6024,18.9219 15.163,18.1087 13.8813,17.2713 C13.2329,16.8475 12.6407,16.4279 12.172,16.0425 C12.0051,15.9052 11.8638,15.7802 11.7461,15.6683 L15.7072,11.7071 C16.0977,11.3166 16.0977,10.6834 15.7072,10.2929 C15.3167,9.90237 14.6835,9.90237 14.293,10.2929 L9.95476,14.6311 C9.22132,14.5373 8.19888,14.2647 7.07709,13.8949 C6.21377,13.6102 5.34574,13.2869 4.59485,12.9925 Z"
                                                id="形状" fill="#ffffff">

                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            : <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.4252 6.87769e-09C2.03022 -9.42103e-05 0.820577 0.967828 0.510194 2.3325L12.3945 9.621L24.2787 2.3325C23.9683 0.967828 22.7587 -9.42103e-05 21.3637 6.87769e-09H3.4252ZM0.435547 14.7019V4.0459L9.11031 9.3649L0.435547 14.7019ZM10.5422 10.2447L0.720849 16.2852C1.21616 17.3332 2.26916 18.0008 3.42508 17.9997H21.3636C22.5193 17.9999 23.5717 17.3318 24.0663 16.2837L14.245 10.2432L12.3943 11.3787L10.5422 10.2432V10.2447ZM24.3535 14.7019L15.6787 9.3664V9.3649L24.3535 4.0459V14.7019Z" fill="white"/>
                            </svg>

                    }

                </div>
                <h3 className={"font-epilogue  leading-[32px] uppercase tracking-[3px] text-[#EF6D58]"}>
                    {contactInfo?.["contactType"]}
                </h3>
            </div>
            <div className={"mt-[26px]"}>
                <Link target={"_blank"} href={getHref()}>
                    <span className={"hover:text-white transition-all font-epilogue text-[20px] leading-[32px] text-[rgba(255,255,255,0.8)]"}>
                        {getHref().replace("https://", "").replace("mailto:", "")}
                    </span>
                </Link>

            </div>
        </article>
    )
}

function Contact() {
    const screenWidth = useMemo(() => useScreenWidth, [])()
    const {data, isLoading} = useSWR(`key`, DemoData)

    return (
        <section className={"px-[20px]  flex justify-center"}>
            {isLoading ? "Loading" :
                <div className={"max-w-[1170px] grid md:grid-cols-3 w-full"}>
                    {data?.map((data, key) => {
                        return (
                            <ContactCard contactInfo={data} screenWidth={screenWidth} keyPos={key} key={key}/>
                        )
                    })}

                </div>}
        </section>
    );
}

export default Contact;