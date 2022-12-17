import { ArticleCard, Heading } from "components";
import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Heading>Необычный блог</Heading>

      <div className="home_block">
        {[...Array(6)].map((article, index) => (
          <ArticleCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
