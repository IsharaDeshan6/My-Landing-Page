import BreakLine from "@/common/components/BreakLine";
import ButtonLink from "./ButtonLink";
import ChitChat from "./ChitChat";
import Hero from "./Hero";
import Socials from "./Socials";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "@/common/components/Footer";


const Home = () =>{
    return(
        <div  className="pb-6 mb-2 space-y-6 " data-aos="fade-down">
            <Hero />
            <Socials />
            <ButtonLink />
            <ChitChat />
            <BreakLine/>
            <Services />
            <BreakLine/>
            <Contact />
            <BreakLine/>
            <Footer />
            

        </div>
    )
}

export default Home;