
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Main from "@/components/Main";
import ModeToggle  from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className=" flex flex-col items-center w-full h-full px-4 lg:px-12">
      <Header/>
      <Main/>
      <Menu/>
      <div className="absolute bottom-0 left-0 p-12 z-10">
      <ModeToggle/>
      </div>
      
    </div>
  );
}
