import type { IconType } from "react-icons";

export type ButtonData = {
    type: string;
    content: string | React.ElementType;
    icon?: string | React.ElementType;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    button?: ButtonData;
    variant?: string | undefined;
};

export type NavBarProps = {
    variant?: 'text' | 'icon';  
};


export type ToggleProps = {
    isOpen?: boolean,
    prev?: boolean, 
};

export type CardProps = {
    variant?: 'firstCard' | 'secondCard';
}

export type Props = ToggleProps & NavBarProps;

export type NavItem = {
    tag: string;
    content?: string;
    path?: string;
    icons?: IconType;
};

export type Cardbox = {
    title: string;
    discount: string;
    sub:string;
    photo: string;
};

export type SecondCardBox = {
    photo: string;
    title: string;
    p: string;
    price: string;
    category: string;
};

export type Field = {
    name: keyof Users;
    type: 'text' | 'number' | 'date';
    className: string;
};

export type Users = {
    name: string;
    phone: string;
    email: string;
    category: string;
    data: Date | null;
};

export type FooterType = {
    content?: string;
    
    icon?: IconType;
    icons?: IconType[];

    titleFirst?: string;
    titleSecond?: string;
    titleThird?: string;
    title?:string; 

    iconFirst?: IconType;
    iconSecond?: IconType;
    iconThird?: IconType;
    iconFouth?: IconType;
    iconFifth?: IconType;

};

export type FooterItems = {
    titleFirst: string;
    titleSecond: string;
    titleThird: string;
    firstList: FooterType[];
    secondList: FooterType[];
    thirdList: FooterType[];
    listContent:FooterType[]; 
};

export type Cardbox2 = {
    title?: string;
    span?: string;
    photo?: string;
    content?: string;
};

export type About ={
    title: string;
    img: string;
    p: string
};


