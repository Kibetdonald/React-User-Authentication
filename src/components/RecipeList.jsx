import { React, useState } from "react";
import items from "../Assets/Data/recipe";
import RecipeMenu from "./RecipeMenu";

export default function RecipeList() {
  const [menuItem, setMenuItem] = useState(items);

  return (
    <div className="RecipeSection">
      <RecipeMenu menuItem={menuItem} />
    </div>
  );
}
