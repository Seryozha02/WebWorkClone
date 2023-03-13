import Awards from "./Awards";
import Carts from "./Carts";
import '../css/SaleInfo.css'

function SaleInfo(){
    return(
        <div className="saleInfo">
            <p className="titleForSales">Benefit both ways - monthly or yearly</p>
            <Carts/>
            <Awards />
        </div>
    )
}
export default SaleInfo