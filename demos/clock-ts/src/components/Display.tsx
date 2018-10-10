import * as React from "react";
import * as PropTypes from "prop-types";
import DateTime from "../lib/DateTime";

const Display = (props: { date: Date; isDateVisible: boolean }) => (
  <div className="container-fluid">
    <div className="d-flex flex-row">
      <div className="col-md-4 mx-auto">
        <div className="display">
          <div className="display-time">
            {DateTime.toTimeString(props.date)}
          </div>
          {props.isDateVisible && (
            <div className="display-date">
              {DateTime.toDateString(props.date)}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

Display.defaultProps = {
  date: new Date(),
  isDateVisible: true
};

Display.propTypes = {
  date: PropTypes.object,
  isDateVisible: PropTypes.bool
};

export default Display;
