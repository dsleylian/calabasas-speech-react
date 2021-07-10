import React, { Component } from 'react'
import AboutUsTopPart from './AboutUs/AboutUsTopPart';
import AboutUsMeetTheTeam from './AboutUs/AboutUsMeetTheTeam';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <AboutUsTopPart />
                <AboutUsMeetTheTeam />
            </div>
        );
    }
}
