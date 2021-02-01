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
import {Matrix, Vector} from "./Matrix";
import {TextArray, TextMatrix} from "./TextMatrix";
import {CalcButton} from "./CalcButton";


const separatorStyle = {content: {fontSize: '30px'}}

export const App = () => {
  const [state, setState] = useState({
    size: 3,
    result: math.identity(3, 1),
    valueMatrix: math.identity(3, 3),
    voltMatrix: math.identity(3, 1),
  });

  const [isOpen, {setTrue: openPanel, setFalse: dismissPanel}] = useBoolean(false);

  const changeVoltMatrix = (x, y, f) => setState(
      (currentState) => {
        if (isNaN(f)) {
          return currentState;
        }
        return {
          ...currentState,
          voltMatrix: currentState.voltMatrix.subset(math.index(x, y), f),
        };
      });
  const changeValueMatrix = (x, y, f) => setState(
      (currentState) => {
        if (isNaN(f)) {
          return currentState;
        }
        return {
          ...currentState,
          valueMatrix: math.subset(currentState.valueMatrix, math.index(x, y), f),
        };
      });
  const changeSize = (e, n) => setState(
      (currentState) => {
        const i = parseInt(n);
        if (isNaN(i)) {
          return currentState;
        }
        return {
          ...currentState,
          result: math.resize(currentState.result, [i, 1]),
          valueMatrix: math.resize(currentState.valueMatrix, [i, i]),
          voltMatrix: math.resize(currentState.voltMatrix, [i, 1]),
          size: i,

        };
      });
  const doCalc = () => setState(
      (currentState) => {
        const inverse = math.inv(currentState.valueMatrix);
        const result = math.multiply(inverse, currentState.voltMatrix)
        const size = math.size(result);
        return {
          ...currentState,
          result: math.resize(result, [size[0], 1]),
        };
      }
  );
  const renderResult = (v, i) => <>I<sub>{i + 1}</sub> = {v}</>;
  const renderButtons = () => <CalcButton onClick={doCalc}/>;
  const renderVarVector = (i) => <Label>I<sub>{i + 1}</sub></Label>;

  return (
      <ThemeProvider theme={DarkTheme}>
        <Panel
            isLightDismiss
            isOpen={isOpen}
            onDismiss={dismissPanel}
            closeButtonAriaLabel="Close"
            headerText="Settings"
        >
          <SpinButton defaultValue={state.size} label={'Size'} min={1} max={100} styles={{label: {width: '4em'}}}
                      onChange={changeSize}/>

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
                <Separator styles={separatorStyle}>Equation</Separator>
                <Row>
                  <Matrix size={state.size} onChange={changeValueMatrix}/>
                  <Col>
                    <Row nowrap>

                      <TextArray size={state.size} onRender={renderVarVector}/>
                      <TextArray size={state.size} onRender={renderButtons}/>
                      <Vector size={state.size} onChange={changeVoltMatrix}/>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Separator styles={separatorStyle}>Result</Separator>
                <Container>
                  <Stack horizontalAlign="center" verticalFill>
                    <Row nowrap>
                      <TextMatrix value={state.result} onRender={renderResult}/>
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

