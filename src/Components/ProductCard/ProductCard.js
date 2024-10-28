import "./ProductCard.css";
import Data from "./Data";
// Icon
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function ProductCard() {
  return (
  <div className="mainContainer">
    {
        Data.map(({id, image, title, description, price}) => {
            return (
              <div key={id} className="box">
                <div className="card">
                  <div className="image">
                    <img src={image} alt="" />
                  </div>
                  <div className="desc">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <span>${price}</span>
                  </div>
                  <div className="star">
                    <FaStar className="icon" />
                    <FaStar className="icon" />
                    <FaStar className="icon" />
                    <FaRegStar className="icon" />
                    <FaRegStar className="icon" />
                  </div>
                </div>
                <button className="btn">Add To Cart</button>
              </div>
            );
        })
    }

  </div>
  )
}
export default ProductCard;