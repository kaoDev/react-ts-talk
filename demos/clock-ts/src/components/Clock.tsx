import * as React from "react";
import Display from "./Display";
import Panel from "./Panel";

interface Props {}
interface State {
  date: Date;
  isDateVisible: boolean;
}
class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
    isDateVisible: true
  };

  timer?: number;

  componentDidMount() {
    this.startTime();
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  startTime() {
    this.timer = window.setInterval(() => {
      this.setState(() => ({ date: new Date() }));
    }, 1000);
  }

  toggleDate = () => {
    this.setState(prevState => ({ isDateVisible: !prevState.isDateVisible }));
  };

  render() {
    return (
      <div>
        <Panel toggleDate={this.toggleDate} dateOn={this.state.isDateVisible} />
        <Display
          date={this.state.date}
          isDateVisible={this.state.isDateVisible}
        />
      </div>
    );
  }
}

export default Clock;
