import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render() {
        return (
            <div className="navbar bg-primary">
                <h2>
                <i className="fab fa-github" />
                {
                    this.props.title
                }
                </h2>
            </div>
        );
    }
}

export default NavBar;