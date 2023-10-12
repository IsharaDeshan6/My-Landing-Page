"use client"

import Image from "@/common/components/Image";
import VerifiedIcon from "@/common/components/VerifiedIcon";


const Hero = () => {
    return (
        <header className="pt-5 space-y-4 flex flex-col items-center justify-center">
            <div
            className="p-2 rounded-full border-2 "
            data-aos="flip-left"
            data-aos-duration="1000"
            >
                <Image
                    src="/images/latestme.jpeg"
                    alt="Bill Nyberg"
                    width={100}
                    height={100}
                    rounded="rounded-full"
                    className="lg:hover:scale-105"
                   
                />
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
                <div className="flex  gap-2 items-center text-center">
                    <h1 className="text-2xl font-medium">
                        Ishara Deshan
                    </h1>
                    <VerifiedIcon />
                    </div>
                    <p className="  text-center text-[15px] md:text-base mx-1 leading-relaxed"> Skilled web developer with a knock for transforming desins into dynamic and user-freindly websites.</p>
                
            </div>

        </header>

    )
}
export default Hero;