import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

class Thanks extends Component {
    componentDidMount() {
        this.getFeedback();
    }

    goToNext = (event) => {
        this.props.history.push('/');
    }

    postFeedback = (event) => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: 
        })
    }

    render() {
        return(
            <div>
                <h3>THANKS FOR GIVING US YOUR FEELS! You entered:</h3>
                <h5>How are you feeling? Answer: {this.props.store.info.feeling}</h5>


                <button onClick={this.postFeedback}>SUBMIT FEEDBACK</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Thanks);