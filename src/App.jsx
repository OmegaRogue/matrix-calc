import React, {useState} from 'react';
import {
  Stack, ButtonGrid, SpinButton, ThemeProvider, ButtonGridCell, DefaultButton, mergeStyleSets,
  FocusZone, List, useConst, Image, MaskedTextField, TextField, PrimaryButton, CommandBar, Panel, ScrollablePane,
  Sticky, StickyPositionType, Layer, IconButton, Label, Icon, Separator, Text
} from '@fluentui/react';
import logo from './logo.svg'
import './App.css';
import {Checkbox} from '@fluentui/react/lib/Checkbox';
import {DarkTheme} from "@fluentui/theme-samples";
import GridLayout from 'react-grid-layout';

import {Container, Row, Col} from 'react-grid-system';
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
          <SpinButton defaultValue={state.rows} label={'Size'} min={1} max={7} styles={{label: {width: '4em'}}}
                      onChange={onChangeSize(setState)}
          />
        </Panel>

        <ScrollablePane>
          <Sticky stickyPosition={StickyPositionType.Header}>
            <Stack styles={{root: {padding: "1em default default"}}}>
              <IconButton iconProps={{iconName: 'Settings'}} text="Open Settings" onClick={openPanel}/>
            </Stack>
          </Sticky>

          {/*<Stack horizontalAlign="center" verticalAlign="center" verticalFill maxHeight='90%'>*/}
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
                    }}/>
                </Row>
              </Col>
              <Col>

                <Separator
                    styles={{content: {fontSize: '30px'}}}
                >Result</Separator>
                <Container>
                  <Stack horizontalAlign={"center"} verticalFill>
                    <Row nowrap>


                      {/*<TextArray count={state.rows} render={(i) => <Label>I<sub>{i + 1}</sub></Label>}/>*/}
                      {/*<TextMatrix count={state.rows} render={(i) => <Icon iconName='CalculatorEqualTo'/></Label>}/>*/}
                      <TextMatrix value={state.matrix3} readOnly onRender={(v, x, y) =>
                          <>I<sub>{x + 1}</sub> = {v}</>
                      }/>


                    </Row>
                  </Stack>
                </Container>
              </Col>
            </Row>
          </Container>
          {/*</Stack>*/}

        </ScrollablePane>

      </ThemeProvider>
  );
}

