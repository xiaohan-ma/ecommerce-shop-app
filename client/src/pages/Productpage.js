import "../stylesheets/Productpage.css";
import ProductContainer from "../components/ProductContainer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { retrieveByCategory } from "../plugin/Products";

const Productpage = () => {
  // Checks to see the category page user has clicked on
  const location = useLocation();
  const category = location.state.state;

  // State variables
  const [productCollection, setProductCollection] = useState([]);

  async function getAllProducts() {
    const data = await retrieveByCategory(category);
    setProductCollection(data);
  }
  // Retrieves all products upon page render
  useEffect(() => {
    getAllProducts();
  }, [category]);

  // Render product tiles
  function renderProducts() {
    return productCollection.map((value, index) => {
      return <ProductContainer data={value} key={index} />;
    });
  }

  return (
    <div className="container">
      <div className="mainSection">
        <div className="titleSection">
          <div id="line"></div>
          <h2>
            {category.charAt(0).toUpperCase() + category.slice(1)}'s Collection
          </h2>
          <div id="line"></div>
        </div>
        <div className="filterSection">
          <ul id="filters"></ul>
        </div>
        <div className="collectionSection">{renderProducts()}</div>
      </div>
    </div>
  );
};

export default Productpage;
