import React, { Component } from "react";
import PropTypes from "prop-types";
import typeCheckDate from './functions/typeCheck'
import {
  roundDays,
  roundHours,
  roundMinutes,
  roundSeconds,
  returnDate
} from "./functions/calculations";

import {
//  Days,
  Hours,
  Minutes,
  Seconds
} from "./components/statelessComponents";
import "./countdown.css";


export default class Countdown extends Component {

  static displayName = "CountdownWrapper";

  constructor(props) {
    super(props);
    this.state = {
      currentDate: Date.now(),
      endDate: typeCheckDate(this.props.target),
      endDateType: typeof this.props.target,
      distanceToEnd: returnDate(this.props.target),
      distance: {
        days: roundDays(returnDate(this.props.target)),
        hours: roundHours(returnDate(this.props.target)),
        minutes: roundMinutes(returnDate(this.props.target)),
        seconds: roundSeconds(returnDate(this.props.target))
      }
    }
  }

  componentDidMount() {
    return (this.state.distanceToEnd < 0
      ? clearInterval(this.timer)
      : setInterval(this.timer, 1000)
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  timer = () => {
    let state = { ...this.state };
    let distance = { ...state.distance };

    this.setState({
      ...state,
      distanceToEnd: state.distanceToEnd - 1000,
      distance: {
        ...distance,
        days: roundDays(state.distanceToEnd),
        hours: roundHours(state.distanceToEnd),
        minutes: roundMinutes(state.distanceToEnd),
        seconds: roundSeconds(state.distanceToEnd)
      }
    });
  };

  renderComponent = () => {
    let distance = this.state.distanceToEnd;

    return (
      <div className="countdown__timerWrapper flex flex--space-evenly">
        <Hours val={roundHours(distance)} />
        <Minutes val={roundMinutes(distance)} />
        <Seconds val={roundSeconds(distance)} />
      </div>
    );
  };

  render() {
    let distance = this.state.distanceToEnd;
    return distance < 0 ? null : this.renderComponent();
  }
  
}

Countdown.propTypes = {
  target: PropTypes.oneOfType([
    PropTypes.instanceOf(Date).isRequired,
    PropTypes.number.isRequired
  ])
}


