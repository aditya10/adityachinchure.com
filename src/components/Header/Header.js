import React, { Component } from 'react';
import Nametag from '../Nametag/Nametag';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: this.props.source
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.source !== prevProps.source) {
            console.log(this.props.source);
            this.setState({source: this.props.source})
        }
    }
    render() {
        return (
            <div className="col-log-12 photo-header">
                <div className="photo">
                    <img src={this.state.source} />
                </div>
                <div className="col-lg-12 details-row">
                    <Nametag/>
                </div>
            </div>
        )
    }
};

export default Header;