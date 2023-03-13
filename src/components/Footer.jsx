import "../css/Footer.css";
import footer from "../images/footer.png";

function Footer() {
  return (
    <div className="footer">
      <div className="bothSides">
        <div className="footersleftSide">
          <h1>Save 50% Now</h1><br />
          <button>Get My Discount</button>
        </div>
        <div className="rightSide">
          <img className="footerImage" src={footer} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
