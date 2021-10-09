import React , { Component }  from 'react';
import { 
    Button, Modal, ModalHeader, ModalBody, Label, Col} 
    from 'reactstrap';

import { LocalForm, Control, Errors } from 'react-redux-form';

const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isInteger = val => /\d/.test(val);

class BlogComment extends Component {

  state =  {
              isModalOpen: false,
              touched: {
                  rating: false,
              }
          }

  toggleModal = () => {
      this.setState({
          isModalOpen: !this.state.isModalOpen
      });
  }

  handleSubmit(values) {
      this.toggleModal();
     // this.props.postComment(this.props.campsiteId, values.rating, values.author, values.text);
      this.props.addComment(this.props.blogId, values.rating, values.author, values.text )
  }

  render(){
      return(
          <div className="text-center mb-3">
              <Button outline onClick={this.toggleModal}><i className="fa fa-pencil fa-lg" />Submit Comment</Button>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                  <ModalBody>
                      <LocalForm onSubmit={values => this.handleSubmit(values)}>
                          <div className="form-group">
                          <Label htmlFor="rating">Rating</Label>
                          <Control.select  model=".rating" name="rating" id="rating"
                                      className="form-control" 
                                      validators={{
                                          isInteger, 
                                      }}>
                                          <option >Select...</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                          </Control.select>
                          <Errors  className="text-danger"
                                      model=".rating"
                                      show="touched"
                                      component="div"
                                      messages={{
                                          isInteger: 'Must select a rating'
                                      }} />
                          </div>
                          <div className="form-group">
                              <Label  htmlFor="author">Your Name</Label>
                              <Control.text placeholder="Your Name" model=".author" name="author" id="author"
                                          className="form-control"
                                          validators={{
                                          minLength: minLength(2),
                                          maxLength: maxLength(15)
                                          }} />
                              <Errors
                                      className="text-danger"
                                      model=".author"
                                      show="touched"
                                      component="div"
                                      messages={{
                                          minLength: 'Must be at least 2 characters',
                                          maxLength: 'Must be 15 characters or less'
                                      }} />
                          </div>
                          <div className="form-group">
                              <Label htmlFor="text">Comment</Label>
                     
                              <Control.textarea rows="6" model=".text" name="text" id="text"
                                          className="form-control">
                              </Control.textarea>
                          </div>
                          <Col className="text-center align-self-center">
                            <Button className="mb-3" id="commentSubmitButton" type="submit">Submit</Button>
                          </Col>
                      </LocalForm>
                  </ModalBody>
              </Modal>
          </div>
      );
  }
}

export default BlogComment;