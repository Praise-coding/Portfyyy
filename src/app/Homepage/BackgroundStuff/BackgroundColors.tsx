import React from "react";
import {CageHero, Circle1, Circle2, Circle3, Circle4, Circle5, Circle6, Circle7,} from "./BackgroundStuff";

const GradientBackgrounds = () => {

    return (
        <>
            <div
                className="opacity-[30%] z-[-1] absolute top-0 left-0 w-full"
            >
                <CageHero />
                <Circle1 />
                <Circle2 />
                <Circle3 />
                <Circle4 />
                <Circle5 />
                <Circle6 />
                <Circle7 />
            </div>

            <div

                className="opacity-[30%] w-full h-fit left-0 z-[-1] absolute top-[5500px] sm:top-[3500px]"
            >

                    <div
                    >
                        <Circle4 />
                        <Circle5 />
                        <Circle6 />
                        <Circle7 />
                    </div>

            </div>

            {/* Lazy-loaded section #2 (only for small screens) */}
            <div
                className="opacity-[40%] sm:hidden block w-full h-fit z-[-1] absolute top-[6500px] sm:top-[3500px]"
            >

                    <div
                    >
                        <Circle4 />
                        <Circle5 />
                        <Circle6 />
                        <Circle7 />
                    </div>

            </div>
        </>
    );
};

export default React.memo(GradientBackgrounds);
