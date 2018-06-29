import React, { Component } from 'react';

class AddRecipe extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            ingredients:'',
            id:0,
            picture:''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) =>{
        this.props.addRecipe({
            name:this.state.name,
            ingredients:this.state.ingredients,
            id:this.state.id,
            picture:this.state.picture
        });
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                <span>Name:</span>
                    <input name="name"
                            type="text"
                            onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    <span>Ingredients:</span>
                    <input name="ingredients"
                            type="text"
                            onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                <span>ID:</span>
                    <input name="id"
                            type="number"
                            onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                <span>Picture:</span>
                    <input name="picture"
                            type="text"
                            onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <input type="submit" value="Add Recipe" />
            </form>
        );
    }
}
export default AddRecipe;