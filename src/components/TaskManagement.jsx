import taskManagememt from "../images/TaskManagement.png";
import googleIcon from "../images/googleIcon.png";
import icon from "../images/icon.svg";
import "../css/TaskManagement.css"

function TaskManagement() {
  return (
    <div className="TaskManagementDiv">
      <div className="TaskManagementLeftSide">
        <h3>Task Management Software</h3>
        <p>
          Manage your projects and tasks while tracking the time spent on them.
          On WebWork’s{" "}
          <a href="https://www.webwork-tracker.com/features/task-management">
            Task Management System
          </a>{" "}
          you can assign tasks, put deadlines and see how much time they take.
        </p>
        <div className="taskManagementButtons">
          <a href="#" className="signUpButton">
            Sign Up for Free
          </a>
          <a href="#" className="signUpGoogle">
            <img src={googleIcon} /> Sign Up with Google
          </a>
        </div>
        <p className="creditReqInfo"><img src={icon} alt="image" />No credit card required</p>
      </div>
      <div className="TaskManagementRightSide">
        <img className="ImgForTaskManagememt" src={taskManagememt} alt="image" />
      </div>
    </div>
  );
}
export default TaskManagement;
