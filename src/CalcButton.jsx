import {IconButton} from "@fluentui/react";
import React from 'react';
import {Row} from "react-grid-system";

export const CalcButton = (props) => {
  return (
      <Row nowrap>
      <IconButton id={props.id} text="Calculate" iconProps={{iconName: 'CalculatorEqualTo'}} onClick={props.onClick}
      />
      </Row>
  );
}