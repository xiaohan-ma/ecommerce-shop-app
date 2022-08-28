import { useState, useEffect } from "react";
import FeaturedProduct from "../components/Featured";
import PromoBanner from "../icons/PromoBanner.jpg";
import { retrieveFeatured } from "../plugin/Products";
import "../stylesheets/Homepage.css";

const Homepage = () => {
  // State variables
  const [featuredCollection, setFeaturedCollection] = useState([]);

  async function getFeatured() {
    const data = await retrieveFeatured();
    setFeaturedCollection(data);
  }
  // Retrieves all featured products whenever state variable changes
  useEffect(() => {
    getFeatured();
  }, [featuredCollection]);

  return (
    <div className="container">
      <div className="promoSection">
        <div id="promo">
          <img alt="promotional banner" src={PromoBanner} />
        </div>
      </div>
      <div className="featuredCollection">
        <div id="line"></div>
        <h1>Featured Collection</h1>
        <div id="featuredCollection">
          {featuredCollection.map((value, index) => {
            return <FeaturedProduct data={value} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
