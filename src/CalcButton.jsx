import {IconButton} from "@fluentui/react";
import React from 'react';
import {Col, Container, Row} from "react-grid-system";

export const CalcButton = (props) => {
  return (
      <Row nowrap>
      <IconButton id={props.id} text="Calculate" iconProps={{iconName: 'CalculatorEqualTo'}} onClick={
        () => props.setState(
            (m) => {
              return {
                ...m,
                matrix: m.backingMatrix,
                matrix2: m.backingMatrix2,
              };
            }
        )
      }
      />
      </Row>
  );
}