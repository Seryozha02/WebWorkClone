import prodMonitoring from "../images/ProductivityMonitoring.png";
import icon from "../images/icon.svg";
import reviewStars from "../images/reviewStars.svg";
import crowd from "../images/Crowd.png"
import capterra from "../images/capterra.png"
import getApp from "../images/GetApp.png"
import softwareuqqest from "../images/softwareuqqest.svg"
import "../css/ProductivityMonitoring.css"

function ProductivityMonitoring() {
  return (
    <div className="ProdMonitoringDiv">
      <div className="ProdMonitoringLeftSide">
        <h3>TBoost Productivity with Time Tracking</h3>
        <p>
          WebWork users reached a <strong>25% productivity</strong> increase due
          to accurate{" "}
          <a href="https://www.webwork-tracker.com/time-tracker-with-screenshots">
            time tracking
          </a>{" "}
          and{" "}
          <a href="https://www.webwork-tracker.com/employee-monitoring-software">
            real-time employee monitoring
          </a>
          . WebWork raises your productivity right in front of your eyes.
        </p>
        <a href="#" className="signUpButton">Sign Up for Free</a>
        <p className="creditReqInfo"><img src={icon} alt="image" />No credit card required</p>
        <div className="reviews">
          <img src={reviewStars} alt="review stars" />
          <span className="reviewInfo">1000+ reviews on</span>
        </div>
        <div className="partners">
          <img src={capterra} alt="" />
          <img src={crowd} alt="" />
          <img src={getApp} alt="" />
          <img src={softwareuqqest} alt="" />
        </div>
      </div>
      <div className="ProdMonitoringRightSide">
        <img className="ImgForProdMonitoring" src={prodMonitoring} alt="image" />
      </div>
    </div>
  );
}
export default ProductivityMonitoring;