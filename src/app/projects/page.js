'use client'
import Image from "next/image";
import projectsData from "@/app/api/data";
// import {IoLogoJavascript} from "react-icons/io5";
// import {FaCss3, FaHtml5, FaReact} from "react-icons/fa";
// import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {Button} from "@/components/ui/button";




export default function Projects() {
    return <section className="bg-white mx-auto max-w-screen-xl lg:py-16">
        <h1 className="font-bold text-4xl md:text-6xl px-4 mx-auto tracking-tight leading-none">Projects</h1>
        <div className="py-2 px-4 lg:py-16">
            {projectsData.map((project,index) => (
                <div className="grid items-center md:items-center md:grid-cols-2 md:text-left gap-8 px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12" key={index}>
                    <div className="mr-auto place-self-center lg:col-span-6">
                        <p className="mb-4 md:text-lg lg:text-xl">{project.description}</p>
                    </div>
                    <div className="lg:col-span-6 ml-6">
                        <div className="text-center">
                            <div className="bg-white border border-gray-950 rounded-lg">
                                <a href="/">
                                    <Image className="h-40 object-cover w-full max-w-full border-0 rounded-t-lg" src={project.image} alt={project.image.alt}/>
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 font-semibold text-2xl tracking-tight text-gray-900">{project.title}</h5>
                                    </a>
                                    {/*<div className="mb-4 text-gray-950 flex gap-4 justify-center items-center text-4xl">*/}
                                        {/*{project.map((icons) => (*/}
                                        {/*    <span key={icons.id}>*/}
                                        {/*        {project.techIcons}*/}
                                        {/*    </span>*/}
                                        {/*))}*/}
                                    {/*</div>*/}
                                    <Button type="submit"
                                           className="text-white bg-black font-bold md:hover:text-blue-700 rounded-full text-sm px-4 py-2 text-center transition duration-500 ease-in-out">
                                        Check It Out
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
}