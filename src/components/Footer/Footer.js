import {SiGmail} from "react-icons/si";
import {FaLinkedin, FaWhatsapp} from "react-icons/fa";

export default function Footer (){
    return (
        <footer className="p-4 bg-black sm:p-6">
            <div className="flex items-center justify-between">
                <span className="text-sm text-gray-100 sm:text-center">© {new Date().getFullYear()} <a
                    href="#" className="hover:underline md:hover:text-blue-700">SbuDev.</a>
                </span>
                <ul className="flex justify-between">
                    <a href="mailto:sibusisokhanye2@gmail.com" target="_blank" rel="noopener noreferrer"
                       className="mr-4">
                        <SiGmail className="w-8 h-8 text-white md:hover:text-blue-700 transition duration-300 ease-in-out "/>
                    </a>
                    <a href="https://www.linkedin.com/in/sibusiso-khanye-236243a2/" target="_blank"
                       rel="noopener noreferrer"
                       className="mr-4">
                        <FaLinkedin className="w-8 h-8 text-white md:hover:text-blue-700 hover:text-gray-200 transition duration-300 ease-in-out"/>
                    </a>
                    <a href="https://wa.me/+27605778247" target="_blank" rel="noopener noreferrer"
                       className="mr-4">
                        <FaWhatsapp className="w-8 h-8 text-white md:hover:text-blue-700 hover:text-gray-200 transition duration-300 ease-in-out"/>
                    </a>
                </ul>
            </div>
        </footer>
    )
}

