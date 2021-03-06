import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';

class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    selectRecipe(recipe) {
        this.setState({ selectedRecipe: recipe });
    }
    render() {
        const recipes = this.props.recipes.map(recipe => (<li style={{ cursor: 'pointer' }} key={recipe.name} onClick={this.selectRecipe.bind(this, recipe)}>
            {recipe.name}
        </li>));

        const selectedRecipe = this.state.selectedRecipe ? <Recipe recipe={this.state.selectedRecipe} /> : null;
        return (
            <div>
                <ul>
                    {recipes}
                </ul>
                {selectedRecipe}
            </div>
        );
    }
}
export default RecipeList;

RecipeList.propTypes = {
    recipes: PropTypes.array,
};