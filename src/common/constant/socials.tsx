import { SocialItemProps } from "../types/socials";
import {BiAt as TheardsIcon} from "react-icons/bi";
import {
    BsGithub as GithubIcon,
    BsInstagram as InstagramIcon,
    BsLinkedin as LinkedinIcon,
    BsRssFill as BlogIcon,
    BsTwitter  as TwitterIcon,
}from  "react-icons/bs"

const iconSize = 20;

export const SOCIAL_MEDIA: SocialItemProps[] = [
    {
        title: "Github",
        href:"https://github.com/",
        icon:<GithubIcon size={iconSize} />,
        isShow: true,
        isExternal: true,
        eventName: "Social: Github",
        className: "hover:text-black",
    },
    {
        title: "Instagram",
        href:"https://www.instagram.com/_ishara_deshan_/",
        icon:<InstagramIcon size={iconSize} />,
        isShow: true,
        isExternal: true,
        eventName: "Social: Instagram",
        className: "hover:text-black",
    },
    {
        title: "LinkedIn",
        href:"https://www.linkedin.com/in/ishara-deshan-2ba682274/",
        icon:<LinkedinIcon size={iconSize} />,
        isShow: true,
        isExternal: true,
        eventName: "Social: LinkedIn",
        className: "hover:text-black",
    },
    {
        title: "Twitter",
        href:"https://twitter.com/F2K10082657",
        icon:<TwitterIcon size={iconSize} />,
        isShow: true,
        isExternal: true,
        eventName: "Social: Twitter",
        className: "hover:text-black",
    },
]