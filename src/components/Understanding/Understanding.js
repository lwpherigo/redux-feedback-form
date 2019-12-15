import React, { Component } from 'react';

class Understanding extends Component {
    goToNext = (event) => {
        this.props.history.push('/supported');
    }

    render() {
        return(
            <div>
                <h4>How well are you understanding the content?</h4>
                <input type="number" placeholder="1-5" />

                <button onClick={this.goToNext}>next</button>
            </div>
        )
    }
}

export default Understanding;