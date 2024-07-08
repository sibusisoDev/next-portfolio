"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
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
{/* Desktop View */}
export default function DesktopNav() {
    const pathName = usePathname();
    return (<nav className="flex gap-8 font-bold">
                {links.map((link, index) => {
                    return (
                        <Link key={index} to={link.path} className={`${link.path === pathName && "text-blue-800 bold border-b-2 border-b-amber-950"} hover:text-blue-800 transition-all`}
                              href={link.path}>
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
    );
}
