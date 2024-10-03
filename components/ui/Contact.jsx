"use client";

import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xeojbpjd");
    
    if (state.succeeded) {
        return <p>Thanks for reaching out! I will get back to you as soon as I can.</p>;
    }

    return (
        <section id="contact" className="py-16 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto space-y-6">
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        className="w-full bg-gray-800 p-4 rounded-lg" 
                        required 
                    />
                    <ValidationError 
                        prefix="Name" 
                        field="name" 
                        errors={state.errors} 
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Your Email" 
                        className="w-full bg-gray-800 p-4 rounded-lg" 
                        required 
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email" 
                        errors={state.errors} 
                    />
                    <textarea 
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
                    <button 
                        type="submit" 
                        disabled={state.submitting} 
                        className="w-full bg-blue-500 py-3 rounded-lg">
                        {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
