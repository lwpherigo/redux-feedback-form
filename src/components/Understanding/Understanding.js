import React, { Component } from 'react';

class Understanding extends Component {
    goToNext = (event) => {
        this.props.history.push('/supported');
    }

    feedbackFieldChange = (event, keyword) => {
        this.setState({
            feedbackInfo: {
                ...this.props.info,
                [keyword]: event.target.value,
            }
        })
    }

    addUnderstanding = (event) => {
        this.props.dispatch({
            type: 'ADD_FEEDBACK',
            payload: this.props.info
        })
    }

    render() {
        return(
            <div>
                <h4>How well are you understanding the content?</h4>
                <input 
                    type="number"  
                    placeholder="1-5" 
                    onChange={(event) => this.feedbackFieldChange(event, 'understanding')}
                />

                <button onClick={this.addUnderstanding} onClick={this.goToNext}>next</button>
            </div>
        )
    }
}

export default Understanding;