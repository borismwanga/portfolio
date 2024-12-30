// page.tsx
"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import About from "@/components/main/About";
import Projects from "@/components/main/Projects";
/* import Resume from "@/components/main/Resume";
 */import Contact from "@/components/main/Contact";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<string>("about");

  const renderComponent = () => {
    switch (activeComponent) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      /* case "resume":
        return <Resume />; */
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full px-4 lg:px-12">
      <Header />
      <div className="flex-1 w-full mb-12">
        {renderComponent()}
      </div>
      <Menu activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      <div className="absolute bottom-0 left-0 p-12 z-10">
        <ModeToggle />
      </div>
    </div>
  );
}