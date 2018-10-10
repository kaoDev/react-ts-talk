import * as React from "react";

type SetState<S> = React.Component<{}, S>["setState"];

type ComponentRenderFunction<S> = (args: Args<S>) => React.ReactNode;

interface Args<S> {
  state: S;
  setState: SetState<S>;
  forceUpdate: (callBack?: () => void) => void;
}

type ChildrenOrRender<S> =
  | {
      render?: undefined;
      children: ComponentRenderFunction<S> | React.ReactNode;
    }
  | {
      render: ComponentRenderFunction<S>;
      children?: undefined;
    };

type Props<S> = ChildrenOrRender<S> & {
  initialState?: S;
  didMount?: (args: Args<S>) => void;
  shouldUpdate?: (
    args: {
      state: S;
      nextState: S;
    }
  ) => boolean;
  willUnmount?: (
    args: {
      state: S;
    }
  ) => void;
  didUpdate?: (
    args: Args<S> & {
      prevState: S;
    }
  ) => void;
};

export class Component<S extends {}> extends React.Component<Props<S>, S> {
  state = this.props.initialState || ({} as S);

  private _setState: SetState<S> = (state, callback) => {
    this.setState(state, callback);
  };

  private _forceUpdate = (callBack?: () => void) => this.forceUpdate(callBack);

  getArgs(): Args<S> {
    return {
      state: this.state,
      setState: this._setState,
      forceUpdate: this._forceUpdate
    };
  }

  componentDidMount() {
    if (this.props.didMount) {
      this.props.didMount(this.getArgs());
    }
  }

  shouldComponentUpdate(_: Props<S>, nextState: S) {
    if (this.props.shouldUpdate) {
      return this.props.shouldUpdate({
        state: this.state,
        nextState
      });
    } else {
      return true;
    }
  }

  componentWillUnmount() {
    if (this.props.willUnmount) {
      this.props.willUnmount({
        state: this.state
      });
    }
  }

  componentDidUpdate(_: Props<S>, prevState: S) {
    if (this.props.didUpdate) {
      this.props.didUpdate({
        ...this.getArgs(),
        prevState
      });
    }
  }

  render() {
    const { children, render } = this.props;
    return children
      ? typeof children === "function"
        ? (children as ComponentRenderFunction<S>)(this.getArgs())
        : children
      : render
        ? render(this.getArgs())
        : null;
  }
}

/*
export const Clock2 = () => (
  <Component<State>
    initialState={{
      date: new Date(),
      isDateVisible: true
    }}
    didMount={({ setState }) => {
      setState({
        timer: window.setInterval(() => {
          setState(() => ({ date: new Date() }));
        }, 1000)
      });
    }}
    willUnmount={({ state }) => {
      window.clearInterval(state.timer);
    }}
  >
    {({ setState, state }) => {
      const toggleDate = () =>
        setState(prevState => ({ isDateVisible: !prevState.isDateVisible }));

      return (
        <div>
          <Panel toggleDate={toggleDate} dateOn={state.isDateVisible} />
          <Display date={state.date} isDateVisible={state.isDateVisible} />
        </div>
      );
    }}
  </Component>
);


*/
