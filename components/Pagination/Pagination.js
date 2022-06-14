import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ recipesPerPage, totalRecipes, paginate }) => {
  const recipeNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    recipeNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {recipeNumbers.map((number) => (
          <li key={number} className={{ border: "none", listStyle: "none" }}>
            <a className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
