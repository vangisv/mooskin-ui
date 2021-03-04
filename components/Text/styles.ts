import styled from 'styled-components';

// Models
import { IBoxTextComponentProps } from '../Box/model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledText = styled(Box)<IBoxTextComponentProps>`
	font-family: Hind;
	font-size: 16px;
	font-weight: 400;
	display: flex;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
`;

StyledText.displayName = 'StyledText';
