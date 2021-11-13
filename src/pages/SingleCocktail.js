import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            idDrink,
            strDrink,
            strAlcoholic,
            strDrinkThumb,
            strCategory,
            strGlass,
            strInstructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            category: strCategory,
            glass: strGlass,
            instructions: strInstructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail({});
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);
  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back to home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt="cocktail" className=""></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {name}
            </p>
            <p>
              <span className="drink-data">category :</span> {category}
            </p>
            <p>
              <span className="drink-data">info :</span> {info}
            </p>
            <p>
              <span className="drink-data">glass :</span> {glass}
            </p>
            <p>
              <span className="drink-data">instructions :</span> {instructions}
            </p>
            <p>
              <span className="drink-data">ingredients :</span>{" "}
              {ingredients.map((ingredient, index) => {
                return ingredient ? (
                  <span key={index}>{ingredient}</span>
                ) : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCocktail;
