import SearchableRecipes from "../components/SearchableRecipes";
import styles from "../styles/Home.module.css";
import Pagination from "../components/Pagination";
import React, { useState } from "react";
import { apiKey } from "../config/apiKey";
import Recipes from "../components/Recipes/Recipes";

// const getSearchRecipes = async (query) => {
//   const response = await fetch(
//     `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=15&apiKey=${apiKey}`
//   );
//   const data = await response.json();
//   console.log("data", data);
//   setRecipes(data.results);
// };

export default function Home() {
  // const [recipes, setRecipes] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [recipePerPage, setRecipePerPage] = useState(5);

  return (
    <div className={styles.container}>
      <SearchableRecipes />
      {/* <Recipes recipes={recipes} /> */}
      {/* <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
    </div>
  );
}
