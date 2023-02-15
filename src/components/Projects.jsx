import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import ProjectCard from "./ProjectCard"
import data from "../data";





export default function Projects(){

    const cards = data.map(item => {
        return(
            <ProjectCard
                key={item.id}
                item={item}
            />
            )
    })
    const swip = cards.map(card => <SwiperSlide> {card} </SwiperSlide>)

    return(
        <section className="projects">
            <h2>Here are some of works </h2>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {swip}
            </Swiper>



        </section>
        )
}