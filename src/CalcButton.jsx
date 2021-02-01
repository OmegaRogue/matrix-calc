import {IconButton} from "@fluentui/react";
import React from 'react';

export const CalcButton = (props) =>
    <IconButton id={props.id} text="Calculate" iconProps={{iconName: 'CalculatorEqualTo'}} onClick={props.onClick}/>;