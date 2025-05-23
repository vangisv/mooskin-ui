import React from 'react';

import { Meta, Story } from '@storybook/react';

import {
	Expandable,
	ExpandableItem,
	ExpandableItemButton,
	ExpandableItemContainer,
	ExpandableItemContent,
	ExpandableItemText
} from '../components/Expandable/Expandable';
import { IExpandableComponentProps } from '../components/Expandable/model';

import '../components/Styled/GlobalStyles';

export default {
	component: Expandable,
	title: 'Example/Expandable'
} as any as Meta;

const Template: Story<IExpandableComponentProps> = (args) => {
	const [activeItem, setActiveItem] = React.useState<string | number>(4);
	return (
		<>
			{/*<GlobalStyle />*/}
			<Expandable
				{...args}
				activeItem={activeItem}
				onClickItem={(e: React.MouseEvent<HTMLElement>, value: number | string) => setActiveItem(value)}
			/>
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: [...Array(9)].map((item, i) => {
		return (
			<ExpandableItem key={i} activeId={i}>
				<ExpandableItemContainer>
					<ExpandableItemText>{`Title for item with index: ${i}`}</ExpandableItemText>
					<ExpandableItemButton />
				</ExpandableItemContainer>
				<ExpandableItemContent p={15}>
					<div>{`Content for item with index: ${i}`}</div>
				</ExpandableItemContent>
			</ExpandableItem>
		);
	})
} as IExpandableComponentProps;
