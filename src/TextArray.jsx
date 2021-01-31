import * as math from "mathjs";
import {Col, Row} from "react-grid-system";
import React from 'react';
import {SpinButton, Label} from "@fluentui/react";

export const TextArray = (props) => {
  const matrix = math.zeros(props.count)
  return (
      <Col nowrap fluid>
        {matrix.toArray().map((_, i) => props.render(i))}
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