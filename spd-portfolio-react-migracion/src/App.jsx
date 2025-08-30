import Header from "@/components/Header/Header.jsx";
import {PatternRing} from "@/components/Pattern/PatternRing.jsx";

export default function App() {
  return (
    <div className="App relative z-0 ">

      <div className="absolute z-[-1] top-[7.5rem] w-full left-[-50%] h-auto overflow-hidden">
      <PatternRing/>
      </div>

      <Header />
    </div>
  );
}