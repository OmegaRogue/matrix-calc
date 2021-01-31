import {IconButton} from "@fluentui/react";
import React from 'react';
import {Row} from "react-grid-system";
import * as math from 'mathjs';

export const CalcButton = (props) => {
  return (
      <Row nowrap>
      <IconButton id={props.id} text="Calculate" iconProps={{iconName: 'CalculatorEqualTo'}} onClick={
        () => props.setState(
            (m) => {
const result =math.multiply(math.inv(m.backingMatrix),m.backingMatrix2)
console.log(result);
const size = result.size();
size[1] = 1;
result.resize(size);
              return {
                ...m,
                matrix3: result
              };
            }
        )
      }
      />
      </Row>
  );
}