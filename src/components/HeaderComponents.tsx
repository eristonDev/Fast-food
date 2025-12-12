import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import hero from "/src/assets/img/hero-bg.jpg";
import ButtonComponent from "./ButtonComponent";
import NavBarComponents from "./NavBarComponents";
import useUIObject from "../hook/useUIObject";
import "swiper/css";
import "swiper/css/pagination";
import type { ToggleProps } from "../types/uiTypes";
import { useState } from "react";


const HeaderComponents = ({isOpen}: ToggleProps) => {
  const { slides } = useUIObject();
  const[prev, setPrev] = useState(false);
  
  const handleClick = () => {
      setPrev((prev) => !prev)
  };

  return isOpen ? (
    <div
      className="w-full sm:w-[606px] md:w-[674px] lg:w-full xl:w-full md:min-h-[465px] lg:min-h-[565px] xl:min-h-[651px] bg-cover bg-center"
      style={{ backgroundImage:`url(${hero})`}}
    >
      <div className="px-4 sm:px-10 md:px-10 lg:px-10 xl:px-10 swiper-header md:max-w-2xl md:mx-0 lg:max-w-7xl lg:mx-auto xl:max-w-7xl xl:mx-auto">
        <header className="flex justify-between py-6">
          <div>
            <h1 className="font-bold font-[Dancing_Script] text-3xl text-neutral-50">
              Feane
            </h1>
          </div>
          <div className="flex gap-6">
            <NavBarComponents variant="text" isOpen={true}/>
            <NavBarComponents variant="icon" isOpen={true}/>
            <NavBarComponents prev={prev}/>
            <ButtonComponent variant={"Online"} className="hidden lg:flex"/>
            <ButtonComponent 
                variant={"icons"}
                className="flex lg:hidden" 
                style={
                  {
                    width:'40px', 
                    backgroundColor:"transparent", 
                    fontSize:"25px",
                  }
                }
                onClick={handleClick}
            />
          </div>
        </header>
        <div className="hidden lg:flex">
          <Swiper className="w-full"
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            loop={true}
          >
            {slides.map((sd, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col w-[280px] md:w-[400px] lg:w-[620px] xl:w-[780px] text-sm lg:text-sm xl:text-sm  mt-10">
                  <h2 className="text-3xl lg:text-5xl xl:text-6xl md:text-4xl font-[Dancing_Script] text-neutral-50 mb-6 
                  md:mb-10 lg:mb-10 xl:mb-10">
                    {sd.title}
                  </h2>
                  <p className="text-neutral-50 text-sm md:text-sm font-[Open_sans] mb-3 md:mb-8 lg:mb-8 xl:mb-8">{sd.p}</p>
                  <ButtonComponent variant={"Now"} className="md:w-30 md:h-10"/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="lg:hidden sm:flex">
          <Swiper className="w-full"
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            loop={true}
          >
            {slides.map((sd, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col w-[280px] md:w-[400px] lg:w-[620px] xl:w-[780px] text-sm lg:text-sm xl:text-sm  mt-10">
                  <h2 className="text-3xl lg:text-5xl xl:text-6xl md:text-4xl font-[Dancing_Script] text-neutral-50 mb-6 
                  md:mb-10 lg:mb-10 xl:mb-10">
                    {sd.title}
                  </h2>
                  <p className="text-neutral-50 text-sm md:text-sm font-[Open_sans] mb-3 md:mb-8 lg:mb-8 xl:mb-8">{sd.p}</p>
                  <ButtonComponent variant={"Now"} className="md:w-30 md:h-10"/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  ): (

    <div className="w-full sm:w-[606px] md:w-[674px] lg:w-full bg-cover h-[80px] lg:h-[100px] items-center"
      style={{ backgroundImage:`url(${hero})`}}>
        <div className="max-w-7xl mx-auto px-10">
            <header className="flex justify-between py-6">
              <div>
                <h1 className="font-bold font-[Dancing_Script] text-3xl text-neutral-50">
                  Feane
                </h1>
              </div>
              <div className="flex gap-6">
                <NavBarComponents variant='text' isOpen={true}/>
                <NavBarComponents variant="icon" isOpen={true}/>
                <NavBarComponents prev={prev} />
                <ButtonComponent variant={"Online"} className="hidden lg:flex"/>
                <ButtonComponent 
                variant={"icons"}
                className="flex lg:hidden" 
                style={
                  {
                    width:'40px', 
                    backgroundColor:"transparent", 
                    fontSize:"25px",
                  }
                }
                onClick={handleClick}
            />
              </div>
            </header>
        </div>
    </div>
  )
};

export default HeaderComponents;
