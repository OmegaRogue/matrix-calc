import * as math from "mathjs";
import {Col, Row} from "react-grid-system";
import React from 'react';
import {Label} from "@fluentui/react";

export const TextArray = (props) => {
  let matrix;
  if (props.value == null) {
    matrix = math.zeros(props.size)
  } else {
    matrix = props.value
  }
  const workingMatrix = matrix.toArray();
  return (
      <Col nowrap fluid>
        {workingMatrix.map((v, i) => props.onRender(v, i))}
      </Col>
  );
}

export const TextMatrix = (props) => {
  return (
      <Col>
        {props.value.toArray().map(
            (value1, x) =>
                <Row nowrap>
                  {value1.map((value, y) => {
                    return <Label>{props.onRender(value,x,y)}</Label>
                  })}
                </Row>)}
      </Col>
  );
}