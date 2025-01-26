import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";

class Timer extends Component {
  state = {
    time: Date.now(),
    timeToNow: formatDistanceToNow(Date.now(), { includeSeconds: true }),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        timeToNow: formatDistanceToNow(this.state.time, {
          includeSeconds: true,
        }),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <span>{this.state.timeToNow}</span>;
  }
}

export default Timer;
