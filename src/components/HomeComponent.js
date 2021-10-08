import React from 'react';
import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {
    homePageData: state.DataReducer.homePageData,
    }
}

function HomeComponent(props) {

    return (
        <div className="container">
                    {props.homePageData.map(data => {
                        return(
                            <div key={data.id} className="row mt-5 align-items-center content-row">
                                <div className="col-12 col-md-5 col-lg-6 offset-md-1 text-center text-sm-left">
                                    <h3 className="home-h3">{data.title}</h3>
                                    <p className="home-p">{data.content}</p>
                                </div>
                                    <div className="col text-center">
                                        <img src={data.image} alt={data.alt} height="300px"/>
                                    </div>
                            </div>
                        );
                        }
                    )}
        </div>
    )

}

export default withRouter(connect(mapStateToProps)(HomeComponent));