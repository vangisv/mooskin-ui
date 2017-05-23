import * as React from 'react';
import Button from './Button';

import { mount, render, shallow } from 'enzyme';

describe('Button', () => {

    test('renders properly into dom with color and label', () => {
        const func = jest.fn();

        const component = shallow(<Button onClick={func}>asd</Button>);

        expect(component.find('button').text()).toBe('asd');
        expect(component.find('[disabled=true]').length).toBe(0);
    });

    test('renders a disabled button if disabled prop is passed', () => {
        const func = jest.fn();

        const component = shallow(<Button  onClick={func} disabled>asd</Button>);

        expect(component.find('[disabled=true]').length).toBe(1);
    });

    test('onClick prop callback is called when clicked', () => {
        const func = jest.fn();

        const component = shallow(<Button  onClick={func}>asd</Button>);
        component.find('button').simulate('click');
        expect(func).toHaveBeenCalled();
    });
});
