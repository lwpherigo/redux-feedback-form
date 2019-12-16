import React, { Component } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';

class Feelings extends Component {
    goToNext = (event) => {
        this.props.history.push('/understanding');
    }

    feedbackFieldChange = (event, keyword) => {
        this.setState({
            feedbackInfo: {
                ...this.props.info,
                [keyword]: event.target.value,
            }
        })
    }

    addFeelings = (event) => {
        this.props.dispatch({
            type: 'ADD_FEEDBACK',
            payload: this.props.info
        })
    }

    render() {
        return(
            <div>
                <h4>How are you feeling today?</h4>
                <input 
                    type="number" 
                    placeholder="1-5"
                    onChange={(event) => this.feedbackFieldChange(event, 'feeling')}
                />

                <button onClick={this.addFeelings} onClick={this.goToNext}>next</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Feelings);