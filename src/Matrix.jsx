import {Col, Row} from "react-grid-system";
import {SpinButton} from "@fluentui/react";
import React from 'react';

export const Matrix = (props) => {
  return (
      <Col>
        {
          props.value.toArray().map(
              (value1, x) =>
                  <Row nowrap>
                    {value1.map((value, y) => {
                          if (props.readOnly) {
                           return <SpinButton
                                readOnly
                                step={0.0001}
                                value={value}
                                onChange={(e, n) => {
                                  const f = parseFloat(n);
                                  props.onChange(x, y, f);
                                }}
                                styles={{root: {width: '1em'}}}/>
                          } else {
                           return <SpinButton
                                readOnly={props.readOnly}
                                step={0.0001}
                                defaultValue={value}
                                onChange={(e, n) => {
                                  const f = parseFloat(n);
                                  props.onChange(x, y, f);
                                }}
                                styles={{root: {width: '1em'}}}/>
                          }
                        }
                    )
                    }
                  </Row>
          )
        }
      </Col>
  );
}
