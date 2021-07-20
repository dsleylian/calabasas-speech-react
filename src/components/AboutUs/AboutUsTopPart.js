import React, { Component } from 'react'
import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        aboutUsSettingData: state.aboutUsSettingData,
    }
}

class AboutUsTopPart extends Component {
    render() {
        
        return (
            <div className="aboutUsTopDiv">
            <div className="blocksbackground">
            </div>
                <h3 className="aboutush3 ">About us</h3>
                <div className="container">
                    <div className="row content-row">
                        <div className="col text-center mb-3 mx-4">
                            <p className="about-us-p">We are a family oriented clinic; we believe that involving the patient's entire family & community in their speech and language therapy helps achieve maximal outcomes. </p>
                            <p className="about-us-p">We offer a variety of ways in which you can access therapy - the way which fits you best.</p>
                        </div>
                    </div>
                    
                    <div className="row content-row">
                        {this.props.aboutUsSettingData.map(setting => {
                            return(
                            <div className="col" key={setting.id} >
                                <div className="row"> 
                                    <div className="col text-center"> 
                                        <img className="locationimage" src={setting.image} alt={setting.alt} width="110px" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-4 text-center">
                                        <p className="location">{setting.title}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(AboutUsTopPart));