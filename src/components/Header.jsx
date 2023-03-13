import "../css/Header.css";
import borderImg from "../images/borderImg.png";
import insideBorderImg from "../images/insideBorderImg.png";
import logoIcon from "../images/logoIcon.png";
import capterra from "../images/capterra.png";
import Crowd from "../images/Crowd.png";
import GetApp from "../images/GetApp.png";
import reviewStars from "../images/reviewStars.png";
import doneLogo from "../images/doneLogo.png";

function Header() {
  return (
    <>
      <nav>
        <div className="header">
          <p>
            <img className="logoIcon" src={logoIcon} alt="" />
            <span className="Web">Web</span>
            <span className="Work">Work</span>
          </p>
          <button>GET NOW</button>
        </div>
      </nav>

      <div className="afterHeaderPart">
        <div className="leftSide">
          <p>
            <span className="yellowSpan">CYBER MONDAY </span>
            <span className="whiteSpan">
              means <br /> an even{" "}
            </span>
            <span className="yellowSpan">BIGGER SALE</span>
          </p>
          <span className="motivationSentence">
            Cyber Monday saves you money,
            <br /> WebWork saves you time.
          </span>
          <button>SAVE BIG NOW</button>
          <span className="fourtheenDay">
            <img className="doneLogo" src={doneLogo} alt="" />
            14-day free trial | No credit card required
          </span>
          <div>
            <p className="starsText">
              <img className="reviewStars" src={reviewStars} alt="" />
              <p>
                {" "}
                Reviews from
                <span className="fiftyOneK">51K+</span> happy users below and
                beyond
              </p>
            </p>
          </div>
          <div className="reviewsFromCompanies">
            <img src={capterra} alt="" />
            <img src={Crowd} alt="" />
            <img src={GetApp} alt="" />
          </div>
        </div>

        <div className="rightSide">
          <img className="borderImg" src={borderImg} />
          <img className="insideBorderImg" src={insideBorderImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
