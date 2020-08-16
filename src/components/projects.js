import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1 className="pname">Burger App</h1>
          <p className="pstyle">
            In this application, the user is able to add new burger names and be
            able to devour it by clicking the Devour It! button.
          </p>
          <img className="pimage" src="/images/burgerapp.jpg"></img>
          <p className="plink">
            <a href="https://ckangkolo-burger.herokuapp.com/">Heroku</a> |
            <a href="https://github.com/ckangkolo16/burger">Github</a>
          </p>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1 className="pname">Weather App</h1>
          <p className="pstyle">
            In this app I was able to retrieve data from another application's
            API and tweaked it to create the weather dashboard. This app allows
            the user to view a 5 day forecast complete with Temp, Humidity, Wind
            Speed and UV Index based on any city searched{" "}
          </p>
          <img className="pimage" src="/images/weatherapp.png"></img>
          <p className="plink">
            <a href="https://ckangkolo16.github.io/weatherdashboard/">Github</a>
          </p>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1 className="pname">Refrigerator Companion</h1>
          <p className="pstyle">
            Refrigerator Companion is the first project I worked on with my
            classmates. The app was created with people like me in mind who lack
            in the cooking department. It is as easy to use as typing the food
            or meal you crave and the app provides you with different recipes
            and instructions on how to prepare your meal.
          </p>
          <img className="pimage" src="/images/refrigeratorcompanion.jpg"></img>
          <p className="plink">
            <a href="https://ckangkolo16.github.io/project-1-refrigerator-companion/">
              Github
            </a>
          </p>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1 className="pname"> Weekend Warrior App</h1>
          <p className="pstyle">
            The Weekend Warrior App is the most recent project developed by my
            classmates and I. It is a blog based application which lets you
            detail your weekend experiences(events) once you log in. Some unique
            add-ons to this application include a map which logs the different
            locations of your events.
          </p>
          <img className="pimage" src="/images/weekendwarrior.png"></img>
          <p className="plink">
            <a href="https://weekend-plan-warrior.herokuapp.com/">Heroku</a> |
            <a href="https://github.com/ckangkolo16/Weekend-Warrior">Github</a>
          </p>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <h1 className="pname"> Employee Directory App (React)</h1>
          <p className="pstyle">
            An employee directory app created using react which allows the user
            to search and sort by a number of different criterias{" "}
          </p>
          <img className="pimage" src="/images/employeedir.jpg"></img>
          <p className="plink">
            <a href="https://ckangkolo-employeedirectory.herokuapp.com/">
              Heroku
            </a>
            |
            <a href="https://github.com/ckangkolo16/employeedirectory">
              Github
            </a>
          </p>
        </div>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <div>
          <h1 className="pname">Workout Tracker App</h1>
          <p className="pstyle">
            This app allows users to create and track daily workouts. The user
            is also able to log and track multiple exercises in a workout on any
            given day.
          </p>
          <img className="pimage" src="/images/workouttracker.jpg"></img>
          <p className="plink">
            <a href="https://ckangkolo-workouttracker.herokuapp.com/">Heroku</a>{" "}
            |<a href="https://github.com/ckangkolo16/WorkoutTracker">Github</a>
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Burger App</Tab>
          <Tab>Weather App</Tab>
          <Tab>Refrigerator Companion App</Tab>
          <Tab>Weekend Warrior App</Tab>
          <Tab>Employee Directory App</Tab>
          <Tab>Workout Tracker App</Tab>
        </Tabs>

        <section className="projects-grid">{this.toggleCategories()}</section>
      </div>
    );
  }
}

export default Projects;
