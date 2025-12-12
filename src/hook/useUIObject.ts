import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaUtensils,
  FaBookOpen,
  FaInfo,
  FaBars
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import type {
  ButtonData,
  NavItem,
  Cardbox,
  Cardbox2,
  SecondCardBox,
  FooterItems,
  About
} from "../types/uiTypes";

function useUIObject() {
  const NavObject: NavItem[] = [
    { tag: "li", content: "HOME", path: "/" },
    { tag: "li", content: "MENU", path: "/menu" },
    { tag: "li", content: "ABOUT", path: "/about" },
    { tag: "li", content: "BOOKTABLE", path: "/booktable" },
    { tag: "li", icons: FaUser, path: "/user" },
    { tag: "li", icons: FaShoppingCart, path: "/cart" },
    { tag: "li", icons: FaSearch, path: "/search" },
  ];

  const NavSideview: NavItem[] = [
    {tag: "li", icons: FaHome, content:'Home', path:"/"},
    {tag: "li", icons: FaUtensils, content:'Menu', path:'/menu'},
    {tag: "li", icons: FaInfo, content: 'About', path:'/about'},
    {tag: "li", icons: FaBookOpen, content: 'BoockTable', path:'/booktable'},
  ];

  const Navsecond: NavItem[] = [
    { tag: "li", content: "All" },
    { tag: "li", content: "Burger" },
    { tag: "li", content: "Pizza" },
    { tag: "li", content: "Pasta" },
    { tag: "li", content: "Fries" },
  ];
 
  const btnUiversal: ButtonData[] = [
    { type: "Now", content: "Order Now" },
    { type: "View", content: "View More" },
    { type: "Online", content: "Order Online" },
    { type: "Card", content: "Order Now", icon: FaShoppingCart },
    { type: "CardBox", content: FaShoppingCart },
    { type: "Book Now", content: "BOOK NOW" },
    { type: "Read", content: "Read More"},
    { type: "icons", content: FaBars}
  ];

  const slides = [
    {
      title: "Fast Food Restaurant",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi ipsa nesciunt ut non rerum dignissimos commodi libero repellendus!Excepturi aperiam id possimus quisquam eaque, soluta reprehenderit quas quam assumenda perferendis?",
    },
    {
      title: "Fast Food Restaurant",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi ipsa nesciunt ut non rerum dignissimos commodi libero repellendus!Excepturi aperiam id possimus quisquam eaque, soluta reprehenderit quas quam assumenda perferendis?",
    },
    {
      title: "Fast Food Restaurant",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi ipsa nesciunt ut non rerum dignissimos commodi libero repellendus!Excepturi aperiam id possimus quisquam eaque, soluta reprehenderit quas quam assumenda perferendis?",
    },
  ];

  const card: Cardbox[] = [
    {
      title: "Tasty Thursdays",
      discount: "20%",
      sub: "off",
      photo: "/imgs/o1.jpg",
    },
    {
      title: "Pizza Days",
      discount: "15%",
      sub: "off",
      photo: "/imgs/o2.jpg",
    },
  ];

  const cardSlid: Cardbox2[] = [  
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur id eius iste velit ipsum asperiores omnis facilis, exercitationem ",
      title: 'Mike Hamell',
      span: "magna aliqua", 
      photo: '/imgs/client2.jpg',                      
    }, 
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur id eius iste velit ipsum asperiores omnis facilis, exercitationem ",
      title: 'Moana Michell',
      span: "magna aliqua", 
      photo: '/imgs/client1.jpg',  
    },

  ];

  const secondCard: SecondCardBox[] = [
    {
      title: "Delicious Pizza",
      p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$20",
      photo: "/imgs/f1.png",
      category: 'Pizza',
    },
    {
      title: "Delicious Burger",
      p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$15",
      photo: "/imgs/f2.png",
      category: 'Burger',
    },
    {
      title: "Delicious Pizza",
      p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$15",
      photo: "/imgs/f6.png",
      category: 'Pizza',
    },
    {
      title: "Delicious Pizza",
      p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$17",
      photo: "/imgs/f3.png",
      category: 'Pizza',
    },
    {
      title: "Delicious Pasta",
      p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$18",
      photo: "/imgs/f4.png",
      category: 'Pasta',
    },
    {
      title: "Tasty Burger",
      p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$12",
      photo: "/imgs/f7.png",
      category: 'Burger',
    },
    {
      title: "Tasty Burger",
      p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$14",
      photo: "/imgs/f8.png",
      category: 'Burger',
    },
    {
      title: "Delicious Pasta",
      p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$10",
      photo: "/imgs/f9.png",
      category: 'Pasta',
    },
    {
      title: "French Fries",
      p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: "$10",
      photo: "/imgs/f5.png",
      category: 'Fries',
    }, 
    
  ];

  const FooterObj: FooterItems[] = [
      {
          titleFirst: "Contact Us",
            firstList: [
                {icon: FaLocationDot, content: "Location"},
                {icon: FaPhoneAlt, content: "Call +01 123456789"},
                {icon: FaEnvelope, content: "demo@gmail.com"},
            ],
          titleSecond: "Feane",
            secondList: [
              {
                content: 
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quo dolorum veritatis odio, eius ullam itaque mollitia debitis beatae nulla quasi explicabo quod.",
                icons: [FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterest],
              },
            ],
            listContent: [
              {content:'© 2025 All Rights Reserved By Free Html Templates'},
              {content:'© Distributed By ThemeWagon'},
            ],
          titleThird:'Opening Hours',
            thirdList: [
              {content:'Everyday'},
              {content:'10.00 Am - 10.00Pm'},
            ],
      },
  ];

  const sectionAbout: About[] = [

    {
      img:'/imgs/about-img.png',
      title:'We Are Feane',
      p:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All',
    }
  ];

  return {
    NavObject,
    btnUiversal,
    slides,
    card,
    secondCard,
    Navsecond,
    FooterObj,
    cardSlid,
    sectionAbout,
    NavSideview
  };
}

export default useUIObject;
