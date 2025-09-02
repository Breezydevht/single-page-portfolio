import Header from "@/components/Header/Header.jsx";
import {PatternRing, PatternCircle} from "@/components/Pattern/PatternRing.jsx";
import { useState, useEffect } from "react";
export default function App() {

   const [links, setLinks] = useState([]);

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

        <div className="absolute z-[1] top-[10.5rem] max-w-[530px] max-h[129px]">
          <PatternRing className={"relative object-cover left-[-50%] "}/>
        </div>

        <div className="absolute z-[99] top-[15.5rem] right-0 w-[129px] h-[129px] md:top-[22rem] lg:top-[23rem] lg:right-[44%] overflow-hidden lg:overflow-visible">
          <PatternCircle className={" relative object-cover right-[-50%]"}/>
        </div>

      <Header links={links} />
      
    </div>
  );
}