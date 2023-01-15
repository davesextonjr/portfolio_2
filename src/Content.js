// import images
import Hero_person from "/images/Hero/person.png";

import javaScript from "/images/Skills/javaScript.png";
import redux from "/images/Skills/redux.png";
import agile from "/images/Skills/agile.png";
import oop from "/images/Skills/oop.png";
import reactjs from "/images/Skills/react.png";
import python from "/images/Skills/python.png";

import AboutMeContent from "./AboutMeContent";


import codersGambit from "/images/Projects/chessHome.png";
import routinica from "/images/Projects/routinica.png";
import noroominn from "/images/Projects/noroominn.png";
import person_project from "/images/Projects/person.png";

import avatar1 from "/images/Testimonials/avatar1.png";
import avatar2 from "/images/Testimonials/avatar2.png";
import avatar3 from "/images/Testimonials/avatar3.png";
import avatar4 from "/images/Testimonials/avatar4.png";

import Hireme_person from "/images/Hireme/person.png";


// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import {FaGithub} from "react-icons/fa"

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#testimonials",
      icon: RiServiceLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "DAVE",
    LastName: "SEXTON",
    btnText: "Contact Me",
    image: Hero_person,
    hero_content: [
      {
        link: "#skills",
        text: "skills | ",
      },
      {
        link: "#projects",
        text: "projects | ",
      },
      {
        link: "#testimonials",
        text: "testimonials | ",
      },
      {
        link: "#aboutMe",
        text: "about me",
      },
    ],
  },
  skills: {
    title: "Tech Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React.js",
        para: "My favorite framework for delevering a smooth user experience",
        logo: reactjs,
        bulletOne: "This skill is demonstrated in all three of my portfolio projects",
        bulletTwo: "Scored in the top 5% of the Linked in Skills Test",
        bulletThree: "Currently building reps in using both React Context and Props"
      },
      {
        name: "JavaScript",
        para: "I haven't found anything that beats that plain old javascript object",
        logo: javaScript,
        bulletOne: "This skill is demonstrated in all three of my portfolio projects",
        bulletTwo: "Was consistently in the top 10% of my class during the weekly assessments",
        bulletThree: "Currently building strengthening my foundation in object manipulation and array methods"
      },
      {
        name: "Redux",
        para: "My favorite libraries for managing state in a React App",
        logo: redux,
        bulletOne: "This skill is demonstrated in all three of my portfolio projects",
        bulletTwo: "Was able to help fellow students successfully utilize in their projects",
        bulletThree: "Currently deepening my understanding of when utilizing Redux might be overkill"
      },
      {
        name: "Python",
        para: "Teamed with Flask, and SQLAlchemy, Python was my go to choice for my apps' backend",
        logo: python,
        bulletOne: "This skill is demonstrated in my group project - Routinica, and Capstone - Coder's Gambit",
        bulletTwo: "Was able to pick up the basics in less two weeks and build a rudimentary Wordle App",
        bulletThree: "Currently refactoring back end routes in my projects to make better use of Python's list and dictionary methods"
      },
      {
        name: "Object Oriented Programming",
        para: "Encaspolate, Abstract, Inherit...",
        logo: oop,
        bulletOne: "This skill is demonstrated in all three of my portfolio projects",
        bulletTwo: "Comparing the code between my three full-stack projects shows a growing mastery of this concept",
        bulletThree: "Currently builing Classes for my chess pieces that will handle move logic"
      },
      {
        name: "Agile",
        para: "I love the flexibilty that comes from an Agile workflow",
        logo: agile,
        bulletOne: "This skill was used in the last 2 of my portfolio projects",
        bulletTwo: "The flexibility was especially useful when working on the group project",
        bulletThree: "Currently continuing to utilize this work flow as I build out my portfolio projects"
      },

    ],
    icon: MdArrowForward,
  },
  // services: {
  //   title: "Soft Skills",
  //   subtitle: "",
  //   service_content: [
  //     {
  //       title: "Web Development",
  //       para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
  //       logo: services_logo1,
  //     },
  //     {
  //       title: "ui / ux DESIGNING",
  //       para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
  //       logo: services_logo2,
  //     },
  //     {
  //       title: "PhotoShop Editing",
  //       para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
  //       logo: services_logo3,
  //     },
  //   ],
  // },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATIONS",
    image: person_project,
    project_content: [
      {
        title: "Coder's Gambit",
        image: codersGambit
      },
      {
        title: "Routinica",
        image: routinica,
      },
      {
        title: "No Room At the Inn",
        image: noroominn,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "WHAT PEOPLE ARE SAYING",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "About Me",
    subtitle: "IN CASE YOU WERE WONDERING",
    image1: Hireme_person,
    para: AboutMeContent(),

    btnText: "Connect on LinkedIn",
    btnLink: "https://www.linkedin.com/in/dave-sexton-jr/"
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "davesextonjr@gmail.com",
        icon: GrMail,
        link: "mailto:davesextonjr@gmail.com",
      },
      {
        text: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/dave-sexton-jr/",
      },
      {
        text: "GitHub",
        icon: FaGithub,
        link: "https://github.com/davesextonjr",
      },
      {
        text: "434.208.8276",
        icon: MdCall
      },
    ],
  },
  Footer: {

  },
};
