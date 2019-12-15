import React, { Component } from 'react';

class Comments extends Component {
    goToNext = (event) => {
        this.props.history.push('/thanks');
    }

    render() {
        return(
            <div>
                <h4>Anything you'd like us to know?</h4>
                <input type="text" placeholder="" />

                <button onClick={this.goToNext}>next</button>
            </div>
        )
    }
}

export default Comments;