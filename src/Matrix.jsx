import {Col, Row} from "react-grid-system";
import {SpinButton} from "@fluentui/react";
import React from 'react';
import * as math from 'mathjs';

export const Matrix = (props) => {
  let matrix;
  if (props.defaultValue == null) {
    matrix = math.identity(props.size)
  } else {
    matrix = props.defaultValue
  }
  const workingMatrix = matrix.toArray();
  return (
      <Col>
        {
          workingMatrix.map(
              (row, x) =>
                  <Row nowrap>
                    {row.map((cell, y) => {
                          return <SpinButton
                              step={0.0001}
                              defaultValue={cell}
                              onChange={(e, n) => {
                                const f = parseFloat(n);
                                props.onChange(x, y, f);
                              }}
                              styles={{root: {width: '1em'}}}/>

                        }
                    )
                    }
                  </Row>
          )
        }
      </Col>
  );
}

export const Vector = (props) => {
  let matrix;
  if (props.defaultValue == null) {
    matrix = math.zeros(props.size, 1)
  } else {
    matrix = props.defaultValue
  }
  const workingMatrix = matrix.toArray();
  return (
      <Col>
        {
          workingMatrix.map(
              (row, x) =>
                  <Row nowrap>
                    {row.map((cell, y) => {
                          return <SpinButton
                              step={0.0001}
                              defaultValue={cell}
                              onChange={(e, n) => {
                                const f = parseFloat(n);
                                props.onChange(x, y, f);
                              }}
                              styles={{root: {width: '1em'}}}/>

                        }
                    )
                    }
                  </Row>
          )
        }
      </Col>
  );
}