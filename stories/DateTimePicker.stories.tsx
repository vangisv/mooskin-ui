import React from 'react';

import { Meta, Story } from '@storybook/react';

import { DateTimePicker } from '../components/DateTimePicker/DateTimePicker';
import { IDateTimePickerComponentProps } from '../components/DateTimePicker/model';

import '../components/Styled/GlobalStyles';

export default {
	component: DateTimePicker,
	title: 'Example/DateTimePicker'
} as any as Meta;

const Template: Story<IDateTimePickerComponentProps> = (args) => {
	const [date, setDate] = React.useState(new Date());
	return (
		<>
			{/*<GlobalStyle />*/}
			<DateTimePicker {...args} value={date} onChange={(value: any) => setDate(value)} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {} as IDateTimePickerComponentProps;
