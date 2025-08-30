import patternRings from "@/assets/images/pattern/pattern-rings.svg"
import patternCircles from "@/assets/images/pattern/pattern-circle.svg"
function PatternRing() {
    return (
        <img  src={patternRings} alt="Pattern Image 1" />
    );
};

function PatternCircle() {
    return (
        <img  src={patternCircles} alt="Pattern Image 2" />
    );
};

export { PatternRing, PatternCircle };