import React, { useState } from "react";
import PropTypes from "prop-types";
const acoridan = { margin: "5px" };

const header = {
  fontSize: "1rem",
  fontWeight: "800",
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "5px",
  border: "1px solid grey",
  borderRadius: "5px",
  backgroundColor: "rgb(196, 195, 195)",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer"
};

const hook = {
  transform: "rotate(90deg)",
  marginRight: "5px"
};

const content = {
  border: "1px solid grey",
  padding: "5px",
  height: "100%",
  marginTop: "-2px",
  backgroundColor: "white",
  marginBottom: "5px"
};

const Acrodian = props => {
  const { children, title, onChange, expand } = props;
  const [visible, setVisible] = useState(expand);

  return (
    <div className="acordian" style={{ ...acoridan }}>
      <div
        className="Title"
        style={{ ...header }}
        onClick={ev => setVisible(!visible)}
      >
        {title}
        {children && (
          <i className="hook" style={{ ...hook }}>
            {visible ? ">" : "<"}
          </i>
        )}
      </div>
      {visible && children && (
        <div className="Content" data-toggle={visible} style={{ ...content }}>
          {children}
        </div>
      )}
    </div>
  );
};

Acrodian.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

Acrodian.defaultProps = {
  title: "Title"
};
export default Acrodian;
