import Typical from "react-typical";
import welcome from "../../../src/assets/images/welcome.png";
import Food from "../../../src/assets/images/Food.png"

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Hello , I´M Arbi Fares Sghaier ",
  headline: [
    <Typical
      loop={Infinity}
      steps={[
        "Full Stack Developer 💻",
        5000,
        "Passionated ❤️",
        5000,
        "Hard Worker 😌",
        5000,
        "Enthusiastic Dev 😁",
        5000,
      ]}
    />,
  ],
  description: " A passionated full stack developer from Tunisia",
  imgStart: "",
  img: [welcome],
  alt: "Credit Card",
};
export const homeObjTwo = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "E-Tafakna Mobile application (Startup)",
  headline: "Unique mobile application",
  description:
    "Unique mobile application which is offer for their users the possibility to sign in any contracts that is exist in their countries and send it to the second Part .",
  buttonLabel: "Learn More",
  imgStart: "",
  
  alt: "Vault",
};

export const homeObjThree = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Ordering Food Project",
  headline: "Super fast and simple Web site ",
  description:
    "A Web Site which is offer for their customers the possibility to order any type of our traditional tunisian Food and more  .",
  buttonLabel: "Start Now",
  imgStart: "start",
  img:  [Food],
  alt: "Vault",
};

export const homeObjFour = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "DATA ANALYTICS",
  headline: "Every transaction is stored on our secure cloud database",
  description:
    "Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",
  buttonLabel: "Sign Up Now",
  imgStart: "start",
  img: "images/svg-8.svg",
  alt: "Vault",
};
