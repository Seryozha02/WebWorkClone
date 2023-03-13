import OnlReports from "../images/OnlReports.png"
import "../css/OnlineReports.css"

function OnlineReports() {

    return(
        <div className="OnlReportsDiv">
        <div className="OnlReportsLeftSide">
          <h3>Online Reports</h3>
          <p>
          WebWork Time Tracker offers detailed and timely reports that give accurate data about the 
            <a href="https://www.webwork-tracker.com/features/time-tracking">
            tracked hours,
            </a>
            <a href="https://www.webwork-tracker.com/features/activity-level"> productivity</a>
            level, 
            <a href="https://www.webwork-tracker.com/features/apps-website-monitoring"> apps and websites usage </a>
            and much more. It presents all this information in clear charts, graphs and tables so that you can analyze it easier.
          </p>
          <a href="#" className="signUpButton">
            Start 14-day Free Trial
          </a>
        </div>
        <div className="OnlReportsRightSide">
          <img className="ImgForOnlReports" src={OnlReports} alt="image" />
        </div>
      </div>
    )
}

export default OnlineReports;