import React, { Component } from 'react';
//import RecipeDetails from './RecipeDetails';
import PropTypes from 'prop-types';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = { showDetails: false, hover:false };
    }

    toggleDetails = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }

    mouseEnter = () => {
        this.setState({hover:true});
    }
    mouseLeave = () => {
        this.setState({hover:false});
    }

    render() {
        const details = this.state.showDetails ? <img style={{ width: 250 }} src={this.props.recipe.picture} alt="recipe picture" /> : null;
        const style = this.state.hover ? {backgroundColor : 'pink', cursor: 'pointer'} : null;
        return (
            <div>
                <h2>{this.props.recipe.name}</h2>
                <p>{this.props.recipe.ingredients}</p>
                <div style={style} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.toggleDetails}>
                    click{this.state.showDetails ? 'to hide' : 'for more details'}
                    {details}
                </div>
            </div>
        );
    }
}
export default Recipe;

Recipe.propTypes = {
    recipe: PropTypes.object
};
