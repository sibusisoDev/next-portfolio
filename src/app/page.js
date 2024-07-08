import Image from "next/image";
import {Button} from "@/components/ui/button";
import About from "@/app/about/page";
import Career from "@/app/career/page";
import Projects from "@/app/projects/page";
import Contact from "@/app/contact/page";


export default function Home() {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full overflow-hidden pb-5 pt-[80px] lg:pb-[100px] lg:pt[180px]" id="hero">
            <div className="flex flex-col xl:flex-row items-center justify-between pb-[80px] pt-[80px]">
                <div className="text-center xl:text-left order-2 xl:order-none">
                    <h1 className="max-w-2xl font-bold mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">Coding
                        my future, one line at a time.</h1>
                    <p className="max-w-xl mb-4 text-gray-900 lg:mb-8 md:text-lg lg:text-xl"> I'm
                        a highly motivated developer with a passion for turning ideas into reality.
                        Eager to learn and constantly explore new technologies,
                        I bring a blend of creativity and technical expertise to every project. Let's code
                        something amazing together! </p>
                    <Button type="button" href="https://github.com/sibusisoDev"
                       className="text-white bg-black font-bold md:hover:text-blue-700 rounded-full text-sm px-4 py-2 text-center transition duration-500 ease-in-out">Visit
                        My GitHub
                    </Button>
                </div>
                <div className="mb-8 xl:mb-0">
                    <div className="w-full h-full relative">
                        <div className="w-[275px] h-[275px] xl:w-[425px] xl:h-[425px]">
                            <Image
                                src="/profile-picture.jpg"
                                quality={75}
                                fill
                                alt="Profile Picture"
                                className="rounded-full border-b-black object-cover"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <About/>
        <Career/>
        <Projects/>
        <Contact/>
    </section>
  );
}
