import timeTracking from "../images/TimeTracking.png"
import vector from "../images/Vector.png"
import "../css/TimeTracking.css"

function TimeTracking(){
    return(
        <div className="TimeTrackingDiv">
            <div className="TimeTrackingLeftSide">
                <h3>Time Tracking Software with Screenshots</h3>
                <p>See your team’s workflow from start to finish with the help of <strong>Time Tracking Software with screenshots</strong>. Get transparency into sensitive projects as if they are being accomplished right in front of you. You will stay on track and be aware of every detail of the project.</p>
                <a href="#" className="startTrialButton">Start My 14-day Free Trial</a>
                <ul>
                    <li className="list"><img src={vector} alt="vector" /> Complete transparency is guaranteed</li>
                    <li className="list"><img src={vector} alt="vector" /> Working hours are monitored with proof</li>
                    <li className="list"><img src={vector} alt="vector" /> Sensitive projects are done right in front of you</li>
                </ul>
            </div>
            <div className="TimeTrackingRightSide">
                <img className="ImgForTimeTracking" src={timeTracking} alt="image" />
            </div>
        </div>
    )
}

export default TimeTracking