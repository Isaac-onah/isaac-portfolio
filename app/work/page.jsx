"use client";

import { easeIn, motion } from "framer-motion";
import React, { useState } from "react";

import {Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css";

import {BsArrowUpRight, BsGithub, BsGooglePlay } from "react-icons/bs";

import {
Tooltip,
TooltipContent,
TooltipProvider,
TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";
import { FaAppStore, FaAppStoreIos } from "react-icons/fa";

const projects = [
    {
        num: "01",
        category: "Mobile",
        title: "Transport Plus",
        description:
        "A mobile application designed for drivers to efficiently manage their trips by picking up and dropping off passengers based on company-assigned routes. The app provides seamless navigation, trip details, and real-time data integration.",
        stack: [
            { name: "Flutter" }, 
            { name: "GetX" }, 
            { name: "FireBase" }, 
            { name: "REST APIs" }],
        image: "/assets/work/thumb1.png",
        live:"https://play.google.com/store/apps/details?id=io.transportplus.driver&hl=en",
        github: ""  , 
        playstore:"https://play.google.com/store/apps/details?id=io.transportplus.driver&hl=en",
        applestore:"https://apps.apple.com/mt/app/transport-plus-driver/id6742455882",
    },
    {
        num: "02",
        category: "Mobile",
        title: "Mobile Blog",
        description:
        "A mobile blog app built with Flutter, utilizing BLoC for state management, Hive for local storage, and Supabase as the backend. Users can read, create, and manage blog posts. The app offers smooth offline support with local storage through Hive and real-time synchronization with Supabase. GetX is used for efficient state management across the app",
        stack: [
            { name: "Flutter" }, 
            { name: "Bloc" }, 
            { name: "Hive" },
            { name: "GetIt" }, 
            { name: "SupaBase" }
        ], 
        image: "/assets/work/thumb2.png",
        live:"",
        github: ""  , 
        playstore:"https://play.google.com/store/apps/details?id=io.transportplus.driver&hl=en",
        applestore:"",
    },
    {
        num: "03",
        category: "Mobile",
        title: "Inventory",
        description:
        "A Flutter-based inventory app that allows users to sign in with Google, add items via manual input or barcode scan, track sales, generate receipts, view transaction history, and print PDFs. Built with Provider for state management and Sqflite for local storage.",
        stack: [
            { name: "Flutter" }, 
            { name: "Provider" }, 
            { name: "Sqflite" }
        ], 
        image: "/assets/work/thumb3.png",
        live:"",
        github: "https://github.com/Isaac-onah/Inventorymgtsys"  , 
        playstore:"https://play.google.com/store/apps/details?id=io.transportplus.driver&hl=en",
        applestore:"", 
    },
     {
        num: "04",
        category: "Mobile",
        title: "Ticket Booking app",
        description:
        "This Ticket Booking app, built using Jetpack Compose, Kotlin, Firebase, and MVVM Architecture, offers a seamless user experience for booking flights. Key features include flight listings, search functionality, detailed flight information, a splash screen, and seat selection. This project showcases my skills in Android development, UI design, and integrating Firebase services.",
        stack: [
            { name: "Kotlin" }, 
            { name: "JetPack Compose" }, 
            { name: "Firebase" }], 
        image: "/assets/work/thumb1.png",
        live:"",
        github: ""  , 
        playstore:"https://play.google.com/store/apps/details?id=io.transportplus.driver&hl=en",
        applestore:"",  
    }
];

const Work = () => {
    const [project, setProject] = useState (projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };
    return(
        <section  className="min-h-[90vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
                className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
                    
                    <div className="container mx-auto">
                        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                                <div className="flex flex-col gap-[30px] h-[50%]">
                                    {/* outline num */}
                                    <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                    {project.num}
                                    </div>
                                    <div className="flex flex-col justify-end h-full gap-4">
                                        <h3 className="text-[35px] font-bold leading-none text-white group-hover: text-accent transition-all duration-500 capitalize"> 
                                            {project.title}
                                        </h3>
                                        <h4 className="text-[18px] font-bold leading-none text-white group-hover: text-accent transition-all duration-500 capitalize"> 
                                            - {project.category} project
                                        </h4>
                                    </div>
                                    {/* project description */}
                                    <p className="text-white/60">{project.description}</p>
                                    {/* stack */}
                                    <ul className="flex gap-4">
                                        {project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* remove the last comma */ }
                                            {index !== project.stack. Length - 1 && ","}
                                            </li>
                                            );
                                        })}
                                    </ul>
                                    <div className="border border-white/20"></div>
                                    {/* buttons */}
                                    <div className="flex items-center gap-4">
                                    {project.live && (
                                        <Link href={project.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover: text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        </Link>
                                    )}
                                    
                                    {project.github && (
                                        <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover: text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        </Link>
                                    )}

                                    {project.playstore && (
                                        <Link href={project.playstore}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGooglePlay className="text-white text-3xl group-hover: text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Google Play Store</p>
                                            </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        </Link>
                                    )}

                                    {project.applestore && (
                                        <Link href={project.applestore}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <FaAppStore className="text-white text-3xl group-hover: text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Apple App Store</p>
                                            </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        </Link>
                                    )}
                                    </div>

                                </div>
                            </div>
                            <div className="w-full xl:w-[50%]">
                                <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                                    {projects.map((project, index)=>{
                                        return <SwiperSlide key={index}>
                                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                                {/* overlay */}
                                                <div className="absolute top-0 bottom-0 w full h-full bg-black/10 z-10"></div>
                                                {/* image */}
                                                <div className="relative w-full h-full">
                                                <Image
                                                src={project.image}
                                                className="object-cover"
                                                fill
                                                alt=""
                                                />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    })}

                                        <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
   
};

export default Work;