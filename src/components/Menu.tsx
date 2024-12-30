// Menu.tsx
import Link from "next/link";
import ComesInGoesOutUnderline from "@/components/fancy/text/underline-comes-in-goes-out"

interface MenuProps {
  activeComponent: string;
  setActiveComponent: (component: string) => void;
}

const Menu = ({ activeComponent, setActiveComponent }: MenuProps) => {
  const menuItems: { label: string; value: string; direction: "left" | "right" }[] = [
    { label: "About", value: "about", direction: "left" },
    { label: "Projects", value: "projects", direction: "right" },
    { label: "Resume", value: "resume", direction: "left" },
    { label: "Contact", value: "contact", direction: "right" },
  ];

  return (
    <div className="p-12 border-b-black flex flex-col items-start justify-between absolute bottom-0 right-0 font-appelGarmond z-10">
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
          }}
        >
          <ComesInGoesOutUnderline label={item.label} direction={item.direction} />
        </Link>
      ))}
    </div>
  );
};

export default Menu;