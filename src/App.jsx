import React, {useState} from 'react';
import {
  Stack, ButtonGrid, SpinButton, ThemeProvider, ButtonGridCell, DefaultButton, mergeStyleSets,
  FocusZone, List, useConst, Image, MaskedTextField, TextField, PrimaryButton
} from '@fluentui/react';
import logo from './logo.svg'
import './App.css';
import {Checkbox} from '@fluentui/react/lib/Checkbox';
import {DarkTheme} from "@fluentui/theme-samples";

import {Container, Row, Col} from 'react-grid-system';
import * as math from 'mathjs';

const stackTokens = {childrenGap: 15};


export const App = () => {
  const [state, setState] = useState({
    rows: 3,
    columns: 3,
    matrix: math.zeros(3, 3),
    matrix2: math.zeros(3, 1),
    backingMatrix: math.zeros(3, 3),
    backingMatrix2: math.zeros(3, 1),
  });


  return (
      <ThemeProvider theme={DarkTheme}>
        <Stack
            horizontalAlign="center"
            verticalAlign="center"

            verticalFill={true}
            styles={{
              root: {
                width: '80%',
                margin: '0 auto',
              },
            }}
            tokens={stackTokens}
        >
          <Stack
              horizontalAlign="right">
            <SpinButton
                defaultValue="3"
                label={'Rows'}
                min={1}
                max={100}
                step={1}
                incrementButtonAriaLabel={'Increase value by 1'}
                decrementButtonAriaLabel={'Decrease value by 1'}
                styles={{
                  label: {
                    width: '3em'
                  }
                }}
                onChange={(e, n) => {
                  setState((m) => {
                    m.matrix.resize([parseInt(n), m.columns]);
                    m.matrix2.resize([parseInt(n), 1]);
                    m.backingMatrix.resize([parseInt(n), m.columns]);
                    m.backingMatrix2.resize([parseInt(n), 1]);
                    return {
                      matrix: m.matrix,
                      rows: parseInt(n),
                      columns: m.columns,
                      matrix2: m.matrix2,
                      backingMatrix: m.backingMatrix,
                      backingMatrix2: m.backingMatrix2,
                    };
                  });
                }}
            />
            <SpinButton
                defaultValue="3"
                label={'Columns'}
                min={1}
                max={100}
                step={1}
                incrementButtonAriaLabel={'Increase value by 1'}
                decrementButtonAriaLabel={'Decrease value by 1'}
                styles={{
                  label: {
                    width: '4em'
                  }
                }}
                onChange={(e, n) => {
                  setState((m) => {
                    m.matrix.resize([m.rows, parseInt(n)]);
                    m.backingMatrix.resize([m.rows, parseInt(n)]);
                    return {
                      matrix: m.matrix,
                      rows: m.rows,
                      matrix2: m.matrix2,
                      columns: parseInt(n),
                      backingMatrix: m.backingMatrix,
                      backingMatrix2: m.backingMatrix2,
                    };
                  });
                }}
            />
          </Stack>

          <Row>
            <Col>
              {state.matrix.toArray().map((value1, x) =>
                  <Row>
                    {value1.map((value, y) =>
                        <Col>
                          <TextField defaultValue={value}
                                     // styles={{wrapper: {width: '4em'}}}
                                     onChange={(e, n) => {
                                       setState((m) => {
                                         m.backingMatrix.subset(math.index(x, y), parseFloat(n))
                                         return {
                                           matrix: m.matrix,
                                           matrix2: m.matrix2,
                                           rows: m.rows,
                                           columns: m.columns,
                                           backingMatrix: m.backingMatrix,
                                           backingMatrix2: m.backingMatrix2,
                                         };
                                       });
                                     }}/>
                        </Col>
                    )}
                  </Row>
              )}
            </Col>
            <Col/>
            <Col>
              {math.ones(state.rows,1).toArray().map((value1, x) =>
                  <Row>
                    {value1.map((value, y) =>
                        <Col>
                          <TextField defaultValue={value}
                                     styles={{wrapper: {width: '4em'}}}
                                     readOnly/>
                        </Col>
                    )}
                  </Row>
              )}
            </Col>
            <Col>
              {state.matrix2.toArray().map((value1, x) =>
                  <Row>
                    {value1.map((value, y) =>
                        <Col>
                          <TextField defaultValue={value}
                                     styles={{wrapper: {width: '4em'}}}
                                     onChange={(e, n) => {
                                       setState((m) => {
                                         m.backingMatrix2.subset(math.index(x, y), parseFloat(n))
                                         return {
                                           matrix: m.matrix,
                                           matrix2: m.matrix2,
                                           rows: m.rows,
                                           columns: m.columns,
                                           backingMatrix: m.backingMatrix,
                                           backingMatrix2: m.backingMatrix2,
                                         };
                                       });
                                     }}/>
                        </Col>
                    )}
                  </Row>
              )}
            </Col>
          </Row>
          <hr/>

          <PrimaryButton text="Primary" onClick={
            () => setState(
                (m) => {
                  return {
                    matrix: m.backingMatrix,
                    matrix2: m.backingMatrix2,
                    rows: m.rows,
                    columns: m.columns,
                    backingMatrix: m.backingMatrix,
                    backingMatrix2: m.backingMatrix2,
                  };
                }
            )
          }/>
        </Stack>
      </ThemeProvider>
  );
}