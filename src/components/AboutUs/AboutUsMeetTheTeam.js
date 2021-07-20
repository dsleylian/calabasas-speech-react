import React from 'react';
import Therapists from './Therapists';

function AboutUsMeetTheTeam() {
    return (
        <div>
            <div className="row content-row mt-4">
                <div className="col offset-1 offset-md-2 ">
                    <h4 className="meetTeamh4">Meet the team</h4>
                </div>
            </div>
            <Therapists />
            
        </div>
    )
}

export default AboutUsMeetTheTeam;