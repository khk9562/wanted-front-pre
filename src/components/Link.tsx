import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }: any) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "4px",
      border: "0 none",
      backgroundColor: active ? "#555" : "#efefef",
      padding: "4px 8px",
      borderRadius: "5px",
      color: active ? "#eee" : "#555",
      fontWeight: active ? "500" : "300",
    }}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
