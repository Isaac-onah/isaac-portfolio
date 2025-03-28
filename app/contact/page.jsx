"use client";

import {Button } from "@/components/ui/button"; 
import {Input } from "@/components/ui/input";
import {Textarea } from "@/components/ui/textarea";

import {motion} from "framer-motion";

import {Select,
SelectContent,
SelectGroup,
SelectItem,
SelectLabel,
SelectTrigger,
SelectValue,}
from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+356) 9948 6016",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "isaaconah6@gmail.com",},
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "L-Iklin, Iklin, Malta.",
    },
];

const Contact = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"> 
            <div className="container mx-auto">
            <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }} 
                    className="py-6"
                    >

                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row gap-[30px]">
                        {/* form */}
                        <div className="xl:h-[54%] order-2 xl:order-none">
                            <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"> 
                                <h3 className="text-4xl text-accent">Let's work together</h3>
                                <p className="text-white/60">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                                    nihil sapiente pariatur id totam.
                                </p>
                            </div>
                        </div>
                            {/* info */}
                        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                            <ul className="flex flex-col gap-10">
                                {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div> 
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p> 
                                            <h3 className="text-xl">{item.description}</h3> 
                                        </div>
                                    </li>
                                );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                    
            </motion.div>
        </div>
        </section>
    );
}

export default Contact;