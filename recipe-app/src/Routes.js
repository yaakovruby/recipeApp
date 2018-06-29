import Switch from "react-router-dom/Switch";

import React from 'react';
import { Route } from "react-router-dom";
import RecipeList from "./recipeList";
import AddRecipe from "./AddRecipe";


const Routes = (
    <Switch>
        <Route path="/recipeList"  component={RecipeList} />
        <Route path="/addRecipe" component={AddRecipe} />
    </Switch>
);

export default Routes;