// Fiber Img
import FiberMain from "../CodeWellImage/Fiber/FiberMain.jpg";
import FiberMobile from "../CodeWellImage/Fiber/FiberMobile.jpg";
import FiberLogin from "../CodeWellImage/Fiber/FiberLogin.jpg";
// Chirp Img
import ChirpMain from "../CodeWellImage/Chirp/ChirpMain.jpg";
import ChirpMobile from "../CodeWellImage/Chirp/ChirpMobile.jpg";
//Snipper Img
import SnipperMain from "../CodeWellImage/Snipper/SnipperMain.jpg";
import SnipperMobile from "../CodeWellImage/Snipper/SnipperMobile.jpg";
//Shopmy Img
import ShopmyMain from "../SelfDev/Shopmy/ShopmyMain.PNG";
import ShopmyLogin from "../SelfDev/Shopmy/ShopmyLogin.PNG";
import ShopmyRegister from "../SelfDev/Shopmy/ShopmyRegister.PNG";
import ShopmyProductDetail from "../SelfDev/Shopmy/ShopmyProductDetail.PNG";
import ShopmyCheckout from "../SelfDev/Shopmy/ShopmyCheckout.PNG";
import ShopmyAdminAllOrder from "../SelfDev/Shopmy/ShopmyAdminAllOrder.PNG";
//Weather app
import WeatherAppMain from "../SelfDev/Weatherapp/WeatherAppMain.PNG";
import WeatherAppSearch from "../SelfDev/Weatherapp/WeatherAppSearch.PNG";
import WeatherAppMobile from "../SelfDev/Weatherapp/WeatherAppMobile.PNG";
//Admin Panel
import APMain from "../SelfDev/AdminPanel/APMain.PNG";
import APMovieList from "../SelfDev/AdminPanel/APMovieList.PNG";
import APMovieEdit from "../SelfDev/AdminPanel/APMovieEdit.PNG";
import APMovieNew from "../SelfDev/AdminPanel/APMovieNew.PNG";
//Netflix clone
import NCRegister from "../SelfDev/NetflixClone/NCRegister.PNG";
import NCCreate from "../SelfDev/NetflixClone/NCCreate.PNG";
import NCHome from "../SelfDev/NetflixClone/NCHome.PNG";
import NCList from "../SelfDev/NetflixClone/NCList.PNG";
//Gallery Live View
import GlvMain from "../SelfDev/GLV/glvMain.PNG";
import GlvView from "../SelfDev/GLV/glvView.PNG";
import GlvRes from "../SelfDev/GLV/glvRes.PNG";
//TeamSeas
import TsMain from "../SelfDev/teamseas/tsMain.PNG";
import TsRes from "../SelfDev/teamseas/tsRes.PNG";

export const ProjectData = [
  {
    id: 1,
    name: "Chirp Landing Page",
    idea: "CodeWell",
    type: "frontend",
    isFeatured: true,
    links: "https://ruwminu.github.io/chip-clone-cw/",
    image: [ChirpMain, ChirpMobile],
    tools: ["React", "Styled Component", "Tailwindcss"],
    description:
      "Learning on creating modern design layout with fully responsive website for both mobile and desktop view",
  },
  {
    id: 2,
    name: "Fiber Landing Page",
    idea: "CodeWell",
    type: "frontend",
    isFeatured: false,
    links: "https://ruwminu.github.io/fiber-clone-cw/",
    image: [FiberMain, FiberMobile, FiberLogin],
    tools: ["React", "Styled Component", "Tailwindcss"],
    description:
      "Learning on creating modern design layout with fully responsive website for both mobile and desktop view",
  },
  {
    id: 4,
    name: "Snipper Landing Page",
    idea: "CodeWell",
    type: "frontend",
    isFeatured: false,
    links: "https://ruwminu.github.io/snipper-clone-cw/",
    image: [SnipperMain, SnipperMobile],
    tools: ["React", "Styled Component", "Tailwindcss"],
    description:
      "Learning on creating modern design layout with fully responsive website for both mobile and desktop view",
  },
  {
    id: 6,
    name: "ShopMy Ecommerce",
    idea: "Mr Basir",
    type: "fullstack",
    isFeatured: false,
    links: "https://ruwminu.github.io/shopmy-app/",
    image: [
      ShopmyMain,
      ShopmyLogin,
      ShopmyRegister,
      ShopmyProductDetail,
      ShopmyCheckout,
      ShopmyAdminAllOrder,
    ],
    tools: [
      "React",
      "Redux",
      "Styled Component",
      "Tailwindcss",
      "Mongodb",
      "Express",
    ],
    description:
      "Learning on basic CRUD function and the API interaction between frontend and backend, with implement of fully responsive web design",
    instruction: "https://github.com/rUwminu/shopmy-app",
  },
  {
    id: 7,
    name: "Weather App",
    idea: "devChallenges",
    type: "frontend",
    isFeatured: false,
    links: "https://ruwminu.github.io/devchallenge-weather-app/",
    image: [WeatherAppMain, WeatherAppSearch, WeatherAppMobile],
    tools: ["React", "Redux", "Styled Component", "Tailwindcss", "Weather API"],
    description:
      "Learning on basic use of API interaction between frontend and backend, with implement of fully responsive web design",
    instruction: "https://github.com/rUwminu/devchallenge-weather-app",
  },
  {
    id: 8,
    name: "Admin Panel",
    idea: "Lama Dev",
    type: "fullstack",
    isFeatured: true,
    links: "https://ruwminu.github.io/movie-admin-panel/",
    image: [APMain, APMovieList, APMovieEdit, APMovieNew],
    tools: [
      "React",
      "Material-UI",
      "Styled Component",
      "Tailwindcss",
      "MongoDB",
      "Express",
      "Firebase",
    ],
    description:
      "Building a admin panel to handle different project need on basic CRUD function. Example managing user or product. Using AWS in storing images and video, MongoBD for Database.",
    instruction: "https://github.com/rUwminu/movie-admin-panel",
  },
  {
    id: 9,
    name: "Netflix Clone",
    idea: "Lama Dev",
    type: "fullstack",
    isFeatured: true,
    links: "https://ruwminu.github.io/netflix-clone/",
    image: [NCRegister, NCCreate, NCHome, NCList],
    tools: [
      "React",
      "Material-UI",
      "Styled Component",
      "Tailwindcss",
      "MongoDB",
      "Express",
    ],
    description:
      "To practice fullstack development of a website, cloning other amazing website is a way for me to learnd",
    instruction: "https://github.com/rUwminu/netflix-clone",
  },
  {
    id: 10,
    name: "Gallery Live View",
    idea: "Myself",
    type: "frontend",
    isFeatured: true,
    links: "https://ruwminu.github.io/gallery-live-view/",
    image: [GlvMain, GlvView, GlvRes],
    tools: ["React", "Material-UI", "Styled Component", "Tailwindcss"],
    description:
      "This is an interest project, just playing around with the idea of displaying an product in intersting way",
    instruction: "https://github.com/rUwminu/gallery-live-view",
  },
  {
    id: 11,
    name: "TeamSeas Promote",
    idea: "Web dev simplified",
    type: "frontend",
    isFeatured: true,
    links: "https://ruwminu.github.io/teamsea-help-page/",
    image: [TsMain, TsRes],
    tools: ["React", "Styled Component", "Tailwindcss"],
    description:
      "This is an interest project, just playing around with animation.",
    instruction: "https://github.com/rUwminu/teamsea-help-page/settings/pages",
  },
];
