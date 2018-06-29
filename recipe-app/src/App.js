import React, { Component } from 'react';
import RecipeList from './recipeList';
import AddRecipe from './AddRecipe';
import './App.css';
import { Link, Redirect } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
//import Switch from "react-router-dom/Switch";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          name: "Blueberry",
          ingredients: ["blueberries ", "yogurt ", "sugar"],
          id: 1,
          picture: 'blueberry.jpg'
        },
        {
          name: "Cherry Vanilla",
          ingredients: ["cherries ", "yogurt ", "sugar"],
          id: 2,
          picture: 'cherry.jpg'
        },
        {
          name: "Tropical",
          ingredients: ["tropical fruit ", "yogurt ", "sugar"],
          id: 3,
          picture: 'tropical.jpg'
        },
        {
          name: "Strawberry",
          ingredients: ["starwberries ", "yogurt ", "sugar"],
          id: 4,
          picture: 'strawberry.jpg'
        }
      ]
    };
  }

    addRecipe = recipe => {
      const recipes = [...this.state.recipes,recipe];
      this.setState({recipes:recipes});
    }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
        </div>
        <div>
          <h1 className="text-center">Yaakov's Recipes</h1>
        </div>
        <Link to="/recipeList">See Our Recipes</Link>| <Link to="/addRecipe">Add A Recipe</Link>
        <hr />
        <Switch>
        <Redirect exact from="/" to="/recipeList" />
        <Route path="/recipeList"  render={() => <RecipeList recipes={this.state.recipes} />} />
        <Route path="/addRecipe" render={() => <AddRecipe addRecipe={this.addRecipe} />} />
        <Route render={() => <div>Sorry No Such Page Exists</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
