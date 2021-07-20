import React from 'react'
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        blogData: state.blogData,
    }
}

function BlogComponent(props) {
    return (
        <div className="container text-center">
            <h3 className="mt-3">Blog</h3>
            <div className="row">
                    {props.blogData.map(blog => {
                                return (
                                    <div className="col col-lg-4 text-center" key={blog.id}>
                                        <Link to={`/blog/${blog.id}`}>
                                            <p className="blogtitle">{blog.title}</p>
                                            <img height="150" src={blog.image} alt={blog.alt}/>
                                            <p className="bloglinks">{blog.description}</p>
                                        </Link>
                                    </div>
                                );
                            })}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(BlogComponent);