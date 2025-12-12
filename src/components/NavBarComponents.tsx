import useUIObject from "../hook/useUIObject";
import { NavLink, useSearchParams} from "react-router-dom";
import type { Props } from "../types/uiTypes";

const NavBarComponents = ({variant, isOpen, prev}: Props) => {
  const { NavObject, Navsecond, NavSideview } = useUIObject();
  const filterNavbar =
    variant === "icon"
      ? NavObject.filter((item) => item.icons)
      : NavObject.filter((item) => item.content);
  
  const[searchParams, setSearchParams] = useSearchParams();

  function handleCategoryClick(category: string) {
      if (category === 'All') {
        setSearchParams({});
      } else {
        setSearchParams({category});
      }
  };
  const activeCategory = searchParams.get('category') || 'All';
  console.log('Categoria é:', activeCategory)

  if(isOpen === true){
      return (
          <nav className="hidden lg:flex xl:flex 2xl:flex items-center gap-8 text-neutral-50 cursor-pointer font-[Open_sans]">
              {filterNavbar.map((item, i) => (
                <NavLink key={i} to={item.path ?? "/"} className={({isActive}: {isActive: boolean}) => `${isActive ? 'NavActiveMain' : ''} hover:text-amber-400`}>
                  {item.icons ? (
                    <item.icons size={16} className="hover:text-amber-400" />
                  ) : (
                    item.content
                  )}
                </NavLink>
              ))}
          </nav>
      )
  }

  if(isOpen === false){
      return (
          <div className="flex flex-col text-[#222831] items-center gap-20 p-8 mb-10">
            <h1 className="font-[Dancing_Script] font-bold text-4xl">Our Menu</h1>
            <ul className="text-[16px] font-[Open_Sans] flex flex-wrap sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 text-[#222831]">
              {Navsecond.map((item, i)=> (
                <li
                  key={i}
                  onClick={()=> handleCategoryClick(item.content!)} 
                  className={`whitespace-nowrap flex justify-center items-center px-2 py-1 rounded-2xl transition-all cursor-pointer
                    ${activeCategory === item.content ? 'NavActiveCategory' : ''}`}
                >
                    {item.content}

                </li>
              ))}        
            </ul>
          </div>
    )
  }
  
  return (
    <div className={`
      flex flex-col lg:hidden border border-neutral-50/10 h-[402px] text-neutral-50 gap-6
      w-[300px]
      bg-[#222831]/80
      font-[Open_Sans]
      text-2xl
      absolute
      z-10
      top-17
      right-0 sm:right-9 md:right-24
      p-10
      transition ease-in-out duration-500
      ${prev ? 'translate-x-0' : 'translate-x-[300px]'}
    `}>
      <h1 className="font-[Dancing_Script] font-bold text-4xl border-b">Feane </h1>
      <ul>
        {NavSideview.map((item, i) => (
          <NavLink key={i} to={item.path ?? '/'} className='flex gap-x-4 py-3 '>
            {item.icons && <item.icons/>}
            {item.content}          
          </NavLink>
        ))}
      </ul>
    </div>
  )
};

export default NavBarComponents;
