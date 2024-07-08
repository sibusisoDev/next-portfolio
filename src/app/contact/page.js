'use client'
import React from 'react';
// import emailjs from '@emailjs/browser';
import {Button} from "@/components/ui/button";



export default function Contact () {
    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const [stateMessage, setStateMessage] = useState(null);
    // const sendEmail = (e) => {
    //     e.persist();
    //     e.preventDefault();
    //     setIsSubmitting(true);
    //     emailjs
    //         .sendForm(
    //             process.env.service_ar4qbk1,
    //             process.env.REACT_APP_TEMPLATE_ID,
    //             e.target,
    //             process.env.S_D_nwIRADZ7lXKXD
    //         )
    //         .then(
    //             (result) => {
    //                 setStateMessage('Message sent!');
    //                 setIsSubmitting(false);
    //                 setTimeout(() => {
    //                     setStateMessage(null);
    //                 }, 5000); // hide message after 5 seconds
    //             },
    //             (error) => {
    //                 setStateMessage('Something went wrong, please try again later');
    //                 setIsSubmitting(false);
    //                 setTimeout(() => {
    //                     setStateMessage(null);
    //                 }, 5000); // hide message after 5 seconds
    //             }
    //         );
    //
    //     // Clears the form after sending the email
    //     e.target.reset();
    // };
    return <section className="bg-white mx-auto max-w-screen-xl py-8 lg:py-16">
        <h2 className="font-bold text-4xl px-4 md:text-6xl tracking-tight leading-none">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-4">
            <div className="lg:py-16 px-4 mx-auto max-w-screen-md text-gray-950">
                <h2 className="text-2xl py-8 sm:text-xl md:text-3xl lg:py-16">Let's
                    chat about any potential opportunities</h2>
                <p className="md:text-lg lg:text-xl">I'm always interested in hearing about exciting
                    new opportunities, especially in the software and web development fields.
                    Feel free to reach out if you have any questions or projects you'd like to discuss. Let's
                    chat
                    about how I can help you achieve your goals.</p>
            </div>
            <div className="p-5">
                <form action="#" className="space-y-8" id="myForm">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-xl font-normal text-gray-900">E-mail
                        </label>
                        <input type="email" name="user_email" className="bg-gray-50 border border-gray-800 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@gmail.com" required/>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block mb-2 text-lg font-normal text-gray-800 dark:text-gray-300">Subject</label>
                        <input type="text" name="user_subject" className="block p-3 w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-800 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Type the subject" required/>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-lg font-normal text-gray-900">Your
                            message</label>
                        <textarea name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-800 bg-gray-50 rounded-lg shadow-sm border border-gray-800 focus:ring-primary-500 focus:border-primary-500" placeholder="Type your message here..."></textarea>
                    </div>
                    <Button type="submit" typeof="submit" value="Send"
                            className="text-white bg-black font-bold md:hover:text-blue-700 rounded-full text-sm px-4 py-2 text-center transition duration-500 ease-in-out">Send
                        message
                    </Button>
                    {/*{stateMessage && <p>{stateMessage}*/}
                </form>
            </div>
        </div>
    </section>;
}