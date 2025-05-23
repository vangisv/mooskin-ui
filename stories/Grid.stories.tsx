import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Col, Grid, Row } from '../components/Grid/Grid';
import { IGridProps } from '../components/Grid/model';

import '../components/Styled/GlobalStyles';

export default {
	component: Grid,
	title: 'Example/Grid'
} as any as Meta;

const Template: Story<IGridProps> = (args) => {
	return (
		<>
			{/*<GlobalStyle />*/}
			<Grid style={{ textAlign: 'center' }}>
				<Row style={{ padding: 10, border: '3px solid #F48770' }}>
					<Col lg={12} md={8} sm={6} xs={3} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Col lg-12 md-8 sm-6 xs-3
					</Col>
				</Row>
				<Row style={{ padding: 10, border: '3px solid #F48770' }}>
					<Col lg={6} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Col lg-6
					</Col>
					<Col lg={6} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Col lg-6
					</Col>
				</Row>
				<Row style={{ padding: 10, border: '3px solid #F48770' }}>
					<Col md={6} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Col md-6
					</Col>
					<Col md={6} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Col md-6
					</Col>
				</Row>
				<Row style={{ padding: 10, border: '3px solid #F48770' }}>
					<Col md={4} sm={6} xs={12} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Chart 1
					</Col>
					<Col md={4} sm={6} xs={12} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Chart 2
					</Col>
					<Col md={4} sm={6} xs={12} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Chart 3
					</Col>
					<Col md={4} sm={6} xs={12} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Chart 4
					</Col>
					<Col md={4} sm={6} xs={12} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Chart 5
					</Col>
					<Col md={4} sm={6} xs={12} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Chart 6
					</Col>
					<Col md={6} sm={6} xs={12} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Chart 7
					</Col>
					<Col md={6} sm={6} xs={12} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Chart 8
					</Col>
				</Row>
				<Row style={{ padding: 10, border: '3px solid #F48770' }}>
					<Col lg={6} md={12} sm={8} xs={4} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Col lg-6 md-12 sm-8 xs-4
					</Col>
					<Col lg={6} md={12} sm={4} xs={8} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Col lg-6 md-12 sm-4 xs-8
					</Col>
				</Row>
				<Row style={{ padding: 10, border: '3px solid #F48770' }}>
					<Col lg={4} md={10} sm={1} xs={2} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Col lg-4 md-10 sm-1 xs-1
					</Col>
					<Col lg={4} md={1} sm={10} xs={2} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Col lg-4 md-1 sm-10 xs-1
					</Col>
					<Col lg={4} md={1} sm={1} xs={8} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Col lg-4 md-1 sm-1 xs-10
					</Col>
				</Row>
				<Row style={{ padding: 10, border: '3px solid #F48770' }}>
					<Col lg={8} md={4} sm={6} xs={12} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Col lg-8 md-4 sm-6 xs-12
					</Col>
					<Col lg={4} md={8} sm={6} xs={12} style={{ padding: 10, border: '3px solid #5ccdde' }}>
						Col lg-4 md-8 sm-6 xs-12
					</Col>
				</Row>
				<Row style={{ padding: 10, border: '3px solid #F48770' }}>
					<Col>
						<Row style={{ padding: 10, border: '3px solid #F48770' }}>
							<Col style={{ padding: 10, border: '3px solid #5ccdde' }}>Col</Col>
							<Col style={{ padding: 10, border: '3px solid #5ccdde' }}>Col</Col>
							<Col style={{ padding: 10, border: '3px solid #5ccdde' }}>Col</Col>
						</Row>
						<Row style={{ padding: 10, border: '3px solid #F48770' }}>
							<Col style={{ padding: 10, border: '3px solid #5ccdde' }}>Col</Col>
							<Col style={{ padding: 10, border: '3px solid #5ccdde' }}>Col</Col>
						</Row>
						<Row style={{ padding: 10, border: '3px solid #F48770' }}>
							<Col style={{ padding: 10, border: '3px solid #5ccdde' }}>Col</Col>
						</Row>
					</Col>
					<Col style={{ padding: 10, border: '3px solid #5ccdde' }}>Col</Col>
					<Col style={{ padding: 10, border: '3px solid #5ccdde' }}>Col</Col>
					<Col style={{ padding: 10, border: '3px solid #5ccdde' }}>Col</Col>
				</Row>
			</Grid>
		</>
	);
};

export const Normal = Template.bind({});
