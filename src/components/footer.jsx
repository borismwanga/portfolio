import Marquee from "react-fast-marquee";

export default function Footer() {
    return(
        <footer>
            <Marquee gradient={false} speed={50} pauseOnHover={true}>
                <span className="marquee">
                    Code is my art, and I take pride in crafting elegant solutions to complex problems -
                    sic parvis magna -
                    I am dedicated to writing code that is not only functional, but also maintainable, scalable, and well-documented -
                    Code is my art, and I take pride in crafting elegant solutions to complex problems -
                    sic parvis magna -
                    I am dedicated to writing code that is not only functional, but also maintainable, scalable, and well-documented -
                    Code is my art, and I take pride in crafting elegant solutions to complex problems -
                    sic parvis magna -
                    I am dedicated to writing code that is not only functional, but also maintainable, scalable, and well-documented -
                </span>
            </Marquee>
        </footer>
        )
}