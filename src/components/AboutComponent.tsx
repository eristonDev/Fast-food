import useUIObject from "../hook/useUIObject";
import ButtonComponent from "./ButtonComponent";

const AboutComponent = () => {

    const{sectionAbout} = useUIObject();

  return (
    <div>
        {sectionAbout.map((abt, i) => (
            <div key={i}
                className="
                    flex flex-col
                    sm:grid grid-cols-[1fr_1fr]  
                    w-full
                    sm:w-[606px] md:w-[674px] lg:w-full
                    
                    h-auto
                    bg-[#222831] 
                    sm:items-center
                    place-items-center
                    p-4"
            >
                <div className="w-[240px] h-[300px] sm:w-[260px] sm:h-[380px] lg:w-[420px] lg:h-[560px]">
                    <img src={abt.img} alt="Aboutimg" className="h-full w-full object-contain  rounded-md"/>
                </div>
                <div className="
                    w-[280px] 
                    sm:w-[260px]
                    lg:w-[400px]
                    flex flex-col
                    gap-4
                    mt-4 sm:mt-0"
                >
                    <h2 className="font-[Dancing_Script] text-4xl text-center lg:text-6xl font-bold text-neutral-50">{abt.title}</h2>
                    <p className="text-neutral-50 text-base sm:text-lg leading-relaxed">{abt.p}</p>
                    <ButtonComponent variant="Read"/>
                </div>  
            </div>
        ))}
    </div>
  )
}

export default AboutComponent