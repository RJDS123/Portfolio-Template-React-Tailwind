import React, { useState } from "react";
import { motion } from "framer-motion";
import { SendIcon, MapPinIcon, PhoneIcon, MailIcon, CheckCircleIcon, XCircleIcon } from "lucide-react";
import emailjs from "@emailjs/browser";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message");
      return false;
    }
    return true;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errorMessage) setErrorMessage("");
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormState("submitting");
    setErrorMessage("");
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Jane Porter"
      };
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_PUBLIC_KEY");
      setFormState("success");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setTimeout(() => {
        setFormState("idle");
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setFormState("error");
      setErrorMessage("Failed to send message. Please try again later.");
      setTimeout(() => {
        setFormState("idle");
        setErrorMessage("");
      }, 5000);
    }
  };
  return <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-[#FFF7F3] to-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FAD0C4]/10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#C599B6]/10 rounded-tr-full"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-[#C599B6]">Touch</span>
        </motion.h2>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or just want to say hello? I'd love to hear
          from you!
        </motion.p>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="w-full lg:w-1/3 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#C599B6]">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out through any of these channels. I'm always
                open to new opportunities and collaborations.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#C599B6]/10 p-3 rounded-lg mr-4">
                  <MapPinIcon size={20} className="text-[#C599B6]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#C599B6]/10 p-3 rounded-lg mr-4">
                  <MailIcon size={20} className="text-[#C599B6]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-600">hello@janeporter.dev</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#C599B6]/10 p-3 rounded-lg mr-4">
                  <PhoneIcon size={20} className="text-[#C599B6]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="w-full lg:w-2/3">
            <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#FAD0C4]/20 to-transparent rounded-bl-full"></div>
              {errorMessage && <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg text-red-600 flex items-center">
                  <XCircleIcon size={20} className="mr-2" />
                  {errorMessage}
                </div>}
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <motion.div whileFocus={{
                    scale: 1.01
                  }} transition={{
                    duration: 0.2
                  }}>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C599B6] focus:ring focus:ring-[#C599B6]/20 focus:outline-none transition-all duration-200" placeholder="Your name" />
                    </motion.div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <motion.div whileFocus={{
                    scale: 1.01
                  }} transition={{
                    duration: 0.2
                  }}>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C599B6] focus:ring focus:ring-[#C599B6]/20 focus:outline-none transition-all duration-200" placeholder="your.email@example.com" />
                    </motion.div>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <motion.div whileFocus={{
                  scale: 1.01
                }} transition={{
                  duration: 0.2
                }}>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C599B6] focus:ring focus:ring-[#C599B6]/20 focus:outline-none transition-all duration-200" placeholder="Your message..."></textarea>
                  </motion.div>
                </div>
                <div className="text-right">
                  <motion.button type="submit" disabled={formState === "submitting"} whileHover={{
                  scale: 1.03
                }} whileTap={{
                  scale: 0.97
                }} className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center ${formState === "submitting" ? "bg-gray-400 cursor-not-allowed" : formState === "success" ? "bg-green-500" : formState === "error" ? "bg-red-500" : "bg-gradient-to-r from-[#C599B6] to-[#E6B2BA]"} text-white min-w-[150px]`}>
                    {formState === "idle" && <>
                        Send Message
                        <SendIcon size={18} className="ml-2" />
                      </>}
                    {formState === "submitting" && <>
                        Sending...
                        <div className="ml-2 animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      </>}
                    {formState === "success" && <>
                        Sent Successfully
                        <CheckCircleIcon size={18} className="ml-2" />
                      </>}
                    {formState === "error" && <>
                        Failed to Send
                        <XCircleIcon size={18} className="ml-2" />
                      </>}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <footer className="mt-20 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Jane Porter. All rights reserved.</p>
      </footer>
    </section>;
};
export default ContactSection;