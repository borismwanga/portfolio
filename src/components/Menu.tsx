import { useState } from "react";
import Link from "next/link";
import ComesInGoesOutUnderline from "@/components/fancy/text/underline-comes-in-goes-out";
import { Menu as MenuIcon } from "lucide-react";

interface MenuProps {
  activeComponent: string;
  setActiveComponent: (component: string) => void;
}

const Menu = ({ activeComponent, setActiveComponent }: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "About", value: "about", direction: "left" as const },
    { label: "Projects", value: "projects", direction: "right" as const },
    { label: "Resume", value: "resume", direction: "left" as const },
    { label: "Contact", value: "contact", direction: "right" as const },
  ];

  return (
    <>
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed bottom-6 right-6 z-20 p-2 rounded-md  backdrop-filter 
          backdrop-blur-sm bg-opacity-10 border border-gray-100 dark:border-gray-800 "
      >
        <MenuIcon size={24} />
      </button>

      <div className={`
        p-12 border-b-black flex flex-col items-start 
        fixed md:absolute bottom-0 right-0 
        font-appelGarmond z-10
        md:translate-x-0
        transition-transform duration-300
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        bg-[#F2F2F2] dark:bg-[#0d0d0d] md:bg-transparent
        h-dvh md:h-auto w-full md:w-auto
      `}>
        
        {menuItems.map((item) => (
          <Link
            key={item.value}
            href="#"
            className={`text-4xl ${
              activeComponent === item.value ? "text-[#0015ff]" : "hover:text-[#0015ff]"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActiveComponent(item.value);
              setIsMenuOpen(false);
            }}
          >
            <ComesInGoesOutUnderline label={item.label} direction={item.direction} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;