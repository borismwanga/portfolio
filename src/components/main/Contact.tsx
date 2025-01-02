import Link from "next/link"

import CenterUnderline from "@/components/fancy/text/underline-center"
import ComesInGoesOutUnderline from "@/components/fancy/text/underline-comes-in-goes-out"
import GoesOutComesInUnderline from "@/components/fancy/text/underline-goes-out-comes-in"

export default function Contact() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-appelGarmondLight">
      <div className="flex flex-row font-overusedGrotesk items-start  h-full py-36 uppercase space-x-8 text-xl md:text-2xl lg:text-3xl">
        <div>Contact</div>
        <ul className="flex flex-col space-y-1 h-full">
          <Link className="hover:text-[#0015ff] dark:hover:text-[#ffea00]" href="https://www.linkedin.com/in/boris-mwanga-74282062/ " target="_blank">
            <CenterUnderline label="LINKEDIN" />
          </Link>
          <Link className="hover:text-[#0015ff] dark:hover:text-[#ffea00]" href="https://bsky.app/profile/brysbrozers.bsky.social" target="_blank">
            <ComesInGoesOutUnderline label="BLUESKY" direction="right" />
          </Link>
          <Link className="hover:text-[#0015ff] dark:hover:text-[#ffea00]" href="htps://x.com/borismwanga" target="_blank">
            <ComesInGoesOutUnderline label="X (TWITTER)" direction="left" />
          </Link>

          <div className="pt-12">
            <ul className="flex flex-col space-y-1 h-full">
              <Link className="hover:text-[#0015ff] dark:hover:text-[#ffea00]" href="mailto:borismwanga@gmail.com" target="_blank">
                <GoesOutComesInUnderline
                  label="BORISMWANGA@GMAIL.COM"
                  direction="left"
                />
              </Link>
              {/* <Link className="hover:text-[#0015ff] dark:hover:text-[#ffea00]" href="#">
                <GoesOutComesInUnderline
                  label="HELLO@FANCY.DEV"
                  direction="right"
                />
              </Link> */}
            </ul>
          </div>
        </ul>
      </div>
    </div>
  )
}
