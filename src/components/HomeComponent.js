import React, { Component } from 'react';
import { homePageData } from '../Data/homePageData';

export default class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            homePageData: homePageData,
        }
    }
    
    render() {
        return (
            <div class="container content-container">
                        {homePageData.map(data => {
                            return(
                                <div key={data.id} class="row mt-5 align-items-center content-row">
                                    <div class="col-12 col-md-5 col-lg-6 offset-md-1 text-center text-sm-left">
                                        <h3>{data.title}</h3>
                                        <p>{data.content}</p>
                                    </div>
                                        <div class="col text-center">
                                            <img src={data.image} alt={data.alt} height="300px"/>
                                        </div>
                                </div>
                            );
                            }
                        )}
            </div>
        )
    }
}
