'use client'
import {TypeAnimation} from "react-type-animation";
import {FaCode } from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";


export default function About() {
    return <section className="bg-white mx-auto max-w-screen-xl lg:py-16">
        <h1 className="font-bold text-4xl py-4 px-4 md:text-6xl tracking-tight leading-none">About Me</h1>
        <div className="py-4 px-4 lg:py-8">
            <div className="p-4 md:p-10 mb-6">
                <h1 className="text-gray-900 text-3xl md:text-5xl mb-2">👋 Welcome!
                    I'm <span className="underline underline-offset-1">Sibusiso</span>, a developer with a
                    passion for <span className="underline underline-offset-1">front-end design and development</span>
                </h1>

                <p className="pt-3 mb-6 text-gray-900 lg:mb-8 md:text-lg lg:text-xl">
                    <TypeAnimation
                        sequence={[
                            'Web Developer', 4000,
                            'ReactJS Developer', 4000,
                            'Software Engineer', 4000,
                            "Front-End Developer", 4000]}
                        cursor={true}
                        // wrapper="span"
                        style={{display: 'inline-block'}}
                        repeat={Infinity}>
                    </TypeAnimation>
                </p>
                {/*max-w-xl mb-4 text-gray-900 lg:mb-8 md:text-lg lg:text-xl*/}
                <p className="mb-4 text-gray-900 lg:mb-8 md:text-lg lg:text-xl text-center">I'm
                    a self-taught web developer with a strong passion
                    for building
                    innovative and user-friendly applications by using some of the best web tools in
                    <span
                        className="underline underline-offset-1"> HTML, CSS, JavaScript, TailwindCSS and React</span>.
                    I'm excited to showcase my projects and skills
                    on this
                    portfolio website.
                </p>
                <p className="mb-4 text-gray-900 lg:mb-8 md:text-lg lg:text-xl text-center">My
                    ultimate goal is to become a well-rounded <span className="underline underline-offset-1">full-stack developer</span>,
                    contributing to innovative and impactful projects that make a positive difference in the
                    digital world.
                    Feel free to explore my portfolio and connect with me on the socials for a chat.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black border border-white rounded-lg p-8 md:p-12 text-center">
                    <label className="bg-white text-black text-sm inline-flex items-center px-2.5 py-1.5 rounded-md mb-2">
                        <CgWebsite className="mr-2"/>
                        Web Design
                    </label>
                    <h2 className="text-white text-3xl mb-2">Crafting beautiful and functional websites</h2>
                    <p className="mb-4 text-white lg:mb-8 md:text-lg lg:text-xl">As
                        a web designer,
                        I get to translate creativity into functional online spaces.
                        I enjoy using the artistic side to craft visually appealing websites, but there's also a
                        problem-solving aspect that I find rewarding.
                        Figuring out how to structure a site for easy navigation and user experience combines my
                        creative spark with a strategic approach,
                        making every project a satisfying puzzle to solve.
                    </p>
                </div>
                <div className="border border-black rounded-lg p-8 md:p-12 text-center">
                    <label
                        className="bg-black text-white text-sm inline-flex items-center px-2.5 py-1.5 rounded-md mb-2">
                        <FaCode className="mr-2"/>
                        Code
                    </label>
                    <h2 className="text-gray-900 text-3xl mb-2">Code and create
                        functionality behind what you see</h2>
                    <p className="font mb-4 text-gray-900 lg:mb-8 md:text-lg lg:text-xl">As
                        a web developer, I get to turn ideas into reality by crafting websites and web applications.
                        I translate designs and functionalities into code, bringing them to life for users to interact with.
                        But the ultimate satisfaction comes from seeing my creation come online, knowing it can
                        be accessed and used by people around the world.
                    </p>
                </div>
            </div>
        </div>
    </section>;
}