import "../css/FooterPartners.css";
import first from "../images/first.png";
import second from "../images/second.png";
import third from "../images/third.png";
import fourth from "../images/fourth.png";
import fifth from "../images/fifth.png";
import sixth from "../images/sixth.png";
import seventh from "../images/seventh.png";
import eight from "../images/eight.png";
import ninth from "../images/ninth.png";

function FooterPartners() {
  return (
    <>
      <div className="companiesTogether">
        <p className="companiesText">
          <h3>Trusted by 1000+ Companies</h3>
        </p>
        <div className="companies1">
          <div className="firstRow">
            <img className="first" src={first} alt="" />
            <img className="second" src={second} alt="" />
            <img className="third" src={third} alt="" />
            <img className="fourth" src={fourth} alt="" />
            <img className="fifth" src={fifth} alt="" />
          </div>
        </div>

        <div className="companies2">
          <div className="secondRow">
            <img className="sixth" src={sixth} alt="" />
            <img className="seventh" src={seventh} alt="" />
            <img className="eigth" src={eight} alt="" />
            <img className="ninth" src={ninth} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterPartners;
