import "../css/Cart.css"
import vector from "../images/Vector.png"

function Cart({title, price, saledPrice, sale, saleDuration}){
    return(
        <div className="cart">
            <div className="salePart">{sale ? <><span>{sale}</span><span>50%</span></> : <span>50%</span>}</div>
            <h2>{title}</h2>
            <div>
                <p className="price"><span>{price}</span> {saledPrice}</p>
                <span>per user/month</span>
            </div>
            <ul>
                <li><img src={vector} alt="" /> 14-day free trial</li>
                <li><img src={vector} alt="" />Access to All Features</li>
                <li><img src={vector} alt="" />24/7 Support</li>
            </ul>
            <button>GET YOUR DEAL</button>
            {saleDuration ? <span className="saleDuration">{saleDuration}</span> : null}
        </div>
    )
}
export default Cart