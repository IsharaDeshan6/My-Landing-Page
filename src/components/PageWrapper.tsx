
"use client"

import AOS from "aos";
import "aos/dist/aos.css"
import {useEffect} from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {

    useEffect(()=> {
        AOS.init({
            duration: 800,
            delay: 50,
            disable: "mobile",
            once: true,



        });
    },[]);
    return <main>{children}</main>
}

export default PageWrapper;