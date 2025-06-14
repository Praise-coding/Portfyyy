import React, {useEffect, useState} from 'react';
import {ProjectTypes} from "@/app/Types";
import Link from "next/link";
import Image from "next/image";
import {motion, useAnimation} from "framer-motion";
import {CopyToClipboard} from 'react-copy-to-clipboard-ts';
import {useDisplayToaster} from "@/app/Toaster/ToastContainer";
function ProjectDetails({projectData, closeSection}: {
    projectData: ProjectTypes | null,
    closeSection: React.Dispatch<React.SetStateAction<ProjectTypes | null>>
}) {
    const [changeImage, setChangeImage] = useState(0)
    const animationControls = useAnimation()
    const [state, setState] = useState(false)
    const {showToaster} = useDisplayToaster()
    function closePage() {
        animationControls.start({opacity: 0}).then(() => closeSection(null))
    }

    function forwardImage() {
        if (!projectData?.["projectImages"] || changeImage == -400) {
            return;
        }
        setChangeImage((prev) => prev - 100)
    }

    function backwardImage() {
        if (!projectData?.["projectImages"] || changeImage == 0) {
            return;
        }
        setChangeImage((prev) => prev + 100)
    }

    function copyProjectUrl(){
        if(!showToaster) return
        showToaster("success", "Project url copied successfully")
    }
    useEffect(() => {
        setState(true)
    }, []);
    return (
        <>
            <motion.article animate={animationControls} style={{opacity: !state ? "0%" : `100%`, transform:`translateY(${!state ? "2000px" : `0px`})`}}
                            className={`w-full  px-[20px] pt-[120px] duration-500  overflow-y-scroll left-0 justify-center bg-[#030E21] flex top-0  z-[20] transition-all h-screen  fixed`}>

                {(projectData) ? <>
                        <div className={"absolute z-[] top-0 left-0 opacity-[20%] w-full h-full "}>
                            <div className={"relative  h-screen"}>
                                <div style={{filter: "blur(100px)"}}
                                     className={"bg-[#2F45BC] max-w-[328.53px] h-[703.22px] rounded-full left-[20px] top-0 w-full absolute"}>

                                </div>
                                <div style={{filter: "blur(100px)"}}
                                     className={"bg-[#BE229C] max-w-[328.53px] h-[703.22px] rounded-full right-[0px] bottom-0 w-full absolute"}>

                                </div>
                            </div>
                        </div>

                        <div
                            className={"rounded-t-[8px]  z-[10] relative  font-[clashGreek] max-w-[1180px] font-[500] w-full self-end  h-[100%]"}>
                            <div
                                className={"grid grid-cols-1 pb-[30px] md:grid-cols-2 justify-between gap-[30px] sm:gap-[50px]"}>
                                <div className={"w-full"}>
                                    <button onClick={() => closePage()}
                                            className={"w-full block sm:hidden  text-[20px] text-center bg-[white] mb-[20px] rounded h-[50px]"}>
                                        Close
                                    </button>
                                    <div className={"relative gap-[12px] flex overflow-hidden "}>
                                        <div className={"w-[100%]  rounded sm:rounded-[8px] overflow-hidden"}>
                                            <div style={{transform: `translateX(${(changeImage / 5) + "%"})`}}
                                                 className={"w-[500%] transition-all duration-500 relative flex"}>
                                                {projectData?.["projectImages"].map((image, key) => {
                                                    return (
                                                        <div key={key} className={"w-[100%] h-fit sm:max-h-[500px] bg-[rgba(0,0,0,0.5)] rounded sm:rounded-[8px] flex items-center"}>
                                                            <Image width={800} height={500}
                                                                   src={image?.url}
                                                                   priority={true}
                                                                   alt={image + " image"}
                                                                   className={"object-contain object-top-left w-full rounded sm:rounded-[8px]  "}/>
                                                        </div>

                                                    )
                                                })}


                                            </div>

                                        </div>
                                        <div className={"flex-1"}>
                                            <div className={"flex h-full justify-between flex-col gap-[10px] "}>
                                                <CopyToClipboard text={projectData?.["projectUrl"]}
                                                                 onCopy={() => copyProjectUrl()}>
                                                    <div

                                                        className={"bg-[rgba(0,0,0,0.4)] bg-[rgba(0,0,0,0.4)] hover:border-2  border-0 hover:border-[rgba(255,255,255,0.8)] transition-all box-border cursor-pointer flex justify-center items-center w-[44px] h-[44px]  rounded"}>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M14 4.83337C14.6454 4.96719 15.1323 5.19053 15.5237 5.56328C16.5 6.49322 16.5 7.98996 16.5 10.9834C16.5 13.9768 16.5 15.4735 15.5237 16.4035C14.5474 17.3334 12.976 17.3334 9.83333 17.3334H8.16667C5.02397 17.3334 3.45262 17.3334 2.47631 16.4035C1.5 15.4735 1.5 13.9768 1.5 10.9834C1.5 7.98996 1.5 6.49322 2.47631 5.56328C2.86765 5.19053 3.35458 4.96719 4 4.83337"
                                                                stroke="#ffffff" strokeWidth="1.25"
                                                                strokeLinecap="round"/>
                                                            <path
                                                                d="M9.02108 0.667062L9 10.6666M9.02108 0.667062C8.88558 0.661454 8.74925 0.709888 8.62775 0.812396C7.87242 1.45001 6.5 3.10735 6.5 3.10735M9.02108 0.667062C9.14258 0.672104 9.2635 0.720596 9.37233 0.812529C10.1276 1.45027 11.5 3.10735 11.5 3.10735"
                                                                stroke="#ffffff" strokeWidth="1.25" strokeLinecap="round"
                                                                strokeLinejoin="round"/>
                                                        </svg>

                                                    </div>

                                                </CopyToClipboard>

                                                <div
                                                    className={"flex flex-col cursor-pointer gap-[10px]"}>
                                                    <div onClick={backwardImage}
                                                         className={"bg-[rgba(0,0,0,0.4)] hover:border-2  border-0 hover:border-[rgba(255,255,255,0.8)] transition-all  box-border self-end flex justify-center items-center w-[44px] h-[44px]  rounded"}>
                                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M6 1C6 1 1.00001 4.68242 1 6C0.999992 7.31767 6 11 6 11"
                                                                stroke="#ffffff" strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"/>
                                                        </svg>
                                                    </div>
                                                    <div onClick={forwardImage}
                                                         className={"bg-[rgba(0,0,0,0.4)] hover:border-2  border-0 hover:border-[rgba(255,255,255,0.8)] transition-all  box-border   self-end rotate-180 flex justify-center items-center w-[44px] h-[44px]  rounded"}>
                                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M6 1C6 1 1.00001 4.68242 1 6C0.999992 7.31767 6 11 6 11"
                                                                stroke="#ffffff" strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"/>
                                                        </svg>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div
                                        className={"grid mt-[20px] sm:mt-[24px] w-full grid-cols-5 gap-[5px] sm:gap-[10px]"}>
                                        {projectData?.["projectImages"].map((imageUrl, key) => {
                                            const currentImageIndex = changeImage == 0 ? changeImage : parseInt(changeImage.toString().slice(1, 4)[0])

                                            return (
                                                <div key={key}
                                                     style={{borderColor: key == currentImageIndex ? "white" : undefined}}
                                                     onClick={() => setChangeImage(() => key * (-100))}
                                                     className={" hover:border-[rgba(255,255,255,0.5)] border-transparent  rounded-[12px] transition-all duration-[500]  border-[3px] cursor-pointer"}>
                                                    <Image quality={50} width={100} height={100} src={imageUrl?.url}
                                                           alt={projectData?.projectName + " image"}
                                                           priority={true}
                                                           className={"sm:rounded-[8px] max-h-[80px] w-full min-h-[80px] h-full rounded   object-cover"}/>
                                                </div>
                                            )
                                        })}


                                    </div>
                                </div>
                                <div>
                                    <div className={"hidden md:flex justify-end cursor-pointer"}>
                                        <svg className={"w-[40px] h-[40px]"} onClick={() => closePage()}
                                             viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier"><title>cancel</title>
                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none"
                                                   fillRule="evenodd">
                                                    <g id="work-case" fill="#ffffff"
                                                       transform="translate(91.520000, 91.520000)">
                                                        <polygon id="Close"
                                                                 points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"></polygon>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <br/>
                                    <h3 className={" text-[23px] leading-[120%] sm:text-[36px] font-[600] text-white tracking-[-0.005em]"}>
                                        {projectData?.["projectName"]}
                                    </h3>
                                    <div className={"border-t-[0.5px] border-[#A3A3A3] mt-[28px] border-dashed"}>

                                    </div>
                                    <p className={"mt-[24px] sm:mt-[28px]"}>
                            <span
                                className={"font-raleway font-[700] text-[18px] sm:text-[20px] leading-[120%] text-[#ffffff]"}>
                                Description:
                            </span> <br/>
                                        <span style={{color: "#acacac"}}
                                              className={"font-clashGreek text-[14px] sm:text-[16px] mt-[10px] block leading-[130%]"}>
                               {projectData?.["projectDescription"]}
                            </span>
                                    </p>
                                    <div className={"mt-[32px] sm:mt-[40px]"}>
                                        <p className={"font-clashGreek font-[500] text-[18px] sm:text-[20px] leading-[120%] text-[#ffffff]"}><span
                                            className={"font-[400]"}>Type:</span> {"  "} {projectData?.["projectType"]}</p>
                                    </div>
                                    <div className={"mt-[18px]"}>
                                        <div className={"flex flex-wrap gap-[10px]"}>
                                            {projectData?.["projectTechStack"].map((data, key) => {
                                                return (
                                                    <div key={key}
                                                         className={"bg-white cursor-pointer rounded-[8px]  px-[20px] h-[40px] flex items-center justify-center"}>
                                                        <p className={"leading-tight sm:text-[16px] text-[15px]"}>
                                                            {data}
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div
                                        className={"mt-[40px] sm:mt-[56px] grid grid-cols-2 gap-[20px] justify-between"}>
                                        <Link target={"_blank"} href={projectData?.["projectGitHubLink"]}
                                              className={"bg-[#2B00C5]  hover:bg-[rgba(13,0,197,0.8)] transition-all active:bg-[rgba(13,0,197,0.5)] rounded-[8px] w-full h-[56px] sm:h-[58px] flex items-center justify-center "}>
                                <span
                                    className={"text-[18px] sm:text-[20px] font-[500] leading-[120%] text-white font-clashGreek"}>
                                    GitHub Repo
                                </span>
                                        </Link>
                                        <Link target={"_blank"} download={projectData?.["projectType"] != "Website"}
                                              href={projectData?.["projectUrl"]}
                                              className={" flex transition-all items-center w-full justify-center rounded-[8px] h-[56px] sm:h-[58px] bg-white hover:bg-[rgba(255,255,255,0.8)] active:bg-[rgba(255,255,255,0.7)]"}>
                                <span
                                    className={"font-clashGreek  text-[18px]  font-[500] sm:text-[20px] leading-[120%] text-[#333333]"}>
                                    {projectData?.["projectType"] != "Website" ? "Download" : "Visit Website"}
                                </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : "loading"
                }
            </motion.article>
        </>
    );
}

export default ProjectDetails;