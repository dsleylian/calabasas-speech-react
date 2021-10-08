import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import BlogNav from './BlogNav';

const mapStateToProps = state => {
    return {
        blogData: state.DataReducer.blogData,
    }
}

function BlogDisplay({blog}) {

    let link;

    if(blog.hasOwnProperty("info2Link")){
        link = <p>
                    <a className="in-text-link" target="_blank" rel="noreferrer" href={blog.info2Link} >Read the article here.</a>
              </p>
    }


    
    return (
        <div>
            <BlogNav />
            <h2 className="blog-title mb-5">{blog.title}</h2>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <h3>{blog.info1Title}</h3>
                        <p>{blog.info1}</p>
                    </div>
                    <div className="col-12 col-sm-3 text-center text-sm-left">
                        <img src={blog.info1image} width="200" alt={blog.info1imageAlt} />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <h3>{blog.info2Title}</h3>
                        <p>{blog.info2}</p>
                        {link}
                    </div>
                    <div className="col-12 col-sm-3 text-center text-sm-left">
                        <img src={blog.info2image} width="200" alt={blog.info2imageAlt} />
                    </div>
                </div>
                <div className="row align-items-center mb-5">
                    <div className="col">
                        <h3>{blog.info3Title}</h3>
                        <p>{blog.info3}</p>
                    </div>
                    <div className="col-12 col-sm-3 text-center text-sm-left">
                        <img src={blog.info3image} width="200" alt={blog.info3imageAlt} />
                    </div>
                </div>
            </div>
            <BlogNav />
        </div>
    )
}

export default connect(mapStateToProps)(BlogDisplay);