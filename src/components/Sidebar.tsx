import React from "react";
import { motion } from "framer-motion";
import { HomeIcon, UserIcon, BrainIcon, LayoutGridIcon, MailIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
interface SidebarProps {
  activeSection: string;
}
const Sidebar = ({
  activeSection
}: SidebarProps) => {
  const menuItems = [{
    id: "home",
    label: "Home",
    icon: <HomeIcon size={20} />
  }, {
    id: "about",
    label: "About",
    icon: <UserIcon size={20} />
  }, {
    id: "skills",
    label: "Skills",
    icon: <BrainIcon size={20} />
  }, {
    id: "projects",
    label: "Projects",
    icon: <LayoutGridIcon size={20} />
  }, {
    id: "contact",
    label: "Contact",
    icon: <MailIcon size={20} />
  }];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <motion.aside className="fixed top-0 left-0 h-full w-20 md:w-64 bg-white shadow-lg z-10" initial={{
    x: -100,
    opacity: 0
  }} animate={{
    x: 0,
    opacity: 1
  }} transition={{
    duration: 0.5
  }}>
      <div className="flex flex-col h-full justify-between py-8">
        <div>
          <div className="flex justify-center mb-10">
            <motion.div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#C599B6] to-[#E6B2BA] flex items-center justify-center text-white font-bold text-xl" whileHover={{
            scale: 1.1,
            rotate: 5
          }} transition={{
            duration: 0.3
          }}>
              JP
            </motion.div>
          </div>
          <nav className="px-2">
            <ul className="space-y-4">
              {menuItems.map(item => <motion.li key={item.id} whileHover={{
              x: 5
            }} transition={{
              duration: 0.2
            }}>
                  <button onClick={() => scrollToSection(item.id)} className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeSection === item.id ? "bg-gradient-to-r from-[#C599B6]/20 to-[#E6B2BA]/20 text-[#C599B6]" : "text-gray-600 hover:text-[#C599B6]"}`}>
                    <span className="mr-4">{item.icon}</span>
                    <span className="hidden md:block font-medium">
                      {item.label}
                    </span>
                    {activeSection === item.id && <motion.div layoutId="activeSection" className="absolute left-0 w-1 h-8 bg-gradient-to-b from-[#C599B6] to-[#E6B2BA] rounded-r" transition={{
                  duration: 0.3
                }} />}
                  </button>
                </motion.li>)}
            </ul>
          </nav>
        </div>
        <div className="px-4">
          <div className="hidden md:block mb-6 border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-500 text-center">Connect with me</p>
          </div>
          <div className="flex justify-center space-x-4">
            <motion.a href="#" whileHover={{
            y: -3
          }} className="text-gray-600 hover:text-[#C599B6]">
              <GithubIcon size={20} />
            </motion.a>
            <motion.a href="#" whileHover={{
            y: -3
          }} className="text-gray-600 hover:text-[#C599B6]">
              <LinkedinIcon size={20} />
            </motion.a>
            <motion.a href="#" whileHover={{
            y: -3
          }} className="text-gray-600 hover:text-[#C599B6]">
              <TwitterIcon size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.aside>;
};
export default Sidebar;