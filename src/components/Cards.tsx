import useUIObject from "../hook/useUIObject";
import ButtonComponent from "./ButtonComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { CardProps } from "../types/uiTypes";
import "swiper/css";
import "swiper/css/navigation";
import NavBarComponents from "./NavBarComponents";
import { useSearchParams } from "react-router-dom";
import {motion, AnimatePresence} from 'framer-motion';

const Cards = ({variant}: CardProps) => {
  const {card, cardSlid, secondCard } = useUIObject();

  const[searchParams] =useSearchParams();
  const category = searchParams.get('category');
  
  const filteredCards = category 
  ? secondCard.filter((item) => item.category === category)
  : secondCard
  
    if(variant === 'firstCard') {
      return  (
        <div className="w-full sm:w-[606px] md:w-[674px] lg:w-full xl:full"> 
        <NavBarComponents isOpen={false}/>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:max-w-7xl lg:mx-auto md:max-w-2xl md:mx-0 px-10 md:px-10 gap-6">
              <AnimatePresence mode="popLayout">
              {filteredCards.map((item, i)=> (             
                <motion.div 
                  key={i}
                  layout
                  className="w-full max-w-[380px] h-[419px] md:max-h-[400px] bg-gradient-to-t from-[#222831] via-[#222831] to-[#f1f2f3] rounded-2xl"

                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}

                  exit={{ opacity: 0, scale: 0.8, y: 20 }}

                  transition={{type: 'spring', stiffness: 120, damping: 14}}
                >
                  <div className=" w-full h-1/2 p-6 bg-[#f1f2f3] rounded-bl-[50px] md:rounded-bl-[30px] rounded-t-2xl flex items-center justify-center">
                    <img src={item.photo} alt="logo" className="w-32 h-32 transition-transform duration-500 hover:scale-125"/>
                  </div>
                  <div className="p-2 sm:p-2 md:py-1 lg:p-3 xl:p-4 flex flex-col gap-2">
                    <h2 className="text-neutral-50 text-2xl font-[Open_Sans]">{item.title}</h2>
                    <p className="text-neutral-50 font-[Open_Sans]">
                      {item.p}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-neutral-50 text-[20px] font-[Open_Sans]">{item.price}</p>
                      <ButtonComponent variant={"CardBox"} className='w-[40px] h-[40px]'/>
                    </div>
                  </div>
                </motion.div>
              ))}
              </AnimatePresence>         
              <div className="col-span-full flex justify-center p-10">
                <ButtonComponent variant={'View'}/>
              </div>
            </div>
          </div>
          );
        };
    
    if(variant === 'secondCard'){
       return (
        <div className="flex flex-col w-full sm:w-[606px] md:w-[674px] lg:w-full xl:w-full">
          <div className="md:max-w-2xl md:mx-0 lg:max-w-7xl lg:mx-auto xl:max-w-7xl xl:mx-auto px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 place-items-center gap-6">
              {card.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#222831] text-neutral-50 sm:w-[530px] md:w-[285px] lg:w-[456px] xl:w-[588px] md:h-32 lg:h-48 xl:h-48 rounded-sm flex 
                  gap-4 sm:gap-4 md:gap-3 lg:gap-5 xl:gap-5 items-center sm:p-4 p-2"
                >
                  <div className="sm:w-40 md:w-20 md:h-20 lg:w-40 lg:h-40 xl:w-40 xl:h-40 rounded-full border-4 border-amber-400 p-1 overflow-hidden flex items-center">
                    <img
                      src={item.photo}
                      className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-125"
                    />
                  </div>
                  <div className=" flex flex-col">
                    <h2 className="font-[Dancing_Script] text-2xl sm:text-4xl md:text-2xl lg:text-4xl xl:text-4xl mb-3">
                      {item.title}
                    </h2>
                    <div className="flex gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 items-center mb-3">
                      <p className="font-[Dancing_Script] text-2xl sm:text-4xl md:text-2xl lg:text-4xl xl:text-4xl">{item.discount}</p>
                      <p className="font-[Dancing_Script]">{item.sub}</p>
                    </div>
                    <ButtonComponent variant={"Card"} className="sm:w-40 md:w-30 md:h-8 lg:w-40 lg:h-10 xl:w-40 xl:h-10"/>
                  </div>
                </div>
              ))}
          </div>
        </div>
       )
    };

    return ( 
      <div className="flex flex-col w-full px-4 sm:px-10 swiper-card"> 
        <h2 className="font-[Dancing_Script] font-bold text-4xl text-center text-[#222831] p-12">What Says Our Customers</h2>  
        <div className="w-full sm:max-w-[525px] md:max-w-[594px] lg:max-w-full">
          <div className="hidden lg:flex">
            <Swiper
              modules={[Navigation, Autoplay]}
                slidesPerView={1}
                navigation={true}
                autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                }}
                speed={700}
                loop={true}
            >
              <SwiperSlide>
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:flex gap-6 w-full max-w-full">
                    {cardSlid.map((item, i) => (
                      <div key={i} className="flex flex-col w-full">
                        <div className='bg-[#222831] text-neutral-50 p-6 flex flex-col gap-2 rounded-md w-full h-48'>
                          <p className='font-[Open_Sans]'>{item.content}</p>
                          <h2 className='text-2xl font-[Open_Sans]'>{item.title}</h2>
                          <span className='font-[Open_Sans] text-[14px]'>{item.span}</span>
                        </div>
                        <div className='text-neutral-50 p-6 flex flex-col gap-2 rounded-md w-full h-48'>
                          <img src={item.photo} alt="avatar1" className='w-30 h-30 rounded-full object-cover border-4'/>
                        </div>
                      </div>
                    ))}
                </div>        
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:flex gap-6 w-full max-w-full">
                    {cardSlid.map((item, i) => (
                      <div key={i} className="flex flex-col flex-1">
                        <div className='bg-[#222831] text-neutral-50 p-6 flex flex-col gap-2 rounded-md w-full h-48'>
                          <p className='font-[Open_Sans]'>{item.content}</p>
                          <h2 className='text-2xl font-[Open_Sans]'>{item.title}</h2>
                          <span className='font-[Open_Sans] text-[14px]'>{item.span}</span>
                        </div>
                        <div className='text-neutral-50 p-6 flex flex-col gap-2 rounded-md w-full h-48'>
                          <img src={item.photo} alt="avatar1" className='w-30 h-30 rounded-full object-cover border-4'/>
                        </div>
                      </div>
                    ))}
                </div>        
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="lg:hidden sm:flex">
            <Swiper
              modules={[Navigation]}
                slidesPerView={1}
                navigation={true}
                loop={true}
            >
              <SwiperSlide>
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:flex gap-6 w-full max-w-full">
                    {cardSlid.map((item, i) => (
                      <div key={i} className="flex flex-col w-full">
                        <div className='bg-[#222831] text-neutral-50 p-6 flex flex-col gap-2 rounded-md w-full h-48'>
                          <p className='font-[Open_Sans]'>{item.content}</p>
                          <h2 className='text-2xl font-[Open_Sans]'>{item.title}</h2>
                          <span className='font-[Open_Sans] text-[14px]'>{item.span}</span>
                        </div>
                        <div className='text-neutral-50 p-6 flex flex-col gap-2 rounded-md w-full h-48'>
                          <img src={item.photo} alt="avatar1" className='w-30 h-30 rounded-full object-cover border-4'/>
                        </div>
                      </div>
                    ))}
                </div>        
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:flex gap-6 w-full max-w-full">
                    {cardSlid.map((item, i) => (
                      <div key={i} className="flex flex-col flex-1">
                        <div className='bg-[#222831] text-neutral-50 p-6 flex flex-col gap-2 rounded-md w-full h-48'>
                          <p className='font-[Open_Sans]'>{item.content}</p>
                          <h2 className='text-2xl font-[Open_Sans]'>{item.title}</h2>
                          <span className='font-[Open_Sans] text-[14px]'>{item.span}</span>
                        </div>
                        <div className='text-neutral-50 p-6 flex flex-col gap-2 rounded-md w-full h-48'>
                          <img src={item.photo} alt="avatar1" className='w-30 h-30 rounded-full object-cover border-4'/>
                        </div>
                      </div>
                    ))}
                </div>        
              </SwiperSlide>
            </Swiper>
          </div>  
      </div> 
  </div>  
  );
};

export default Cards;
