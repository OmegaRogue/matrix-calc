import {SpinButton, TextField} from "@fluentui/react";
import React from 'react';
import * as math from 'mathjs';
import Col from "./Col";
import Row from "./Row";

export const Matrix = (props) => {
  const matrix = props.defaultValue ?? math.identity(props.size);
  const workingMatrix = matrix.toArray();
  return (
      <Row>
        {workingMatrix.map((row, x) =>
            <>
              {row.map((cell, y) =>
                  <SpinButton step={0.0001} defaultValue={cell} onChange={(e, n) => {
                    const f = parseFloat(n);
                    props.onChange(x, y, f);
                  }}
                              iconButtonProps={{iconProps: {iconName: ''}}}
                              styles={{root: {maxWidth: "3em"}}}/>
              )}
            </>
        )}
      </Row>);
};

export const Vector = (props) => {
  const matrix = props.defaultValue ?? math.zeros(props.size, 1);
  const workingMatrix = matrix.toArray();
  return (
      <Col>
        {workingMatrix.map((v, i) =>
            <SpinButton step={0.0001} defaultValue={v} onChange={(e, n) => {
              console.log(e, n)
              const f = parseFloat(n);
              props.onChange(i, f);
            }} iconButtonProps={{iconProps: {iconName: ''}}}/>
        )}
      </Col>
  );
};

export const DisplayVector = (props) => {
  const matrix = props.defaultValue ?? props.value;
  const workingMatrix = matrix.toArray();
  return (
      <Col>
        {workingMatrix.map((v, i) =>
            <TextField readOnly value={v}/>
        )}
      </Col>
  );
};