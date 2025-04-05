"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);

    if (state.succeeded) {
        return (
            <section id="contact" className="py-8 text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Message Sent</h2>
                    <p>Thanks for reaching out! I’ll get back to you as soon as I can.</p>
                </div>
            </section>
        );
    }

    return (
        <section
            id="contact"
            className="py-8 text-white"
            aria-labelledby="contact-heading"
        >
            <div className="container mx-auto text-center">
                <header>
                    <h2 id="contact-heading" className="text-4xl font-bold">
                        Get in Touch
                    </h2>
                </header>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 max-w-lg mx-auto space-y-6"
                >
                    <div className="text-left">
                        <label htmlFor="name" className="block mb-2 font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full bg-gray-800 p-4 rounded-lg"
                            required
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div className="text-left">
                        <label htmlFor="email" className="block mb-2 font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full bg-gray-800 p-4 rounded-lg"
                            required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="text-left">
                        <label htmlFor="message" className="block mb-2 font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            className="w-full bg-gray-800 p-4 rounded-lg h-40"
                            required
                        ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-blue-500 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
