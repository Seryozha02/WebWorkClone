import Cart from "./Cart"
import "../css/Carts.css"

function Carts(){
    return(
        <div className="carts">
            <Cart title="Monthly" price="$4.99" saledPrice="$2.49" saleDuration="*for 6 months"/>
            <Cart title="Yearly" price="$4.09" saledPrice="$2.05" sale="18%+"/>
        </div>

    )
}
export default Carts