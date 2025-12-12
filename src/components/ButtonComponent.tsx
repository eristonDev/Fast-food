import type { ButtonProps } from "../types/uiTypes";
import useUIObject from "../hook/useUIObject";

const ButtonComponent = ({
  button,
  className ='',
  variant,
  ...props
}: ButtonProps & { type?: string }) => {
  const { btnUiversal } = useUIObject();

  const filterredButtons = variant
    ? btnUiversal.filter((btn) => btn.type === variant)
    : btnUiversal;

  return (
    <>
      {filterredButtons.map((btn, i) => {
        const Content = btn.content;
        const Icon = btn.icon;

        return (
          <button
            key={i}
            {...props}
            className={`bg-amber-300 w-40 h-10 rounded-3xl cursor-pointer font-[Open_sans] text-neutral-50
                        hover:bg-amber-400 transition duration-500 flex items-center justify-center ${className}
                    `}
          >
            {typeof Content === "string" ? Content : <Content />}
            {Icon && <Icon size={18} className="text-neutral-50" />}
          </button>
        );
      })}
    </>
  );
};

export default ButtonComponent;
