import React, { useState } from "react";
const acoridan = { margin: "5px" };

const title = {
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
  const [visible, setVisible] = useState(props.expand);
  return (
    <div className="acordian" style={{ ...acoridan }}>
      <div
        className="Title"
        style={{ ...title }}
        onClick={ev => {
          setVisible(!visible);
          if (props.onChange) {
            props.onChange(visible);
          }
        }}
      >
        {props.title}
        <i className="hook" style={{ ...hook }}>
          {visible ? ">" : "<"}
        </i>
      </div>
      {visible && (
        <div className="Content" data-toggle={visible} style={{ ...content }}>
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Acrodian;
