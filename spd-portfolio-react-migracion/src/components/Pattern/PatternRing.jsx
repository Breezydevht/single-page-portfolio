import patternRings from "@/assets/images/pattern/pattern-rings.svg"
import patternCircles from "@/assets/images/pattern/pattern-circle.svg"
function PatternRing({ className }) {
    return (
        <img  src={patternRings} alt="Pattern Image 1" className={`${className}`} />
    );
};

function PatternCircle({ className }) {
    return (
        <img  src={patternCircles} alt="Pattern Image 2" className={`${className}`} />
    );
};

export { PatternRing, PatternCircle };