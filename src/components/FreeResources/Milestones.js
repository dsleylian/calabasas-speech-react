import React from 'react';
import { Link } from 'react-router-dom';

export default function Milestones() {
    return (
        <div className="container resources-page">
            <div className="row align-items-center mt-5">
                <div className="col-12 col-md-4 col-lg-3">
                    <p className="milestone-title">Developmental Milestones</p>
                </div>
                <div className="col">
                    <p>Here is a <a className="in-text-link" target="_blank" rel="noreferrer" href="https://www.cdc.gov/ncbddd/actearly/milestones/index.html" >link to the CDC guidelines</a> for language develpomental milestones, or you can open the pdf for download <a target="_blank" rel="noreferrer" className="in-text-link" href="https://www.cdc.gov/ncbddd/actearly/pdf/checklists/Checklists-with-Tips_Reader_508.pdf" >here.</a></p>
                    <p>University of Michigan Health System's developmental milestones are available <a className="in-text-link" target="_blank" rel="noreferrer" href="https://www.mottchildren.org/posts/your-child/developmental-milestones" >here.</a></p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-md-4 col-lg-3">
                    <p className="milestone-title">Receptive and Expressive Language</p>
                </div>
                <div className="col">
                    <p>Caroline Bowen has <a className="in-text-link" target="_blank" rel="noreferrer" href="https://www.speech-language-therapy.com/index.php?option=com_content&view=article&id=34:ages&catid=11:admin&Itemid=117">a great outline</a>  of the milestones for receptive and expressive language skills.</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-md-4 col-lg-3">
                    <p className="milestone-title">Speech Sound Development</p>
                </div>
                <div className="col">
                    <p>Below is a chart of speech sound develoments, which is also availbale <a className="in-text-link" target="_blank" rel="noreferrer" href="https://www.asha.org/siteassets/Practice-Portal/Late-Language-Emergence/Consonant-Acquisition-Chart.pdf"> here.</a> The black bars represent the age period during which these sounds are typically acquired.</p>
                </div>
            </div>
            <div className="row">
                <div className="col text-center ">
                    <img className="img-fluid" src="../images/Consonant-Acquisition-Chart.jpg" alt="sounds acquisiton chart"width="700" />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12 text-center mt-4 mb-3">
                    <p className="milestone-title">If you have any concerns, please <Link to='/contactus'>contact us</Link> for a free consultation.</p>
                </div>
            </div>
        </div>
    )
}
