import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({
  strDrinkThumb,
  strDrink,
  strGlass,
  strAlcoholic,
  idDrink,
}) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={strDrinkThumb} alt="drink" />
        <div className="cocktail-footer">
          <h3>{strDrink}</h3>
          <h4>{strGlass}</h4>
          <p>{strAlcoholic}</p>
          <Link to={`cocktail/${idDrink}`} className="btn btn-primary">
            details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Cocktail;
