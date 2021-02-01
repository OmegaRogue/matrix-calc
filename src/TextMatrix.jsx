import * as math from "mathjs";
import React from 'react';
import Col from "./Col";
import Row from "./Row";

export const TextMatrix = (props) => {
  const matrix = props.value ?? math.identity(props.size);
  const workingMatrix = matrix.toArray();
  return (
      <Row>
        {workingMatrix.map(
            (value1, x) => <>{value1.map((value, y) => <>{props.onRender(value, x, y)}</>)}</>
        )}
      </Row>
  );
}

export const TextVector = (props) => {
  const matrix = props.value ?? math.zeros(props.size, 1);
  const styles = props.styles ?? {wrapper: {}};
  const workingMatrix = matrix.toArray();
  return (
      <Col style={styles.wrapper}>
        {workingMatrix.map((v, i) => <>{props.onRender(v, i)}</>)}
      </Col>
  );
}