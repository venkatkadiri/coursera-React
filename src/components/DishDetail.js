import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import { Loading } from "./LoadingComponent";

function RenderDish({ dish, isLoading, errMess }) {
  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{errMess}</h4>
        </div>
      </div>
    );
  } else if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle> {dish.name}</CardTitle>
            <CardText> {dish.description} </CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const RenderComments = ({ comments, dish, addComment }) => {
  const [clicked, setclicked] = useState(false);
  if (comments == null) {
    return <div></div>;
  }
  const cmnts = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          {comment.author}, &nbsp;
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(comment.date))}
        </p>
      </li>
    );
  });
  return (
    <div className="col-12 col-md-5 m-1">
      <h4> Comments </h4>
      <ul className="list-unstyled">{cmnts}</ul>
      <Button onClick={() => setclicked(true)}>Your Thoughts</Button>
      {clicked ? (
        <CommentForm
          click={clicked}
          set={setclicked}
          addcomment={addComment}
          dish={dish}
        />
      ) : null}
    </div>
  );
};

function DishDetail(props) {
  const dish = props.dish;

  if (dish == null) {
    return <div></div>;
  }
  // const dishItem = this.renderDish(dish);
  // const dishComment = this.renderComments(dish.comments);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="row">
        <RenderDish dish={dish} />
        <RenderComments
          comments={props.comments}
          dish={dish}
          addComment={props.addComment}
        />
      </div>
    </div>
  );
}

export default DishDetail;
