import React from 'react';

const Row = (props) => {
  const n = props.children.length;
  return <div style={{display: "grid", gridTemplateColumns: "repeat(" + n + ", 1fr)", ...props.style}}>
    {props.children}
  </div>;
}

export default Row;