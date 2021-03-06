import React from 'react';
import { connect} from 'react-redux';
import LetUsKnowModal from './LetUsKnowModal';

const mapStateToProps = state => {
    return {
        meetTheTeamData: state.DataReducer.meetTheTeamData
    }
}

function Therapists(props) {

        return (
            <div>
                <div>
                    {props.meetTheTeamData.map(therapist => {
                            return (
                                <div key={therapist.id} className="row content-row align-items-center me-1 ">
                                    <div className="col-md text-center">
                                        <img src={therapist.image} alt={therapist.alt} width="300px" />
                                    </div>
                                    <div className="col-lg-6  mx-3 ">
                                        <h5>{therapist.title}</h5>
                                        <p>{therapist.credentials}</p>
                                        <p className="meet-team-p">{therapist.info1}</p>
                                        <p className="meet-team-p">{therapist.info2}</p>
                                        <LetUsKnowModal therapist={therapist} />
                                    </div>
                                </div>
                            );
                        })}
                </div>
                
            </div>
        );
    
}

export default connect(mapStateToProps)(Therapists);