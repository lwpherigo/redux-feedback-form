import React, { Component } from 'react';

class Feelings extends Component {
    goToNext = (event) => {
        this.props.history.push('/understanding');
    }

    render() {
        return(
            <div>
                <h4>THANKS FOR GIVING US YOUR FEELS! You entered:</h4>
                
            </div>
        )
    }
}

export default Feelings;