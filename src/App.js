import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import { actions } from 'react-redux-form';
import { addComment } from './redux/ActionCreators';

import Home from './components/HomeComponent';
import AboutUs from './components/AboutUsComponent';
import FreeResources from './components/FreeResourcesComponent';
import ContactUs from './components/ContactUsComponent';
import BlogComponent from './components/BlogComponent';
import BlogDisplay from './components/FreeResources/BlogDisplay';

const mapStateToProps = state => {
    return {
        blogData: state.DataReducer.blogData,
    }
}

const mapDispatchToProps = {
    resetContactForm: () => (actions.reset('contactUsForm')),
    addComment: (blogId, rating, author, text) => (addComment(blogId, rating, author, text))
};

class App extends Component {

    render() {
    
        const BlogWithId = ({match}) => {
            const currentBlog = this.props.blogData.filter(blog => blog.id === +match.params.blogid)[0];
            return (
                <BlogDisplay blog={currentBlog} addComment={this.props.addComment}/>
            );
        }


        return (
            <div className="App">
                <Header />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/aboutus' component={AboutUs}/>
                        <Route path='/freeresources'  component={FreeResources}/>
                        <Route exact path='/contactus' render={() => <ContactUs resetContactForm={this.props.resetContactForm} /> } />
                        <Route path='/blog/:blogid' component={BlogWithId} />
                        <Route exact path='/blog' component={BlogComponent} />
                        <Redirect to='/' /> 
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
