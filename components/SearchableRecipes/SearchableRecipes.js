import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/mbc-logo-en.svg";
import Link from "next/link";
import styles from "./SearchableRecipes.module.css";
import { BsSearch } from "react-icons/bs";
import { apiKey } from "../../config/apiKey";

function SearchableRecipes() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

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
      `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${apiKey}`
    );
    const data = await response.json();
    console.log("data", data);
    setRecipes(data.results);
  };

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

      {recipes.map((recipe) => (
        <div key={recipe.id} className={styles.recipeCardWrapper}>
          <Link href={`/${recipe.id}`}>
            <a>
              <div className={styles.recipeCard}>
                <div className={styles.recipeImage}>
                  <Image
                    src={`https://spoonacular.com/recipeImages/${recipe.id}-240x150.jpg`}
                    alt={recipe.title}
                    layout="fill"
                    className={styles.image}
                  />
                </div>

                <div className={styles.textContainer}>
                  <div className={styles.recipeName}>{recipe.title}</div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
}

export default SearchableRecipes;
