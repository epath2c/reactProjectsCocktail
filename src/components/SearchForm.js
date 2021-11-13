import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchForm = React.useRef();
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  const searchCocktail = () => {
    setSearchTerm(searchForm.current.value);
  };

  // This will allows you when you renders the page, the input block is selected automatically
  // and you don't need to click the input to type.
  // You just render the page and then you can type with the focus function.
  return (
    <section className="section search">
      <form className="search-form" onSubmit={onFormSubmit}>
        <div className="form-control">
          <label>Search Your Favorite Cocktail</label>
          <input type="text" ref={searchForm} onChange={searchCocktail}></input>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
