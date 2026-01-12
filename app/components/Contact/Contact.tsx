"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiSend, FiMail, FiPhone, FiMapPin, FiCheck, FiUser, FiMessageSquare } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeField, setActiveField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Message sent:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: "", email: "", message: "" });
            setIsSubmitted(false);
        }, 3000);
    };

    const socialLinks = [
        { icon: <FaGithub />, label: "GitHub", href: "https://github.com/Bilal742", color: "hover:bg-[#213448] hover:text-white" },
        { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/muhaammad-bilal/", color: "hover:bg-[#0A66C2] hover:text-white" },
        { icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com", color: "hover:bg-[#1DA1F2] hover:text-white" },
    ];

    const contactInfo = [
        { icon: <FiMail />, label: "Email", value: "bilalusman1291@gmail.com", href: "mailto:bilalusman1291@gmail.com" },
        { icon: <FiPhone />, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
        { icon: <FiMapPin />, label: "Location", value: "Karachi", href: "#" },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#FFFF80]/10" />
            {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFFF80] to-transparent" /> */}

            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#FFD166]/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#06D6A0]/10 blur-3xl" />

            <div className="absolute top-20 left-10 md:left-20">
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FFFF80] to-[#FFD166] opacity-20"
                />
            </div>
            <div className="absolute bottom-32 right-10 md:right-20">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-[#06D6A0] to-[#00B894] opacity-20"
                />
            </div>

            <div className="relative w-full max-w-6xl mx-auto z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-10"
                    >
                        {/* Header */}
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#FFFF80]/20 to-[#FFD166]/20 mb-6">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-[#FFFF80]" />
                                    <div className="w-2 h-2 rounded-full bg-[#FFD166]" />
                                </div>
                                <span className="text-sm font-medium text-[#213448]">Let's Connect</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#213448] mb-6">
                                Get in <span className="relative inline-block">
                                    Touch
                                    <motion.span
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                        className="absolute bottom-2 left-0 h-3 bg-gradient-to-r from-[#FFFF80]/50 via-[#FFD166]/50 to-transparent -rotate-1 -z-0"
                                    />
                                </span>
                            </h2>

                            <p className="text-lg text-[#213448]/70 leading-relaxed">
                                Have an exciting project in mind? Let's collaborate and create something amazing together.
                                I'm always open to discussing new opportunities and creative ideas.
                            </p>
                        </div>

                        {/* Contact Information Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className="group flex items-center gap-4 p-4 rounded-2xl border border-[#213448]/10 bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300"
                                >
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#FFFF80] to-[#FFD166] text-[#213448] group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-[#213448]/70">{item.label}</div>
                                        <div className="font-medium text-[#213448] group-hover:text-[#213448]/90">
                                            {item.value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#213448] mb-4">Connect Socially</h3>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ y: -4, scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-3 rounded-xl border border-[#213448]/10 bg-white text-[#213448] text-xl transition-all duration-300 ${social.color}`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Form Card */}
                        <div className="relative rounded-3xl overflow-hidden border-2 border-[#213448]/10 bg-gradient-to-b from-white to-white/80 backdrop-blur-sm p-8 md:p-10 shadow-xl">
                            {/* Success Message Overlay */}
                            <AnimatePresence>
                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="absolute inset-0 bg-gradient-to-br from-[#06D6A0] to-[#00B894] z-20 flex flex-col items-center justify-center p-8 text-center"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
                                            <FiCheck className="text-4xl text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                                        <p className="text-white/90">
                                            Thank you for reaching out. I'll get back to you within 24 hours.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <h3 className="text-2xl font-bold text-[#213448] mb-2">Send a Message</h3>
                            <p className="text-[#213448]/70 mb-8">Fill out the form below and I'll respond promptly.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div className="relative">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FiUser className="text-[#213448]/50" />
                                        <label className="text-sm font-medium text-[#213448]">Your Name</label>
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setActiveField('name')}
                                        onBlur={() => setActiveField(null)}
                                        required
                                        className="w-full px-5 py-4 rounded-xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 focus:outline-none"
                                        style={{
                                            borderColor: activeField === 'name' ? '#FFFF80' : '#213448/20',
                                            boxShadow: activeField === 'name' ? '0 0 0 3px rgba(255, 255, 128, 0.1)' : 'none'
                                        }}
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FiMail className="text-[#213448]/50" />
                                        <label className="text-sm font-medium text-[#213448]">Email Address</label>
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setActiveField('email')}
                                        onBlur={() => setActiveField(null)}
                                        required
                                        className="w-full px-5 py-4 rounded-xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 focus:outline-none"
                                        style={{
                                            borderColor: activeField === 'email' ? '#FFFF80' : '#213448/20',
                                            boxShadow: activeField === 'email' ? '0 0 0 3px rgba(255, 255, 128, 0.1)' : 'none'
                                        }}
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FiMessageSquare className="text-[#213448]/50" />
                                        <label className="text-sm font-medium text-[#213448]">Your Message</label>
                                    </div>
                                    <textarea
                                        name="message"
                                        placeholder="Tell me about your project, ideas, or questions..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setActiveField('message')}
                                        onBlur={() => setActiveField(null)}
                                        required
                                        rows={4}
                                        className="w-full px-5 py-4 rounded-xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 focus:outline-none resize-none"
                                        style={{
                                            borderColor: activeField === 'message' ? '#FFFF80' : '#213448/20',
                                            boxShadow: activeField === 'message' ? '0 0 0 3px rgba(255, 255, 128, 0.1)' : 'none'
                                        }}
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                                    style={{
                                        background: 'linear-gradient(135deg, #213448 0%, #1a2938 100%)',
                                        color: 'white',
                                    }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>

                            {/* Form Footer */}
                            <div className="mt-8 pt-6 border-t border-[#213448]/10 text-center">
                                <p className="text-sm text-[#213448]/50">
                                    Typically responds within <span className="font-semibold text-[#213448]">24 hours</span>
                                </p>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#FFFF80] to-[#FFD166] -z-10" />
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#06D6A0] to-[#00B894] -z-10 opacity-20" />
                    </motion.div>
                </div>

                {/* Stats Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { value: "24h", label: "Avg. Response Time", color: "from-[#FFFF80] to-[#FFD166]" },
                        { value: "100%", label: "Response Rate", color: "from-[#06D6A0] to-[#00B894]" },
                        { value: "50+", label: "Projects Completed", color: "from-[#118AB2] to-[#0A6F9C]" },
                        { value: "∞", label: "Collaboration Ready", color: "from-[#EF476F] to-[#D43A5C]" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#213448]/10">
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} text-white text-2xl mb-4`}>
                                {stat.value}
                            </div>
                            <div className="text-sm text-[#213448]/70">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}