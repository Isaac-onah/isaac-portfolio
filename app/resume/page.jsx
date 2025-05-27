"use client"

import { FaHtml5, FaCss3, FaJs, FaAndroid, FaJava, FaSwift, FaGit, } from "react-icons/fa";
import { SiFirebase, SiFlutter, SiKotlin, SiNextdotjs, SiSupabase, SiTailwindcss, } from "react-icons/si";


const about = {
    title: "About me",
    description: "A passionate Full Stack Developer with 5+ years of experience in building high-performance applications. I specialize in creating seamless, scalable, and efficient software solutions while staying up-to-date with the latest technologies.",
    info:[
        {
            fieldName:"Name",
            fieldValue:"Isaac Onah"
        },
        {
            fieldName:"Phone",
            fieldValue:"(+356) 9948 6016"
        },
        {
            fieldName:"Email",
            fieldValue:"isaaconah6@gmail.com"
        },
        {
            fieldName:"Experience",
            fieldValue:"3+ Years"
        },
        {
            fieldName:"Languages",
            fieldValue:"English, Maltese"
        },
    ]
};

const experience = {
    icon:'/assets/resume/badge.svg',
    title:'My experience',
    description:"I have worked in dynamic environments, developing web and mobile applications with modern frameworks. Currently, I am a Full Stack Developer at Tech Solutions Inc., focusing on building robust and user-friendly applications.",
    items:[
        {
            company:"EEDC | Enugu Electricity Distribution Company",
            position:"Senior Mobile Engineer",
            duration:"2022 - 2024"
        },
    ]
}

const education = {
    icon:'/assets/resume/cap.svg',
    title:'My education',
    description:"With a strong foundation in Computer Science and Applied Mathematics, I have gained expertise in software development from institutions like Wolverhampton University and Federal University of Technology Owerri.",
    items:[
        {
            institution :"WolverHampton University",
            degree:"Computer Science",
            duration:"2022 - 2025"
        },
        {
            institution :"Federal University Of Technology Owerri",
            degree:"Applied Mathematics",
            duration:"2011 - 2016"
        },
    ]
}

const skills = {
    title:'My skills',
    description:"Proficient in Flutter, React, Node.js, Supabase, and SQL, I have a strong command over frontend, backend, and mobile development. Always eager to learn and adapt to emerging technologies.",
    skillList:[
        {
            icon :<FaHtml5 />,
            name:"Html",
            duration:"2018 - 2025"
        }, 
        {
            icon :<FaCss3 />,
            name:"Css",
            duration:"2018 - 2025"
        },
        {
            icon: <FaJs />,
            name:"JavaScript",
            duration:"2022 - 2025"
        },
       {
        icon:<SiFlutter />,
            name: "Flutter",
            duration: "2020 - Present"
        },
        {
            icon: <SiTailwindcss />,
             name: "Tailwind",
             duration: "2019 - Present"
         },
         {
            icon: <SiNextdotjs />,
              name: "NextJs",
              duration: "2019 - Present"
          },
        {
            icon:<FaAndroid />,
            name: "Android",
            duration: "2018 - Present"
        },
        {
            icon: <FaJava />,
            name: "Java",
            duration: "2020 - Present"
        },
        {
            icon:<SiKotlin />,
            name: "Kotlin",
            duration: "2020 - Present"
        },
        {
            icon: <FaSwift />,
            name: "Swift",
            duration: "2020 - Present"
        },
        {
            icon:<FaGit />,
            name: "GitHub",
            duration: "2017 - Present"
        },
        {
            icon:<SiFirebase />,
            name: "Firebase",
            duration: "2019 - Present"
        },
        {
            icon: <SiSupabase />,
            name: "Supabase",
            duration: "2022 - Present"
        },
    
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto pt-[190px]">
                <Tabs
                defaultValue="experience"
                className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger> 
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left"> 
                                <h3 className="text-4xl font-bold">{experience.title}</h3> 
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> 
                                {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]"> 
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 eounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span> 
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                           </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left"> 
                                <h3 className="text-4xl font-bold">{education.title}</h3> 
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> 
                                {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]"> 
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 eounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span> 
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                           </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="Flex flex-col gap-[30px] text-center xl:text-left"> 
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {skills.description}
                                </p>
                                </div>
                                <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 xl:gap-[20px]">
                                {skills.skillList.map((skill, index) => { 
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                            <TooltipTrigger className="w-full h-[90px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                            </TooltipContent>
                                            </Tooltip>
                                            </TooltipProvider>
                                        </li>;
                                        })} 
                                </ul>

                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> 
                                {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return ( <li
                                        key={index}
                                        className="flex items-center justify-center xl:justify-start gap-4">
                                        <span className="text-white/60">{item.fieldName}</span> 
                                        <span className="text-xl">{item.fieldValue}</span>
                                        </li>);
                                    })}
                                </ul>
                            </div>

                        </TabsContent>
                    </div>
                </Tabs>
            </div>

        </motion.div>
    );
}

export default Resume