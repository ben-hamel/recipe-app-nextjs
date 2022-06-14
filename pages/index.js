import SearchableRecipes from "../components/SearchableRecipes";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <SearchableRecipes />
    </div>
  );
}
