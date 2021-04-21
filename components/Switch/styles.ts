import styled from 'styled-components';

// Models
import { ISwitchComponentProps, ISwitchHandleComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledSwitch = styled(Box)<ISwitchComponentProps>`
	overflow: hidden;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 27px;
	padding: 0 8px;
	cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
	border-radius: 36px;
	transition: background-color 0.3s;
	color: ${(props) =>
		!props.disabled
			? props.palette?.fontColors.button || variables.fontColors.button
			: props.palette?.fontColors.description || variables.fontColors.description};
	background-color: ${(props) => {
		return !props.disabled
			? props.active
				? props.palette?.backgroundColors.switchOn || variables.backgroundColors.switchOn
				: props.palette?.backgroundColors.switchOff || variables.backgroundColors.switchOff
			: props.palette?.backgroundColors.switchDisabled || variables.backgroundColors.switchDisabled;
	}};
`;

StyledSwitch.displayName = 'StyledSwitch';

export const StyledSwitchHandle = styled(Box)<ISwitchHandleComponentProps>`
	position: absolute;
	content: '';
	top: 4px;
	left: 4px;
	height: 19px;
	width: 19px;
	background-color: ${(props) => props.palette?.backgroundColors.switchHandle || variables.backgroundColors.switchHandle};
	transition: transform 0.3s;
	border-radius: 50%;
	z-index: 1;
	transform: ${(props) =>
		props.active
			? `translate(${
					props.switchWidth ? (typeof props.switchWidth === 'string' ? parseInt(props.switchWidth, 10) : props.switchWidth) - 27 : 63
			  }px)`
			: ''};
`;

StyledSwitchHandle.displayName = 'StyledSwitchHandle';

export const StyledSwitchLabel = styled(Box)<Partial<ISwitchComponentProps>>`
	font-family: Hind;
	user-select: none;
	font-size: 12px;
	font-weight: 500;
	color: inherit;
`;

StyledSwitchLabel.displayName = 'StyledSwitchLabel';

export const StyledSwitchLabelNormal = styled(StyledSwitchLabel)`
	align-self: ${(props) => (props.active ? 'flex-start' : 'flex-end')};
`;

StyledSwitchLabelNormal.displayName = 'StyledSwitchLabelNormal';

export const StyledSwitchLabelDisabled = styled(StyledSwitchLabel)`
	color: inherit;
	align-self: center;
`;

StyledSwitchLabelDisabled.displayName = 'StyledSwitchLabelDisabled';
