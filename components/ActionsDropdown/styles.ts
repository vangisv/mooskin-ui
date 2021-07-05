import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../index';
import { IActionsDropdownComponentProps, IActionsDropdownItemComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledActionsDropdown = styled(Box)<IActionsDropdownComponentProps>`
	border-radius: 3px;
	background-color: ${(props) => props.palette?.backgroundColors.primary1 || variables.backgroundColors.primary1};
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 2;
`;

StyledActionsDropdown.displayName = 'StyledActionsDropdown';

export const StyledActionsDropdownItem = styled(Box)<IActionsDropdownItemComponentProps>`
	font-size: 12px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	white-space: nowrap;
	color: ${(props) => props.palette?.fontColors.white || variables.fontColors.white};
	cursor: pointer;
	&:not(:last-child) {
		padding: 10px 10px 0;
	}
	&:last-child {
		padding: 10px;
	}
`;

StyledActionsDropdownItem.displayName = 'StyledActionsDropdownItem';

export const StyledActionsDropdownArrow = styled(Box)<IBoxComponentProps>`
	position: absolute;
	top: -6px;
	right: 22px;
	width: 12px;
	height: 12px;
	transform: rotate(45deg);
	z-index: -1;
	background-color: ${(props) => props.palette?.backgroundColors.primary1 || variables.backgroundColors.primary1};
`;

StyledActionsDropdownArrow.displayName = 'StyledActionsDropdownArrow';
