import React, { Component } from "react";
import HueSelector from './hue.js';
import './box.css';

export default class ColorSelector extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.hueChange = this.hueChange.bind(this);
        this.state = {hue: 0, saturation: 100, light: 50}; //red
    }

    componentDidMount() {
        this.updateUI();
    }

    handleClick(e) {
        let saturation = e.pageX - e.target.offsetLeft;
        saturation = saturation > 100 ? 100 : saturation;
        let light = 100 - (e.pageY - e.target.offsetTop);

        this.setState({saturation: saturation, light: light}, this.updateUI);
    }

    hueChange(e) {
        let value = e.target.value;
        this.setState({hue: value}, this.updateUI);
    }

    hslToString() {
        let s = this.state;
        return 'hsl('+s.hue+', '+s.saturation+'%, '+s.light+'%)';
    }

    updateUI() {
        let value = this.hslToString();
        document.getElementById('colorBox').style.backgroundColor = value;
        document.getElementById('selectedDisplay').style.background = value;
    }

    render() {
        return (
            <div id="box">
                Select The Hue:
                <HueSelector onChange={this.hueChange} hue={this.state.hue}/>
                Select the Saturation/Light by clicking the square below:
                <div id="colorBox" onClick={this.handleClick}/>
                <div id="selectedDisplay"/>
                <div>
                    <input type="text" disabled={true} id="colorValue" value={this.hslToString()}/>
                </div>
            </div>
        )
    }
}