import CommChannels from "../images/CommChannels.png"
import "../css/CommunicationChannels.css"

function CommunicationChannels() {

    return(
        <div className="CommChannelsDiv">
      <div className="CommChannelsLeftSide">
        <h3>Communication Channels</h3>
        <p>
        A place where you do your work, track time and chat with your team. Discuss work on the same platform where you do it. Share files and attachments to make collaboration faster and more efficient.
        </p>
        <a href="#" className="signUpButton">
          Sign Up for Free
        </a>
      </div>
      <div className="CommChannelsRightSide">
        <img className="ImgForCommChannels" src={CommChannels} alt="image" />
      </div>
    </div>
    )
}

export default CommunicationChannels;