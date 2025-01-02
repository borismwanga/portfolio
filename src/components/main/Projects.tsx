// Projects.tsx
"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import data from "@/data"
import GoesOutComesInUnderline from "@/components/fancy/text/underline-goes-out-comes-in"


/* import ScrambleHover from "@/components/fancy/text/scramble-hover"
 */import useScreenSize from "@/hooks/use-screen-size"
import DragElements from "@/components/fancy/blocks/drag-elements"



const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const Projects: React.FC = () => {
    const screenSize = useScreenSize()
    const [activeProject, setActiveProject] = useState<number | null>(null)

    return (
        <div className="w-full h-full relative overflow-hidden">
            <h1 className="absolute font-appelGarmond text-xl md:text-4xl  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-muted-foreground w-full">
                all my<span className="font-bold text-foreground"> Projects. </span>
            </h1>
            
            <DragElements dragMomentum={false} className="p-40">
                {data.map((project) => {
                    const rotation = randomInt(-12, 12)
                    const width = screenSize.lessThan(`md`) ? randomInt(90, 120) : randomInt(120, 150)
                    const height = screenSize.lessThan(`md`) ? randomInt(120, 140) : randomInt(150, 180)

                    return (
                        <div
                            key={project.id}
                            className="relative"
                            onMouseEnter={() => setActiveProject(project.id)}
                            /* onMouseLeave={() => setActiveProject(null)} */
                        >
                            <div
                                className="flex items-start justify-center bg-white shadow-2xl p-4 hover:bg-[#0015ff] "
                                style={{
                                    transform: `rotate(${rotation}deg)`,
                                    width: `${width}px`,
                                    height: `${height}px`,
                                }}
                            >
                                <div
                                    className="relative overflow-hidden"
                                    style={{
                                        width: `${width - 4}px`,
                                        height: `${height - 30}px`,
                                    }}
                                >
                                    <Image
                                        src={project.image}
                                        fill
                                        alt={project.title}
                                        className="object-cover"
                                        draggable={false}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </DragElements>

            {activeProject && (
                <div className="fixed right-left text-center md:text-4xl text-sm font-appelGarmondLight top-1/2  -translate-y-1/2 md:w-1/3 w-1/2  md:backdrop-filter 
          backdrop-blur-sm bg-opacity-10  ">
                    {data.find(p => p.id === activeProject) && (
                        <div className="  ">
                            <h2 className="font-bold">{data.find(p => p.id === activeProject)?.title}</h2>
                            <p className="text-center  ">{data.find(p => p.id === activeProject)?.description}</p>
                            <div className="flex justify-center gap-4">
                                <Link href={data.find(p => p.id === activeProject)?.link || '#'} 
                                      className="text-blue-600 hover:text-blue-800" 
                                      target="_blank">
                                    <GoesOutComesInUnderline label="Visit" direction="left" />
                                </Link>
                                <Link href={data.find(p => p.id === activeProject)?.github || '#'} 
                                      className="text-blue-600 hover:text-blue-800 " 
                                      target="_blank">
                                    <GoesOutComesInUnderline label="Github" direction="right" />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Projects