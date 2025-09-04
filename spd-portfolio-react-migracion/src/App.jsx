import Header from "@/components/Header/Header.jsx";
import HeroTitle from "@/components/Hero/HeroTitle.jsx";
import HeroDescription from "@/components/Hero/HeroDescription.jsx";
import {PatternRing, PatternCircle} from "@/components/Pattern/PatternRing.jsx";
import { useState, useEffect } from "react";
import { Button } from "./components/Button/Button";
export default function App() {

   const [links, setLinks] = useState([
    {
      _id: 1,
      url: "https://github.com/",
      title: "github",
    },
    {
      _id: 2,
      url: "https://www.linkedin.com/",
      title: "linkedin",
    },
    {
      _id: 3,
      url: "https://dribbble.com/",
      title: "frontendMentor",
    },
    {
      _id: 4,
      url: "https://www.behance.net/",
      title: "twitter",
    },
   ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/links")
      .then(res => res.json())
      .then(data => {
        setLinks(data);
      })
      .catch(err => console.error("❌ Error:", err));
  }, []);

  return (
    <div className="App relative z-0">

        <div className="absolute z-[-1] top-[10.5rem] max-w-[530px] max-h[129px]">
          <PatternRing className={"relative object-cover left-[-50%] lg:left-[-10%]"}/>
        </div>

        <div className="absolute z-[1] top-[15.5rem] right-0 w-[129px] h-[129px] md:top-[22rem] lg:top-[23rem] lg:right-[44%] overflow-hidden lg:overflow-visible">
          <PatternCircle className={" relative object-cover right-[-50%]"}/>
        </div>

      <Header links={links} />

      <main className="relative top-[380px] flex items-center md:items-start lg:items-center flex-col gap-5 md:top-2 md:left-0 z-0">

        <section className="flex flex-col items-center w-full gap-10 md:ml-6 md:max-w-[768px] lg:max-w-[1110px] lg:h-[575px] md:items-start z-0">
          <HeroTitle />
          <HeroDescription />
          <div className="lg:w-[400px] lg:flex lg:justify-center">
          <Button name="CONTACT ME"/>
          </div>
          
        </section>

      </main>
      
    </div>
  );
}