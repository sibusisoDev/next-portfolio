'use client'
import Link from "next/link";
import DesktopNav from "@/components/NavigationBar/desktopNav/desktopNav";
import MobileNav from "@/components/NavigationBar/mobileNav/mobileNav";
import {Button} from "@/components/ui/button";


export default function NavigationBar() {

    return (
        <header className="bg-white py-6 xl:py-8 fixed w-full z-20 top-0 border-b border-gray-200">
            <div className="container mx-auto flex justify-between items-center">
                {/*<Image src={logo} alt="Sibusiso Logo" className="h-14 w-14 "/>*/}
                <Link href="/">
                    <h1 className="text-2xl font-bold">
                        SbuDev.
                    </h1>
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <DesktopNav />
                    <Link href="/Sibusiso_Khanye_CV_.pdf" download="/Sibusiso_Khanye_CV_.pdf" target="_blank">
                        <Button className="text-white bg-black font-bold md:hover:text-blue-700 rounded-full text-sm px-4 py-2 text-center transition duration-500 ease-in-out">Download CV</Button>
                    </Link>
                </div>


                <div className="xl:hidden flex">
                    <Link href="/Sibusiso_Khanye_CV_.pdf" download="/Sibusiso_Khanye_CV_.pdf" target="_blank">
                        <Button className="text-white bg-black font-bold md:hover:text-blue-700 rounded-full text-sm px-4 py-2 text-center transition duration-500 ease-in-out">Download CV</Button>
                    </Link>
                    <MobileNav/>
                </div>
            </div>
        </header>
    )
}