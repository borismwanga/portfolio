import Marquee from "react-fast-marquee";

export default function Footer() {
    return(
        <footer>
            <Marquee gradient={false} speed={50}>
                I can be a React component, multiple React components, or just some text.
                I can be a React component, multiple React components, or just some text.
                I can be a React component, multiple React components, or just some text.
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </footer>
        )
}