import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Recipes.module.css";
const Recipes = ({ recipes }) => {
  return (
    <>
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
};

export default Recipes;
