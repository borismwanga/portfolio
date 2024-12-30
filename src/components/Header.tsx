import Link from "next/link";
import ComesInGoesOutUnderline from "@/components/fancy/text/underline-comes-in-goes-out"

const Header = () => {
    return (
        <div className=" py-4 border-b-2 border-b-black dark:border-b-white w-full  flex items-center justify-between">
            <div className="flex flex-col justify-end">
                <span className="text-sm font-appelGarmondLight">Software Engineer and Designer</span>
                <span className="text-5xl font-appelGarmondBold one-word-per-line">Boris Mwanga</span>
                
            </div>
            <div className="flex items-start justify-end flex-col font-appelGarmondLightItalic text-sm bottom-0">
                <Link className="hover:text-blue-600" target="_blank" href="#">
                    <ComesInGoesOutUnderline label="LINKEDIN" direction="left"/>
                </Link>
                <Link className="hover:text-blue-600" target="_blank" href="#">
                    <ComesInGoesOutUnderline label="BLUESKY" direction="right" />
                </Link>
                <Link className="hover:text-blue-600" target="_blank" href="mailto:borismwanga@gmail.com">
                    <ComesInGoesOutUnderline label="MAIL" direction="left" />
                </Link>
                <Link className="hover:text-blue-600" target="_blank" href="#">
                    <ComesInGoesOutUnderline label="GITHUB" direction="right" />
                </Link>

                </div>
        </div>
    );
}

export default Header;