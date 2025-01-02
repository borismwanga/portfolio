import Gravity, { MatterBody } from "@/components/fancy/physics/gravity"
import MiniCv from "./MiniCv"
export default function Resume() {
  return (
    <div className="w-full h-full flex flex-col relative font-appelGarmond">
      <div className="pt-20 text-6xl sm:text-7xl md:text-8xl  w-full text-center font-calendas italic">
        Résumé
      </div>
       
      <p className="pt-4 text-base sm:text-xl md:text-2xl  w-full text-center">
        And Technologies I have been working with the following recently
      </p>
      <MiniCv />
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="10%"   
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#0015ff] text-white rounded-full hover:cursor-pointer px-8 py-4">
            react
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="30%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#E794DA] text-white rounded-full hover:cursor-grab px-8 py-4 ">
            typescript
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="40%"
          y="20%"
          angle={10}
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#1f464d]  text-white rounded-full hover:cursor-grab px-8 py-4 ">
            motion
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="75%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#ff5941]  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
            tailwind
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="80%"
          y="20%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-orange-500  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
            nodejs
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="50%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#ffd726]  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
            python
          </div>
        </MatterBody>
      </Gravity>
    </div>
  )
}