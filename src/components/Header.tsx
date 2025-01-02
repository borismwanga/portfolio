import Link from "next/link";
import ComesInGoesOutUnderline from "@/components/fancy/text/underline-comes-in-goes-out"

const Header = () => {
    return (
        <div className=" py-4 border-b-2 border-b-black dark:border-b-white w-full  flex items-center justify-between">
            <div className="flex flex-col justify-end">
                <span className="text-sm font-appelGarmondLight">Software Engineer and Designer</span>
                <span className="text-5xl font-appelGarmondBold one-word-per-line">Boris Mwanga</span>
                
            </div>
            <div className="flex items-start justify-between flex-col font-appelGarmond text-sm bottom-0">
                <Link className="hover:text-[#0015ff]" target="_blank" href="https://www.linkedin.com/in/boris-mwanga-74282062/">
                    <ComesInGoesOutUnderline label="Linkedin" direction="left"/>
                </Link>
                <Link className="hover:text-[#0015ff]" target="_blank" href="https://bsky.app/profile/brysbrozers.bsky.social">
                    <ComesInGoesOutUnderline label="Bluesky" direction="right" />
                </Link>
                <Link className="hover:text-[#0015ff]" target="_blank" href="mailto:borismwanga@gmail.com">
                    <ComesInGoesOutUnderline label="Email" direction="left" />
                </Link>
                <Link className="hover:text-[#0015ff]" target="_blank" href="https://github.com/borismwanga">
                    <ComesInGoesOutUnderline label="Github" direction="right" />
                </Link>

                </div>
        </div>
    );
}

export default Header;