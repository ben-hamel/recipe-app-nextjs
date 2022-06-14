import React from "react";
import Image from "next/image";
import RecipeDetail from "../components/RecipeDetail";
import { apiKey } from "./../config/apiKey";

Recipe.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${query.id}/information?apiKey=${apiKey}`
  );
  const data = await response.json();
  console.log("data", data);
  return { props: data };
};

function Recipe({ props }) {
  return <RecipeDetail props={props} />;
}

export default Recipe;
