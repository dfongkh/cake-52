import "./Cake.css";
import { Link } from "react-router-dom";

const Cake = ({ imageUrl, name, price, description, productId }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={name} />
      <div className="card-body">
        <p className="card-title">{name}</p>
        <p className="card-price">${price}</p>
        <p className="card-text">{description}</p>
        <Link className="card-btn" to={`/cake/${productId}`}>
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default Cake;
