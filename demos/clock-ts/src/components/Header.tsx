import * as React from "react";
import * as PropTypes from "prop-types";

const Header = (props: { title: string }) => (
  <nav className="header navbar navbar-dark bg-dark">
    <div className="container">
      <div className="row m-auto">
        <i className="fa fa fa-clock-o fa-4x text-white" />
        <div className="h1 ml-3 my-auto text-light">{props.title}</div>
      </div>
    </div>
  </nav>
);

Header.defaultProps = {
  title: "Title"
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
