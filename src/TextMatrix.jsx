import * as math from "mathjs";
import {Col} from "react-grid-system";
import React from 'react';

export const TextMatrix = (props) => {
  const matrix = math.zeros(props.count)
  return (
      <Col nowrap fluid>
        {matrix.toArray().map((_, i) => props.render(i))}
      </Col>
  );
}