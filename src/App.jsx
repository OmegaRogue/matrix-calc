import React, {useState} from 'react';
import {
  FontIcon,
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

import * as math from 'mathjs';
import {useBoolean} from '@fluentui/react-hooks'
import {DisplayVector, Matrix, Vector} from "./Matrix";
import {TextVector} from "./TextMatrix";
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

  const changeVoltMatrix = (i, f) => setState(
      (currentState) => {
        if (isNaN(f)) {
          return currentState;
        }
        return {
          ...currentState,
          voltMatrix: currentState.voltMatrix.subset(math.index(i, 0), f),
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
        const size = currentState.valueMatrix.size();
        const det = math.det(currentState.valueMatrix)
        if (det == 0) {
          console.log("det 0");
          return {...currentState, result: math.zeros(size[0], 1),};
        }
        const inverse = math.inv(currentState.valueMatrix);
        const result = math.multiply(inverse, currentState.voltMatrix)

        return {
          ...currentState,
          result: math.resize(result, [size[0], 1]),
        };
      }
  );
  const renderResult = (v, i) => <Label>I<sub>{i + 1}</sub> = {v}</Label>;
  const renderButtons = () => <CalcButton onClick={doCalc}/>;
  const renderVarVector = (v, i) => <Label>I<sub>{i + 1}</sub></Label>;

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
          <div>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "stretch",
            }}>
              <div>
                <Separator styles={separatorStyle}>Equation</Separator>
                <Stack horizontalAlign={"center"}>
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    margin: '0 auto',
                    width: "90%", gap: "1em",
                  }}>
                    <Matrix size={state.size} onChange={changeValueMatrix}/>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: ".3fr .1fr .2fr .2fr .2fr",
                    }}>
                      <div/>
                      <TextVector size={state.size} onRender={renderVarVector}/>
                      <TextVector size={state.size} onRender={renderButtons}/>
                      <Vector size={state.size} onChange={changeVoltMatrix}/>
                    </div>
                  </div>
                </Stack>
              </div>
              <div>
                <Separator styles={separatorStyle}>Result</Separator>
                <Stack horizontalAlign="center" verticalFill>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: ".3fr .1fr .2fr .2fr .2fr",
                  }}>
                    <div/>
                    <TextVector size={state.size} onRender={renderVarVector}/>
                    <TextVector size={state.size} onRender={() => <Label style={{
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      display: "flex"
                    }}><FontIcon iconName="CalculatorEqualTo"/></Label>}/>
                    <DisplayVector value={state.result}/>
                    {/*<TextVector value={state.result} onRender={renderResult}/>*/}
                  </div>
                </Stack>
              </div>
            </div>
          </div>


        </ScrollablePane>
      </ThemeProvider>
  );
}

