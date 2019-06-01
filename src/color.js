import React, { Component } from "react";
import './box.css';

export default class ColorSelector extends Component {
    hue = 0; // red

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let value = this.hslToString(this.hue);
        console.log(value);
        this.updateUI(value);
    }

    handleClick(e) {
        let saturation = e.pageX - e.target.offsetLeft;
        let light = 100 - (e.pageY - e.target.offsetTop);
        let value = this.hslToString(this.hue, saturation, light);
        this.updateUI(value);
    }

    hslToString(hue=this.hue, saturation=100, light=50) {
        return 'hsl('+hue+', '+saturation+'%, '+light+'%)';
    }

    updateUI(value) {
        document.getElementById('selectedDisplay').style.background = value;
        document.getElementById('colorValue').value = value;
    }

    render() {
        return (
            <div id="box">
                <div id="colorBox" onClick={this.handleClick}/>
                <div id="selectedDisplay"/>
                <div>
                    <input type="text" disabled={true} id="colorValue"/>
                </div>
            </div>
        )
    }
}