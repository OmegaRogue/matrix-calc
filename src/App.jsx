import React, {useState} from 'react';
import {
  IconButton,
  Label,
  Panel,
  ScrollablePane,
  Separator,
  SpinButton,
  Stack,
  Sticky,
  StickyPositionType,
  ThemeProvider
} from '@fluentui/react';
import './App.css';
import {DarkTheme} from "@fluentui/theme-samples";

import {Col, Container, Row} from 'react-grid-system';
import * as math from 'mathjs';
import {useBoolean} from '@fluentui/react-hooks'
import {Matrix} from "./Matrix";
import {TextArray, TextMatrix} from "./TextArray";
import {CalcButton} from "./CalcButton";

function onChangeSize(setState) {
  return (e, n) => {
    setState((currentState) => {
      const i = parseInt(n);
      if (isNaN(i)) {
        return currentState;
      }
      currentState.matrix.resize([i, i]);
      currentState.matrix2.resize([i, 1]);
      currentState.matrix3.resize([i, 1]);
      currentState.backingMatrix.resize([i, i]);
      currentState.backingMatrix2.resize([i, 1]);
      return {
        ...currentState,
        rows: i,
        columns: i,

      };
    });
  };
}

export const App = () => {
  const [state, setState] = useState({
    rows: 3,
    columns: 3,
    matrix: math.zeros(3, 3),
    matrix2: math.zeros(3, 1),
    matrix3: math.zeros(3, 1),
    backingMatrix: math.zeros(3, 3),
    backingMatrix2: math.zeros(3, 3),
    backingMatrix3: math.zeros(3, 1),
  });

  const [isOpen, {setTrue: openPanel, setFalse: dismissPanel}] = useBoolean(false);

  return (
      <ThemeProvider theme={DarkTheme}>
        <Panel
            isLightDismiss
            isOpen={isOpen}
            onDismiss={dismissPanel}
            closeButtonAriaLabel="Close"
            headerText="Settings"
        >
          <SpinButton defaultValue={state.rows} label={'Size'} min={1} max={10} styles={{label: {width: '4em'}}}
                      onChange={onChangeSize(setState)}/>

        </Panel>

        <ScrollablePane>
          <Sticky stickyPosition={StickyPositionType.Header}>
            <Stack styles={{root: {padding: "1em default default"}}}>
              <IconButton iconProps={{iconName: 'Settings'}} text="Open Settings" onClick={openPanel}/>
            </Stack>
          </Sticky>

          <Container>
            <Row>
              <Col>
                <Separator styles={{content: {fontSize: '30px'}}}>Equation</Separator>
                <Row>
                  <Matrix value={state.matrix} onChange={
                    (x, y, f) => {
                      setState((currentState) => {
                        if (isNaN(f)) {
                          return currentState;
                        }
                        return {
                          ...currentState,
                          backingMatrix: currentState.backingMatrix.subset(math.index(x, y), f),
                        };
                      });
                    }}/>
                  <Col><Row nowrap>
                    <TextArray count={state.rows} render={(i) => <Label>I<sub>{i + 1}</sub></Label>}/>
                    <TextArray count={state.rows} render={() => <CalcButton setState={setState}/>}/>

                    <Matrix value={state.matrix2} onChange={
                      (x, y, f) => {
                        setState((currentState) => {
                          if (isNaN(f)) {
                            return currentState;
                          }
                          return {
                            ...currentState,
                            backingMatrix2: currentState.backingMatrix2.subset(math.index(x, y), f),
                          };
                        });
                      }}/></Row>
                  </Col>
                </Row>
              </Col>
              <Col>

                <Separator
                    styles={{content: {fontSize: '30px'}}}
                >Result</Separator>
                <Container>
                  <Stack horizontalAlign={"center"} verticalFill>
                    <Row nowrap>

                      <TextMatrix value={state.matrix3} readOnly onRender={(v, x) =>
                          <>I<sub>{x + 1}</sub> = {v}</>
                      }/>


                    </Row>
                  </Stack>
                </Container>
              </Col>
            </Row>
          </Container>


        </ScrollablePane>
      </ThemeProvider>
  );
}

