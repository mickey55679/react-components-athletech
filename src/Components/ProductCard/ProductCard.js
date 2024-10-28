import './ProductCard.css';
import Data from './Data';

function ProductCard() {
  return (
  <div className='mainContainer'>
    {
        Data.map(({id, image, title, description, price}) => {
         
        })
    }

  </div>
  )
}
export default ProductCard;