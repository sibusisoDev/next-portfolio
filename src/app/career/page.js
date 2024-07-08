'use client'
import {FaCss3, FaHtml5, FaReact} from "react-icons/fa";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {DiJava } from "react-icons/di";
import {IoLogoJavascript} from "react-icons/io5";
import {SiCsharp} from "react-icons/si";


const skills = {
    // title : "My Skills",
    description : "I'm passionate about building the future of the web. " +
        "I'm proficient in the core technologies like HTML, CSS, and JavaScript, and I'm constantly exploring new tools and frameworks " +
        "(React, NextJS and TailwindCSS) to stay ahead of the curve. I believe in user-centered design and strive to create accessible and engaging web experiences.",
    skillSet : [
        {
            id : 1,
            icon : <FaHtml5/>,
            name : "HTML 5"
        },
        {
            id : 2,
            icon : <FaCss3/>,
            name : "CSS 3"
        },
        {
            id : 3,
            icon : <IoLogoJavascript/>,
            name : "JavaScript"
        },
        {
            id : 4,
            icon : <FaReact/>,
            name : "React"
        },
        {
            id : 5,
            icon : <RiNextjsFill/>,
            name : "NextJS"
        },
        {
            id : 6,
            icon : <RiTailwindCssFill/>,
            name : "TailwindCSS"
        },
        {
            id : 7,
            icon : <DiJava/>,
            name : "Java"
        },
        {
            id : 8,
            icon : <SiCsharp/>,
            name : "C#"
        },
    ]
}

export default function Career() {
    return <section className="bg-white mx-auto max-w-screen-xl py-12 lg:py-16">
        <h1 className="font-bold text-4xl px-4 py-4 mx-auto md:text-6xl tracking-tight leading-none">My Career</h1>
        <div className="py-2 px-4 lg:py-16">
            <ol className="relative border-s border-gray-950">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-950 rounded-full mt-1.5 -start-1.5 border border-black"></div>
                    <time
                        className="mb-1 text-sm font-serif leading-none">November
                        2019
                    </time>
                    <h2 className="text-xl text-gray-900">Diploma in Information Technology</h2>
                    <p className="mb-4 text-gray-900 lg:mb-8 md:text-lg lg:text-xl"> I
                        embarked on my journey into the world of technology by enrolling in applied computer science program at the Vaal University of Technology. With a focus on software development and
                        business analysis, I honed my skills in translating business needs into functional
                        software solutions.
                        Throughout my studies, I delved into programming languages like Java and Visual
                        Basic,
                        gaining a strong foundation for building and analyzing software systems.
                    </p>
                </li>
                <li className="mb-10 ms-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-950 rounded-full mt-1.5 -start-1.5 border border-black"></div>
                    <time
                        className="mb-1 text-sm font-serif leading-none">March
                        2021
                    </time>
                    <h2 className="text-xl text-gray-900">Software Engineering Intern</h2>
                    <p className="text-gray-900 lg:mb-8 md:text-lg lg:text-xl">My
                        career in
                        software engineering began with a junior role at an HR and payroll company, where I
                        worked in a
                        payroll software for large businesses. Focusing on backend development, I dove into
                        C# as my primary language. Utilizing tools like Postman, I tackled urgent client
                        tickets efficiently.
                        My problem-solving skills shone as I crafted SQL scripts to address issues and
                        actively participated in the software development lifecycle during each sprint,
                        contributing to the company's HR and payroll solutions.</p>
                </li>
                <li className="mb-10 ms-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-950 rounded-full mt-1.5 -start-1.5 border border-black"></div>
                    <time
                        className="mb-1 text-sm font-serif leading-none">March
                        2022
                    </time>
                    <h2 className="text-xl text-gray-900">Customer
                        Consultant</h2>
                    <p className="text-gray-900 lg:mb-8 md:text-lg lg:text-xl">After
                        solidifying
                        my technical knowledge through a software engineering internship,
                        I transitioned into roles as a consultant. This experience proved invaluable, as it
                        thrust me into the heart of client communication.
                        I honed my ability to liaise directly with clients, actively listening and asking
                        insightful questions to fully grasp their needs and translate them into actionable
                        development goals.
                        This client-facing experience is a major asset for me as an aspiring developer. It
                        allows me to bridge the gap between technical expertise and real-world business
                        requirements, ensuring the software I build is not just functional, but truly solves
                        the client's problems.</p>
                </li>
                <li className="mb-10 ms-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-950 rounded-full mt-1.5 -start-1.5 border border-black"></div>
                    <time
                        className="mb-1 text-sm font-serif leading-none">December
                        2022 - Current
                    </time>
                    <h2 className="text-xl text-gray-900">Technical Support
                        Analyst</h2>
                    <p className="text-gray-900 lg:mb-8 md:text-lg lg:text-xl">My
                        transition to a
                        Technical Support Engineer role proved invaluable.
                        Daily interaction with customer inquiries fostered a deeper understanding of the
                        technical aspects of software applications.
                        Witnessing issues firsthand not only demystified their inner workings but also
                        equipped me to troubleshoot more effectively.
                        When escalation to development becomes necessary, my background in software
                        development allows me to bridge the gap.
                        I can translate user issues into clear, actionable reports for the development team,
                        pinpointing the root cause and suggesting potential solutions.
                        Additionally, my experience allows me to explain technical concepts to clients in a
                        clear and concise way, avoiding jargon and focusing on solutions that resonate.
                        This not only fosters trust but also provides valuable insights into user needs from
                        the frontline.
                        This firsthand experience with user pain points is an incredible asset for any
                        aspiring developer, as it ensures I'm building software that truly addresses
                        real-world problems.
                    </p>
                </li>
            </ol>
        </div>

        <div className="w-full h-full">
            <div className="pb-4">
                <div className="flex text-center">
                    {/*<h3 className="text-4xl font-bold">{skills.title}</h3>*/}
                    <p className="mb-4 text-center">{skills.description}</p>
                </div>
            </div>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-7">
            {skills.skillSet.map((skill) => (
                <li key={skill.id}>
                    <TooltipProvider delayDuration={200}>
                        <Tooltip>
                            <TooltipTrigger className="w-full h-24 bg-black rounded-xl text-white flex justify-center items-center">
                                <div className="group-hover:text-black transition-all duration-200 text-5xl">{skill.icon}</div>
                            </TooltipTrigger>

                            <TooltipContent>
                                <p>{skill.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </li>
            ))}
        </ul>
    </section>;
}