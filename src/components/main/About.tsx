"use client"
import React from "react"
import Image from "next/image"

import useScreenSize from "@/hooks/use-screen-size"
import CirclingElements from "@/components/fancy/blocks/circling-elements"

export const exampleImages = [
    "/images/borisimage.png",
    "https://images.unsplash.com/photo-1556962021-9d0303621643?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "/images/image_2.jpg",
    "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1677338354108-223e807fb1bd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1580894906475-403276d3942d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

const About: React.FC = () => {
  const screenSize = useScreenSize()

  return (
    <div className="w-full h-full flex items-center justify-center relative">
  <span
    className={`z-10 text-center text-3xl md:text-4xl instrumentSerif font-thin md:w-1/2 
    absolute md:relative leading-8 mix-blend-difference text-white`}
  >
    Hi there! I am Boris Mwanga, a passionate developer with a love for coding, problem-solving, and 
    creating impactful websites and applications. Beyond my tech journey, I find inspiration in music, 
    football, and the vibrant stories they bring to life. I am always curious and eager to explore new technologies, 
    delve into creative coding, and expand my horizons. Let&apos;s build something amazing together!
  </span>
  <CirclingElements radius={screenSize.lessThan(`md`) ? 80 : 120}>
    {exampleImages.map((url, index) => (
      <div
        key={index}
        className="w-20 h-20 md:w-28 md:h-28 absolute -translate-x-1/2 -translate-y-1/2"
      >
        <Image src={url} fill alt="image" className="object-cover" />
      </div>
    ))}
  </CirclingElements>
</div>

  )
}

export default About
