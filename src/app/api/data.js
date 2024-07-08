// import {FaCss3, FaHtml5, FaReact} from "react-icons/fa";
// import {IoLogoJavascript} from "react-icons/io5";
// import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";


const projectsData = [
    {
        id: 1,
        title: "BSI Electrical & Construction Projects (Pty) Ltd",
        description: "Check out my latest project – a website for a local electrical business! Built entirely with HTML and pure CSS, this website showcases my skills as a front-end developer.\n" +
            "                                    It provides a user-friendly platform for the electrical company to advertise their services, potentially including dedicated pages for residential and commercial work.\n" +
            "                                    The site is visually appealing and easy to navigate, ensuring a positive first impression for potential customers.  Furthermore, the clean, hand-coded approach using HTML and CSS demonstrates my strong foundation in front-end development principles.",
        technologies: ["HTML" , "CSS", "JavaScript"],
        // techIcons : [
        //     {
        //         html : <FaHtml5/>,
        //         css : <FaCss3/>,
        //         javascript : <IoLogoJavascript/>,
        //     }
        // ],
        image: {
            src: '/assets/service1.jpg',
            width: 300,
            height: 200,
            alt: "Image of My Awesome Project",
        },
    },
    // {
    //     id: 2,
    //     title: "My Portfolio Website",
    //     description: "I've built this portfolio website using React, a powerful JavaScript library for building dynamic user interfaces. React allows me to create reusable components, ensuring clean and maintainable code. To style the website, I utilized Tailwind CSS, a utility-first framework that provides granular control over design using class names. This combination of React and Tailwind CSS empowers me to deliver modern, responsive, and visually appealing web experiences.",
    //     technologies: ["NextJS", "ReactJS", "TailwindCSS"],
    //     image: {
    //         src: '/assets/service2.png',
    //         width: 300,
    //         height: 200,
    //         alt: "Image of My Awesome Project",
    //     },
    // },
];


export default projectsData;