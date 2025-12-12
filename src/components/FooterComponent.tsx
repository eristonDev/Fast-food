import { Link } from "react-router";
import useUIObject from "../hook/useUIObject";

const FooterComponent = () => {

  const{FooterObj} = useUIObject();
  const item = FooterObj[0];


  return (
    <footer className="bg-[#222831] w-full sm:max-w-[606px] md:max-w-2xl lg:max-w-full xl:max-w-full p-10 ">
        <div className="
             
            sm:flex flex-col 
            lg:grid grid-cols-[1fr_2fr_1fr]
            gap-4 md:gap-4 lg:gap-4 xl:gap-4 
        ">
            
            {/* COLUNA 1*/}
            <div className="
                p-8 
                md:p-1 
                lg:p-4 
                xl:p-8
                grid 
                place-items-center 
                md:place-items-center
                lg:place-items-center
                xl:place-items-center
              ">
              <h2 className="font-[Dancing_Script] text-3xl text-neutral-50 font-bold mb-5">
                {item.titleFirst}
              </h2>

              {item.firstList.map((el, i) => (
                <Link 
                  key={i}
                  to='#'
                  className="hover:text-amber-400 text-base  text-neutral-50 cursor-pointer flex items-center gap-2 mb-2"
                >
                  {el.icon && <el.icon/>}
                  {el.content}
                </Link>
              ))}
            </div>

            {/* COLUNA 2 */}
            <div className="
                p-8 
                md:p-1 
                lg:p-4 
                xl:p-8
                grid 
                place-items-center 
                md:place-items-center
                lg:place-items-center
                xl:place-items-center
              ">
              <h2 className="font-[Dancing_Script] text-3xl text-neutral-50 font-bold mb-5">
                {item.titleSecond}
              </h2>

              {item.secondList.map((info, i) => (
                <div key={i}>
                  <p className="mb-5 text-base text-neutral-50 text-center md:text-center lg:text-center xl:text-center">{info.content}</p>

                  <div className="flex gap-4 mt-2 mb-5 justify-center md:justify-center lg:justify-center xl:justify-center">
                    {info.icons?.map((Ico, idx) => (
                        <div
                          key={idx}
                          className="bg-neutral-50 w-8 h-8 rounded-full flex items-center justify-center"
                        >
                          <Ico className="hover:text-amber-400 cursor-pointer text-[#222831] w-5 h-5"/>
                        </div>
                    ))}
                  </div>
                </div>
              ))}

                {item.listContent.map((list, i) => (
                  <p key={i} className="text-base md:text-[8px] lg:text-base xl:text-base text-neutral-50
                  text-center md:text-center lg:text-center xl:text-center">{list.content}</p>
                ))}
            </div>

            {/* COLUNA 3 */}
            <div className="
                  p-8 
                  md:p-1 
                  lg:p-4 
                  xl:p-8
                  grid 
                  place-items-center 
                  md:place-items-center
                  lg:place-items-center
                  xl:place-items-center
                ">
                <h2 className="font-[Dancing_Script] text-3xl text-neutral-50 font-bold mb-5">
                  {item.titleThird}
                </h2>

                {item.thirdList.map((el, i) => (
                  <p key={i} className="text-base text-neutral-50">{el.content}</p>
                ))}
            </div>

        </div>
    </footer>
  );
};

export default FooterComponent;
