import React, { Component } from "react";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./ContactComponent";
import AboutUs from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

//importing actions
import {
  AddComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
} from "../Redux/ActionCreators";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    DISHES: state.dishes,
    COMMENTS: state.comments,
    PROMOTIONS: state.promotions,
    LEADERS: state.leaders,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, author, comment, rating) =>
    dispatch(AddComment(dishId, author, comment, rating)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
});

class Main extends Component {
  constructor(props) {
    super(props);
    console.log("this is the main component's constructor the props are:");
    console.log(this.props);
  }
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.DISHES.dishes.filter((dish) => dish.featured)[0]}
          promotion={
            this.props.PROMOTIONS.filter((promotion) => promotion.featured)[0]
          }
          leader={this.props.LEADERS.filter((leader) => leader.featured)[0]}
          dishesLoading={this.props.DISHES.isLoading}
          dishesErrMess={this.props.DISHES.errMess}
          promoLoading={this.props.PROMOTIONS.isLoading}
          promoErrMess={this.props.PROMOTIONS.errMess}
        />
      );
    };
    const DishWithId = ({ match }) => {
      console.log(match);
      return (
        <DishDetail
          dish={
            this.props.DISHES.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId)
            )[0]
          }
          comments={this.props.COMMENTS.filter(
            (comments) => comments.dishId === parseInt(match.params.dishId)
          )}
          addComment={this.props.addComment}
          isLoading={this.props.DISHES.isLoading}
          errMess={this.props.DISHES.errMess}
          commentsErrMess={this.props.COMMENTS.errMess}
        />
      );
    };
    const About = () => {
      return <AboutUs leaders={this.props.LEADERS} />;
    };
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => (
              <Menu
                dishes={this.props.DISHES.dishes}
                isLoading={this.props.DISHES.isLoading}
                errMess={this.props.DISHES.errMess}
              />
            )}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={About} />

          <Redirect to={HomePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
