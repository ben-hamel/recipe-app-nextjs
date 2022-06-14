import React from "react";
import styles from "./RecipeDetail.module.css";
import Image from "next/image";

function removeHTML(str) {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
}

function RecipeDetail({ props }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.imageWrapper}>
        <Image
          src={props.image}
          width={480}
          height={360}
          layout="responsive"
          objectFit="contain"
          alt={"picture of " + props.title}
        />
      </div>
      <h2>Health Info</h2>
      {props.diets.length > 0 && (
        <ul>
          {props.diets.map((diet) => (
            <li key={diet}>{diet}</li>
          ))}
        </ul>
      )}
      {props.diets.length < 1 && <div>No diet information</div>}
      <h2>Ingredients</h2>
      {props.extendedIngredients.map((ingredient, index) => (
        <div key={ingredient.name + index}>
          {ingredient.name} - {ingredient.amount} {ingredient.unit}
        </div>
      ))}
      <h2>Cooking Instructions</h2>
      <div>{removeHTML(props.instructions)}</div>
    </div>
  );
}

export default RecipeDetail;
