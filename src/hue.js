import React, { Component } from "react";
import './hue.css';

export default class HueSelector extends Component {
    hue = 0; // red

    constructor(props) {
        super(props);
        this.state = {hue: props.hue};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.stopPropagation();
        // update the slider
        this.setState({hue: e.target.value});
        // send the change up
        this.props.onChange(e);
    }

    render() {
        return (
            <div className="hueSelector">
                <input type="range" defaultValue={this.state.hue} min={0} max={359}
                 onChange={this.handleChange}/>
            </div>
        )
    }
}