import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/mbc-logo-en.svg";
import Link from "next/link";
import styles from "./SearchableRecipes.module.css";
import { BsSearch } from "react-icons/bs";
import { apiKey } from "../../config/apiKey";
import Pagination from "../Pagination";
import Recipes from "../Recipes";

function SearchableRecipes() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipePerPage] = useState(5);
  const [cuisine, setCuisine] = useState("");

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("launch submit", query);
      getSearchRecipes(query);
      setQuery("");
      e.target.value = "";
    }
  };

  const _searchRecipes = (e) => {
    console.log("searching for recipes", query);
    getSearchRecipes(query);
    setQuery("");
  };

  const getSearchRecipes = async (query) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&number=20&apiKey=${apiKey}`
    );
    const data = await response.json();
    console.log("data", data);
    setRecipes(data.results);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //get current recipes
  const indexOfLastRecipe = currentPage * recipePerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <>
      <Image src={logo} width={217} height={43} alt="logo" />
      <div className={styles.searchWrapper}>
        <div className={styles.searchBar}>
          <input
            placeholder="Search for Recipes"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={_handleKeyDown}
            className={styles.searchBar}
          />
        </div>
        <button className={styles.searchButton} onClick={_searchRecipes}>
          <BsSearch />
        </button>
      </div>
      <div className="filterWrapper">
        <div className="filter">
          <label>Filter by Cuisine:</label>
          <select
            value={cuisine}
            onChange={(event) => setCuisine(event.target.value)}
          >
            <option value="">All</option>
            <option value="American">American</option>
            <option value="Asian">Asian</option>
            <option value="British">British</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="Spanish">Spanish</option>
            <option value="Thai">Thai</option>
            <option value="Vietnamese">Vietnamese</option>
          </select>
        </div>
      </div>
      <Recipes recipes={currentRecipes} />
      <Pagination
        recipesPerPage={recipePerPage}
        totalRecipes={recipes.length}
        paginate={paginate}
      />
    </>
  );
}

export default SearchableRecipes;
