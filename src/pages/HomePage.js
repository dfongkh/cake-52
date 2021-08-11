import "./HomePage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import CakeBanner from "../components/CakeBanner";
import Cake from "../components/Cake";
import About from "../components/About";
import ScrollToTop from "../components/ScrollToTop";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomePage = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div id="homepage" className="homepage">
      <CakeBanner />
      <div className="cake-container">
        {products.map((product) => (
          <Cake
            key={product._id}
            productId={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
