import React from 'react';

const Col = (props) => {
  const n = props.children.length;
  return <div style={{display: "grid", gridTemplateRows: "repeat(" + n + ", 1fr)", ...props.style}}>
    {props.children}
  </div>;
}

export default Col;