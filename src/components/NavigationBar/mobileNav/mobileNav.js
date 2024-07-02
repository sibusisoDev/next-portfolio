"use client"
import {usePathname} from "next/navigation";
import {CiMenuBurger, CiMenuFries} from "react-icons/ci";
import {Sheet, SheetTrigger, SheetContent} from "@/components/ui/sheet";
import Link from "next/link";

export const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {

        name: "Career",
        path: "/career",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Contact",
        path: "/contact",
    },
]
export default function MobileNav() {
    const pathName = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center font-medium">
                <CiMenuFries className="ml-2 text-3xl" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <nav className="flex flex-col justify-center items-center font-bold">
                    {links.map((link, index) => {
                        return (
                            <Link key={index} to={link.path} className={`${link.path === pathName && "text-blue-800 bold border-b-2 border-b-amber-950"} hover:text-blue-800 transition-all`}
                                  href={link.path}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
