import Link from "next/link";
import ComesInGoesOutUnderline from "@/components/fancy/text/underline-comes-in-goes-out"

const Header = () => {
    return (
        <div className=" py-4 border-b-2 border-b-black dark:border-b-white w-full  flex items-center justify-between">
            <div className="flex flex-col justify-end">
                <span className="text-sm instrumentSerif">Full-Stack Developer and Designer</span>
                <span className="text-5xl instrumentSerif font-bold one-word-per-line">Boris Mwanga</span>
                
            </div>
            <div className="flex items-start justify-between flex-col instrumentSerif font-light text-sm bottom-0">
                <Link className="hover:text-[#0015ff] dark:hover:text-[#ffea00]" target="_blank" href="https://www.linkedin.com/in/boris-mwanga-74282062/">
                    <ComesInGoesOutUnderline label="Linkedin" direction="left"/>
                </Link>
                <Link className="hover:text-[#0015ff] dark:hover:text-[#ffea00]" target="_blank" href="https://bsky.app/profile/borismwanga.com">
                    <ComesInGoesOutUnderline label="Bluesky" direction="right" />
                </Link>
                <Link className="hover:text-[#0015ff] dark:hover:text-[#ffea00]" target="_blank" href="mailto:borismwanga@gmail.com">
                    <ComesInGoesOutUnderline label="Email" direction="left" />
                </Link>
                <Link className="hover:text-[#0015ff] dark:hover:text-[#ffea00]" target="_blank" href="https://github.com/borismwanga">
                    <ComesInGoesOutUnderline label="Github" direction="right" />
                </Link>

                </div>
        </div>
    );
}

export default Header;