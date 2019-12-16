import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Supported extends Component {
    goToNext = (event) => {
        this.props.history.push('/comments');
    }

    render() {
        return(
            <div>
                <h4>How well do you feel supported?</h4>
                <input type="number" placeholder="1-5" />

                <button onClick={this.goToNext}>next</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Supported);