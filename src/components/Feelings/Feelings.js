import React, { Component } from 'react';

class Feelings extends Component {
    goToNext = (event) => {
        this.props.history.push('/understanding');
    }

    render() {
        return(
            <div>
                <h4>How are you feeling today?</h4>
                <input type="number" placeholder="1-5" />

                <button onClick={this.goToNext}>next</button>
            </div>
        )
    }
}

export default Feelings;