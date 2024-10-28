import "./ProductCard.css";
import Data from "./Data";

function ProductCard() {
  return (
  <div className="mainContainer">
    {
        Data.map(({id, image, title, description, price}) => {
         <div key={id} className="box">
            <div className="card">
                <div className="image">
                    <img src={image} alt="" />

                </div>
            </div>
         </div>
        })
    }

  </div>
  )
}
export default ProductCard;