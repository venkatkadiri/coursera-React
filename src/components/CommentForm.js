import React from "react";
import { Component } from "react";
import {
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormFeedback,
} from "reactstrap";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    console.log(this.props);

    this.state = {
      isModalOpen: this.props.click === true ? true : false,
      selected: { value: "1" },
      name: "",
      Comment: "",
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
    this.props.set(false);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Current State is: " + JSON.stringify(this.state));
    console.log(this.props);
    this.props.addcomment(
      this.props.dish.id,
      this.state.name,
      this.state.Comment,
      this.state.selected
    );
  };
  handleInputChange = (event) => {
    const feild = event.target;
    if (feild.type === "text") {
      this.setState({
        name: feild.value,
      });
    } else if (feild.type === "textarea") {
      this.setState({
        Comment: feild.value,
      });
    } else if (feild.type === "select-one") {
      this.setState({
        selected: feild.value,
      });
    }
  };
  validate = (name) => {
    let nameError = "";
    if (name === "") {
      nameError = "the name Cannot be empty";
    }
    return nameError;
  };

  render() {
    const nameErrorDisplay = this.validate(this.state.name);
    return (
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>
          Your Thoughts on the dish
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label htmlFor="rating">Rating</Label>
              <Input
                type="select"
                name="selected"
                id="selected"
                value={this.state.selected}
                onChange={this.handleInputChange}
              >
                <option value="1">1</option>
                <option value="2"> 2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onBlur={this.handleInputBlur}
                onChange={this.handleInputChange}
              />
              <FormFeedback>{nameErrorDisplay}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="comment">Comment</Label>
              <Input
                type="textarea"
                name="Comment"
                id="Comment"
                value={this.state.Comment}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default CommentForm;
